# AGENTS.md — Backend Concepts Teaching Workspace

## Project Type

This is a **SKILL.md teaching workspace** — a set of static HTML files for an interactive course. No build tools, package.json, tests, or CI. Open `index.html` in a browser to view.

## Content Convention

All lesson content is in **Taglish** (Tagalog-English mix). Technical terms (indexing, REST, JWT) stay in English.

## Architecture

```
index.html              → Landing page with phase overview + Master Anki download
lessons/{id}-{slug}.html → 23 lesson files, each self-contained
assets/style.css         → Shared Tufte-inspired stylesheet (all lessons link it)
assets/quiz-widget.js    → Reusable quiz engine + Anki CSV export
assets/lessons-data.js   → SINGLE SOURCE OF TRUTH — lesson list in order
assets/sidebar.js        → Auto-builds sidebar from lessons-data.js
assets/lesson-nav.js     → Auto-builds prev/next nav from lessons-data.js
MISSION.md               → Why the user is learning (Jr→Mid-Level transition)
RESOURCES.md             → Trusted external resources per topic
NOTES.md                 → Teaching preferences (Taglish, Anki export, etc.)
reference/               → Quick reference cheat sheets (HTML)
learning-records/        → ADR-style records of what was learned
```

## Lesson Filename Convention

`{id}-{slug}.html` where `id` is a zero-padded 4-digit number (`0001`, `0002`...`0023`). The sidebar and nav scripts derive the current lesson ID by splitting the filename on `-` and taking the first token.

## Adding or Reordering Lessons

1. Edit `assets/lessons-data.js` — this is the single source the sidebar and nav derive from
2. Create the lesson HTML at `lessons/{id}-{slug}.html`
3. Every lesson must include these scripts **in this order**:
   ```html
   <script src="../assets/lessons-data.js"></script>
   <script src="../assets/sidebar.js"></script>
   <script src="../assets/lesson-nav.js"></script>
   <script src="../assets/quiz-widget.js"></script>
   ```
4. Every lesson with quizzes must call:
   ```js
   QuizWidget.register(lessonId, questions);
   QuizWidget.render('quizContainer', questions);
   ```

## Quiz Widget

`assets/quiz-widget.js` provides `QuizWidget` with:
- `register(lessonId, questions)` — adds questions to global pool
- `render(containerId, questions)` — renders radio-button quiz UI
- `exportSingle(index)` — downloads 1-row Anki CSV per-question
- `exportLesson(lessonId)` — downloads all questions for a lesson
- `exportMaster()` — downloads all questions across all lessons

Question object format:
```js
{
  question: '...',
  options: ['Option A', 'Option B', 'Option C'],
  correct: 'b',   // zero-indexed letter: 'a', 'b', 'c'
  answer: 'Explanation of correct answer'
}
```

Anki CSV: no header row. Format: `"question\n\n• option\n• option","correct answer: explanation"`.

## Course Structure

6 phases, 23 lessons:
- Phase 1 (0001-0004): Database Fundamentals
- Phase 2 (0005-0008): API Design
- Phase 3 (0009-0011): Caching & Performance
- Phase 4 (0012-0016): Scalability & Distributed Systems
- Phase 5 (0017-0019): Security Fundamentals
- Phase 6 (0020-0023): Interview Prep

## What Not To Do

- Do not add emojis unless the user explicitly asks
- Do not add comments to lesson HTML or JS files
- Do not create documentation files unless explicitly requested
- Do not run any build/test commands — this is static HTML only
