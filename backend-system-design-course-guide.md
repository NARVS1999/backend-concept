# Backend Concepts & System Design — Course Guide
### Para sa Jr → Mid-Level Backend Developer Transition
### Format: Agentic Coding Practice (gamit ang AI coding assistant tulad ng Claude Code)

---

## Paano Gamitin Itong Guide

Bawat lesson ay may **Hands-On Task** na dapat mong gawin gamit ang agentic coding tool (Claude Code, Cursor, etc.) — hindi lamang basahin ang teorya. Ang layunin: maintindihan mo ang *bakit* likod ng bawat desisyon, kahit na ang AI ang tumulong sa implementation. Bago mag-move sa susunod na lesson, kailangan mo:

1. Maipaliwanag ang konsepto sa sarili mong salita (walang AI)
2. Nakumpleto ang hands-on task
3. Nasagot ang "Interview Angle" questions nang walang tingin sa notes

---

## PHASE 1: Database Fundamentals
*Layunin: Maintindihan paano gumagana ang data storage sa ilalim ng hood, hindi lang paano gumawa ng migrations.*

### Lesson 1.1 — Normalization at Schema Design
- **Topics:** 1NF/2NF/3NF, kailan mag-denormalize, relationships (1:1, 1:M, M:M)
- **Hands-On Task:** Gamit ang AI agent, magpagawa ng schema para sa isang e-commerce app (users, orders, products, order_items). Tanungin ang agent kung bakit ganung structure, hindi lang tanggapin ang output.
- **Interview Angle:** "Bakit hindi mo lagyan ng repeating columns (product_1, product_2...) yung isang order?"

### Lesson 1.2 — Indexing
- **Topics:** B-tree index, kailan effective ang index, composite index, kailan masamang idea mag-over-index
- **Hands-On Task:** Gumawa ng table na may 100k+ rows (seed data via agentic script), tapos i-compare ang query speed with vs without index gamit ang `EXPLAIN ANALYZE`.
- **Interview Angle:** "Bakit hindi lahat ng columns dapat may index?"

### Lesson 1.3 — N+1 Query Problem
- **Topics:** Paano nangyayari ang N+1, eager loading, lazy loading
- **Hands-On Task:** Magpagawa ng agent ng intentionally-buggy code na may N+1 issue, tapos ikaw mismo ang mag-identify at mag-fix (huwag muna hayaan i-fix ng agent agad).
- **Interview Angle:** "Paano mo made-detect ang N+1 sa production?"

### Lesson 1.4 — Transactions at ACID
- **Topics:** Atomicity, Consistency, Isolation, Durability, isolation levels, deadlocks
- **Hands-On Task:** Gumawa ng simple bank transfer function na dapat atomic (parehong deduct at add sa isang transaction). Subukan i-simulate ang failure mid-transaction.
- **Interview Angle:** "Ano ang mangyayari kung mag-crash ang server sa gitna ng transaction?"

---

## PHASE 2: API Design
*Layunin: Marunong gumawa ng APIs na hindi lang "gumagana" kundi maintainable at scalable.*

### Lesson 2.1 — REST Principles at Best Practices
- **Topics:** Resource naming, HTTP verbs, status codes, statelessness
- **Hands-On Task:** I-design ang isang REST API para sa "task management app" — magpagawa ng endpoints list muna bago magpa-code.
- **Interview Angle:** "Bakit PUT vs PATCH? Kailan gagamit ng alin?"

### Lesson 2.2 — Versioning at Backward Compatibility
- **Topics:** URL versioning, header versioning, breaking vs non-breaking changes
- **Hands-On Task:** Gumawa ng v1 endpoint, tapos i-evolve papuntang v2 nang hindi sinisira ang v1 clients.
- **Interview Angle:** "May existing mobile app na tumatawag sa API mo. Paano ka magdadagdag ng required field nang hindi nakaka-break sa kanila?"

### Lesson 2.3 — Pagination, Filtering, Sorting
- **Topics:** Offset vs cursor-based pagination, kailan mas maganda ang isa sa isa
- **Hands-On Task:** I-implement ang parehong offset at cursor pagination sa isang listing endpoint, tapos i-benchmark performance sa malaking dataset.
- **Interview Angle:** "Bakit cursor-based pagination ang preferred sa infinite scroll feeds?"

### Lesson 2.4 — Rate Limiting
- **Topics:** Token bucket, sliding window, kailan i-apply
- **Hands-On Task:** Magpa-implement ng simple rate limiter middleware (in-memory muna, tapos Redis-based).
- **Interview Angle:** "Paano ka mag-rate-limit sa distributed system na maraming server instances?"

---

## PHASE 3: Caching at Performance
*Layunin: Maintindihan kung kailan at paano gagamit ng caching nang tama.*

### Lesson 3.1 — Caching Fundamentals
- **Topics:** Cache-aside, write-through, write-behind patterns
- **Hands-On Task:** Mag-set up ng Redis, i-cache ang isang expensive database query, i-measure ang improvement.
- **Interview Angle:** "Ano ang tradeoff ng cache-aside pattern?"

### Lesson 3.2 — Cache Invalidation
- **Topics:** TTL, event-based invalidation, "there are only two hard things in computer science"
- **Hands-On Task:** I-simulate ang stale cache scenario — magpalit ng data sa DB, tignan kung kelan mag-uupdate ang cached response, tapos ayusin gamit ang proper invalidation.
- **Interview Angle:** "Paano mo sisiguraduhin na hindi laos ang datos na nasa cache?"

### Lesson 3.3 — Background Jobs at Queues
- **Topics:** Sync vs async processing, message queues (Redis Queue, RabbitMQ, SQS basics)
- **Hands-On Task:** Gumawa ng endpoint na nagse-send ng email — i-move ito sa background job/queue instead of synchronous call.
- **Interview Angle:** "Bakit hindi dapat naka-block ang user request habang nagse-send ng email?"

---

## PHASE 4: Scalability at Distributed Systems
*Layunin: Maunawaan paano lumalaki ang isang system mula sa isang server papuntang milyun-milyong users.*

### Lesson 4.1 — Vertical vs Horizontal Scaling
- **Topics:** Tradeoffs ng bawat isa, statelessness bilang requirement para sa horizontal scaling
- **Hands-On Task:** Wala/theoretical — gumawa ng diagram (pwedeng markdown/mermaid) ng architecture na naka-scale horizontally.
- **Interview Angle:** "Bakit mahirap i-scale horizontally ang application na naka-store ng session sa local memory?"

### Lesson 4.2 — Load Balancing
- **Topics:** Round robin, least connections, health checks
- **Hands-On Task:** Gamit ang docker-compose, mag-set up ng 2 app instances sa likod ng isang simpleng load balancer (nginx).
- **Interview Angle:** "Ano ang mangyayari kung mamatay ang isang server instance habang tumatakbo ang load balancer?"

### Lesson 4.3 — Database Replication at Sharding
- **Topics:** Read replicas, master-slave setup, kailan mag-shard
- **Hands-On Task:** Theoretical exercise — i-design paano mo i-shard ang isang users table na may 100 million rows.
- **Interview Angle:** "Ano ang replication lag at bakit importante ito?"

### Lesson 4.4 — CAP Theorem (Conceptual)
- **Topics:** Consistency, Availability, Partition Tolerance — bakit hindi pwede lahat ng tatlo
- **Hands-On Task:** Wala — discussion/reflection lang. Isulat sa sarili mong salita kung saan babagsak ang mga common databases (MySQL, MongoDB, Cassandra) sa CAP spectrum.
- **Interview Angle:** "Bakit hindi pwedeng ma-guarantee ang parehong consistency at availability kapag may network partition?"

### Lesson 4.5 — Basic System Design Practice
- **Topics:** Paano lapitan ang system design questions (clarify requirements → high-level design → deep dive → tradeoffs)
- **Hands-On Task:** I-design ang isang "URL Shortener" at "Simple Notification System" gamit ang framework sa taas. Isulat ang design bago tignan ang solutions online.
- **Interview Angle:** Ito mismo ang common interview format — practice mo ito nang live, ikaw ang nagsasalita, AI agent lang tatanong ng follow-ups.

---

## PHASE 5: Security Fundamentals
*Layunin: Maiwasan ang common vulnerabilities na madalas tanungin sa interviews at kailangan sa totoong production.*

### Lesson 5.1 — Authentication vs Authorization
- **Topics:** Difference ng dalawa, session-based auth, token-based auth (JWT)
- **Hands-On Task:** Mag-implement ng JWT-based authentication middleware.
- **Interview Angle:** "Bakit hindi dapat naka-store ang sensitive data sa JWT payload?"

### Lesson 5.2 — Common Vulnerabilities
- **Topics:** SQL injection, XSS, CSRF — paano ito nangyayari at paano maiiwasan
- **Hands-On Task:** Magpakita ang agent ng vulnerable code example (query concatenation), tapos ikaw ang mag-identify ng issue bago ipa-fix.
- **Interview Angle:** "Bakit hindi safe ang string concatenation sa pag-build ng SQL query?"

### Lesson 5.3 — Password Handling
- **Topics:** Hashing vs encryption, bcrypt/argon2, salting
- **Hands-On Task:** Mag-implement ng password hashing gamit ang bcrypt, tapos ipaliwanag bakit hindi dapat plain-text o simpleng MD5.
- **Interview Angle:** "Bakit hindi sapat ang MD5 para sa password storage?"

---

## PHASE 6: Interview Preparation at Mock Practice
*Layunin: I-convert ang natutunan papuntang confident na performance sa actual interview.*

### Lesson 6.1 — Behavioral + Technical Story Bank
- **Hands-On Task:** Gumawa ng listahan ng 5 project/scenario mula sa Jr experience mo, i-frame gamit ang STAR method, i-relate sa mga backend concepts na natutunan (hal. "nag-optimize ako ng slow query gamit ang indexing").

### Lesson 6.2 — Mock System Design Interview
- **Hands-On Task:** Gamit ang AI agent bilang interviewer, mag-practice ng "design a rate limiter" o "design a chat application" nang oral/written, may time limit (30-45 mins).

### Lesson 6.3 — Mock Technical Q&A
- **Hands-On Task:** Ipagawa sa agent na maging interviewer — magtanong ng random questions mula sa Phase 1-5, sagutin mo nang walang notes, tapos i-review ang mga sagot.

### Lesson 6.4 — Anki Review System
- **Hands-On Task:** I-convert ang lahat ng "Interview Angle" questions sa buong course papunta sa Anki flashcards (Front = question, Back = concise answer) para sa spaced repetition review bago ang actual interview.

---

## Suggested Timeline (Flexible)

| Phase | Estimated Duration |
|---|---|
| Phase 1: Database Fundamentals | 1 week |
| Phase 2: API Design | 1 week |
| Phase 3: Caching & Performance | 1 week |
| Phase 4: Scalability & Distributed Systems | 1.5 weeks |
| Phase 5: Security Fundamentals | 1 week |
| Phase 6: Interview Prep | 1 week |

**Total: ~6-7 weeks**, ginagawa habang nagtatrabaho pa rin bilang Jr developer.

---

## Susunod na Hakbang

Pagkatapos ng bawat lesson, pwede nating i-convert ang "Interview Angle" questions papuntang Anki CSV para sa review. Sabihin mo lang kung anong phase/lesson ang gusto mong simulan.
