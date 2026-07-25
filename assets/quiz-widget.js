// ============================================================
// Quiz Widget — Reusable quiz engine with Anki CSV export
//
// Features:
//   - Renders quiz questions with radio options
//   - Check Answers with inline feedback
//   - Per-question "Export to Anki" button (browser download)
//   - Per-lesson "Export All to Anki" button
//   - Master export of all registered questions
//
// Usage:
//   QuizWidget.register(lessonId, questions)
//   QuizWidget.render(containerId, questions)
// ============================================================
window.QuizWidget = (function() {
  var allQuestions = [];
  var questionCounter = 0;

  function escapeCsv(val) {
    val = String(val).replace(/"/g, '""');
    return '"' + val + '"';
  }

  function downloadCsv(filename, rows) {
    var csv = rows.join('\n');
    var bom = '\uFEFF';
    var blob = new Blob([bom + csv], { type: 'text/csv;charset=utf-8;' });
    var link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
    URL.revokeObjectURL(link.href);
  }

  function buildFrontText(q) {
    var text = q.question + '\n\n';
    if (q.options && q.options.length) {
      q.options.forEach(function(opt) {
        text += '\u2022 ' + opt + '\n';
      });
    }
    return text.trim();
  }

  function ankiRow(q) {
    var front = buildFrontText(q);
    var back = 'correct answer: ' + q.answer;
    return escapeCsv(front) + ',' + escapeCsv(back);
  }

  return {
    // Register questions for master export
    register: function(lessonId, questions) {
      questions.forEach(function(q) {
        q._lessonId = lessonId;
        q._idx = questionCounter++;
      });
      allQuestions = allQuestions.concat(questions);
    },

    // Render quiz items into a container
    render: function(containerId, questions) {
      var container = document.getElementById(containerId);
      if (!container) return;
      var html = '';
      questions.forEach(function(q, i) {
        html += '<div class="quiz-item" id="qi-' + i + '">';
        html += '<div class="quiz-question">' + (i + 1) + '. ' + q.question + '</div>';
        html += '<div class="quiz-options">';
        q.options.forEach(function(opt, j) {
          var val = String.fromCharCode(97 + j);
          html += '<label class="quiz-option"><input type="radio" name="qw-q' + i + '" value="' + val + '"> ' + opt + '</label>';
        });
        html += '</div>';
        html += '<div class="quiz-feedback" id="qw-fb-' + i + '"></div>';
        html += '<div style="display:flex;gap:0.5rem;margin-top:0.5rem;flex-wrap:wrap;">';
        html += '<button class="quiz-submit" onclick="QuizWidget.check(' + i + ')">Check Answer</button>';
        html += '<button class="quiz-submit quiz-anki-btn" onclick="QuizWidget.exportSingle(' + i + ')">Export to Anki</button>';
        html += '</div></div>';
      });
      container.innerHTML = html;
    },

    // Check a single answer
    check: function(i) {
      var q = allQuestions[i];
      if (!q) return;
      var sel = document.querySelector('input[name="qw-q' + i + '"]:checked');
      var fb = document.getElementById('qw-fb-' + i);
      if (!sel) {
        fb.textContent = 'Please select an answer.';
        fb.className = 'quiz-feedback incorrect';
        return;
      }
      var answerIndex = parseInt(sel.value, 10) - 97;
      var isCorrect = sel.value === q.correct;
      if (isCorrect) {
        fb.textContent = 'Correct! ' + q.answer;
        fb.className = 'quiz-feedback correct';
      } else {
        fb.textContent = 'Incorrect. Review the material. Correct answer: ' + q.answer;
        fb.className = 'quiz-feedback incorrect';
      }
    },

    // Export a single question as CSV
    exportSingle: function(i) {
      var q = allQuestions[i];
      if (!q) return;
      var lessonId = q._lessonId || 'unknown';
      var filename = 'anki-export-' + lessonId + '-q' + (i + 1) + '.csv';
      downloadCsv(filename, [ankiRow(q)]);
    },

    // Export all questions for a lesson as CSV
    exportLesson: function(lessonId) {
      var rows = [];
      allQuestions.forEach(function(q) {
        if (q._lessonId === lessonId) rows.push(ankiRow(q));
      });
      if (!rows.length) return;
      downloadCsv('anki-export-' + lessonId + '.csv', rows);
    },

    // Export ALL registered questions as one master CSV
    exportMaster: function() {
      if (!allQuestions.length) return;
      var rows = [];
      allQuestions.forEach(function(q) { rows.push(ankiRow(q)); });
      downloadCsv('anki-master-export.csv', rows);
    },

    // Build a Download Master CSV button (call once at the end)
    renderMasterExport: function(containerId) {
      var container = document.getElementById(containerId);
      if (!container) return;
      var btn = document.createElement('button');
      btn.className = 'quiz-submit quiz-anki-btn';
      btn.textContent = 'Download Master Anki CSV (All Lessons)';
      btn.onclick = function() { QuizWidget.exportMaster(); };
      container.appendChild(btn);
    },

    // Get total questions count
    count: function() {
      return allQuestions.length;
    }
  };
})();
