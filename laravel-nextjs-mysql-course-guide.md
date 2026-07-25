# Laravel + Next.js + MySQL — Side Project/Business Course Guide
### Para sa Full-Stack System Development (Backend: Laravel API, Frontend: Next.js, DB: MySQL)
### Format: Agentic Coding Practice (gamit ang AI coding assistant tulad ng Claude Code)

---

## Paano Gamitin Itong Guide

Ang layunin dito ay hindi lang gumawa ng "tutorial project" kundi buuin ang mismong side business/product mo gamit ang stack na ito. Bawat lesson ay may **Hands-On Task** na direktang applicable sa project mo — gawin mo agad sa sarili mong codebase, hindi sa hiwalay na sample app. Bago mag-move sa susunod na lesson:

1. Nakumpleto ang hands-on task sa aktwal na project mo
2. Naipaliwanag mo sa sarili mo kung bakit ganung approach (hindi lang copy-paste ng AI output)
3. May committed code sa git (practice ng proper version control habang natututo)

---

## Ang Spec-Driven Agentic Workflow (Gagamitin sa Buong Course)

Ginagamit dito ang **BMAD** (Breakthrough Method for Agile AI-Driven Development) para gumawa ng planning documents bago mag-code, tapos **GSD** (Get Shit Done) naman para sa actual implementation phase — dito na papasok ang sub-agents na mag-iimplement base sa mga documents na ginawa via BMAD, habang iniiwasan ang "context rot" sa mahahabang coding sessions.

| File | Layunin |
|---|---|
| **PRD** | Product Requirements Document — ano ang feature, para kanino, bakit kailangan, at ano ang success criteria mula sa product/business perspective |
| **architecture** | High-level technical structure — tech stack, paano magkakaugnay ang components/modules/services, paano nag-uusap ang backend at frontend |
| **design** | UX/visual design consistency — theme, look-and-feel, design system/components na dapat sundin para consistent ang buong app |
| **experience** | User-flow — paano dadaan ang user sa feature (states, steps, edge cases sa interaction) |
| **spec** | Ang exact requirements/acceptance criteria — kailan tapos ang feature |
| **error_handling** | Anong mga error cases ang posible at paano dapat i-handle ang bawat isa |

**Paano ito iaapply sa bawat lesson sa course guide na ito:**

Sa halip na diretsong "Hands-On Task" agad, dadagdagan natin ang workflow bawat lesson:

1. **Bago mag-code (BMAD phase)** — gumawa muna ng `PRD`, `architecture`, `design`, `experience`, `spec`, at `error_handling` files/notes para sa specific na feature ng lesson na iyon (hindi kailangan lahat ng anim palagi — depende sa complexity, minsan `spec` + `error_handling` lang sapat na para sa maliit na task).
2. **I-review ang mga spec files** bago ipasa sa agent — ito yung part na dapat ikaw talaga ang nag-iisip, hindi puro AI.
3. **Saka lang mag-implement (GSD phase)** gamit ang agent, batay sa mga spec na ginawa — dito papasok ang sub-agents na tumutupad sa implementation nang paisa-isa habang naka-fresh ang context.
4. **I-validate laban sa `spec` at `error_handling`** — check kung natupad ba ang acceptance criteria at na-handle ba ang mga edge cases na na-identify.

Ito ay magiging default na approach sa **bawat Hands-On Task** sa Phase 0-6 sa ibaba — hindi na babanggitin paulit-ulit sa bawat lesson, pero ito ang assumed workflow bago mag-implement.

---

## PHASE 0: Project Planning at Setup
*Layunin: Malinaw na foundation bago magsimulang mag-code.*

### Lesson 0.0 — Practice ang BMAD → GSD Workflow
- **Topics:** Paano gumawa ng `PRD`, `architecture`, `design` (UX/visual consistency), `experience`, `spec`, at `error_handling` files gamit ang BMAD — ano ang laman ng bawat isa, gaano kadetalyado dapat. Paano i-hand off ang mga documents na ito papunta sa GSD para sa actual implementation.
- **Hands-On Task:** Pumili ng isang maliit, self-contained na feature (hal. "user registration"), gumawa ng buong set ng documents para dito gamit ang BMAD bago pa man tayo pumasok sa Phase 1. I-feed ang mga ito sa GSD at subukan kung sapat ba ang context para direktang mag-implement nang tama sa unang subok.
- **Output:** `docs/specs/user-registration/` na may `prd.md`, `architecture.md`, `design.md`, `experience.md`, `spec.md`, `error_handling.md`

### Lesson 0.1 — Define ang Product/MVP Scope
- **Topics:** Paano mag-scope ng MVP, ano ang dapat i-cut muna
- **Hands-On Task:** Isulat ang core features ng side business mo (max 5 lang para sa MVP). I-validate sa AI agent kung realistic ba ang scope para sa timeline mo.
- **Output:** `docs/mvp-scope.md`

### Lesson 0.2 — Database Schema Planning
- **Topics:** Entity relationship diagram, core tables, relationships
- **Hands-On Task:** I-design ang ERD ng project mo gamit ang agent (pwedeng mermaid diagram sa markdown). I-review kung tama ba ang relationships bago mag-migrate.
- **Output:** `docs/erd.md`

### Lesson 0.3 — Project Structure Setup
- **Topics:** Laravel API-only setup (`laravel new --api`), Next.js setup, monorepo vs separate repos
- **Hands-On Task:** I-set up ang dalawang projects (Laravel bilang API, Next.js bilang frontend). Magpasya kung monorepo o hiwalay na repos ang gagamitin mo — i-justify ang desisyon.
- **Output:** Working local dev environment, dalawang projects na nag-uusap sa isa't-isa (test lang gamit ang simpleng health-check endpoint)

---

## PHASE 1: Laravel Backend Foundations
*Layunin: Gumawa ng solid, RESTful API na magsisilbing utak ng system.*

### Lesson 1.1 — Migrations at Eloquent Models
- **Topics:** Migrations best practices, Eloquent relationships (hasMany, belongsTo, etc.), fillable/guarded
- **Hands-On Task:** I-implement ang schema mo mula Lesson 0.2 gamit ang migrations, gumawa ng models na may tamang relationships.

### Lesson 1.2 — API Resources at Controllers
- **Topics:** RESTful controllers, API Resources para sa response shaping, form requests para sa validation
- **Hands-On Task:** Gumawa ng full CRUD endpoint para sa isang core entity ng project mo (hal. products, bookings, listings) gamit ang proper Resource classes at Form Request validation.

### Lesson 1.3 — Authentication gamit ang Sanctum
- **Topics:** Laravel Sanctum para sa SPA/token authentication, paano ito mag-iba sa session-based auth
- **Hands-On Task:** I-set up ang Sanctum authentication sa Laravel API, i-connect sa Next.js frontend gamit ang login flow.
- **Note:** Ito ang standard approach para sa Laravel API + separate frontend (hindi Passport, sobrang overkill iyon para sa karamihang side projects).

### Lesson 1.4 — Authorization (Policies at Gates)
- **Topics:** Kailan gagamit ng Policy vs Gate, paano i-protect ang endpoints base sa user roles/ownership
- **Hands-On Task:** Mag-implement ng Policy para sa isang resource (hal. user can only edit/delete sarili nilang posts/listings).

### Lesson 1.5 — File Uploads at Storage
- **Topics:** Laravel filesystem, local vs S3/cloud storage, image handling
- **Hands-On Task:** Mag-implement ng image/file upload endpoint (hal. product image, profile photo) na naka-store sa disk o cloud storage.

### Lesson 1.6 — Queues at Background Jobs
- **Topics:** Kailan gagamit ng queue (emails, notifications, heavy processing), paano mag-set up ng queue worker
- **Hands-On Task:** I-move ang isang synchronous operation (hal. sending welcome email) papuntang queued job.

---

## PHASE 2: Next.js Frontend Foundations
*Layunin: Gumawa ng maayos, performant na frontend na kumokonekta sa Laravel API.*

### Lesson 2.1 — App Router Basics at Project Structure
- **Topics:** Next.js App Router, server components vs client components, kailan gagamit ng alin
- **Hands-On Task:** I-set up ang folder structure ng project mo (routes, components, lib/utils). Gumawa ng simpleng listing page gamit ang server component na kumukuha ng data mula sa Laravel API.

### Lesson 2.2 — Data Fetching Patterns
- **Topics:** Server-side fetching sa Next.js, paano mag-handle ng loading/error states, caching behavior ng fetch sa Next.js
- **Hands-On Task:** I-implement ang data fetching para sa isang listing page (hal. products list) kasama ang loading skeleton at error handling.

### Lesson 2.3 — Forms at Mutations
- **Topics:** Client-side forms, form validation, paano mag-send ng POST/PUT/DELETE papuntang Laravel API
- **Hands-On Task:** Gumawa ng create/edit form para sa core entity mo, kasama ang client-side validation at error message display mula sa Laravel validation errors.

### Lesson 2.4 — Authentication Flow sa Frontend
- **Topics:** Paano mag-store ng auth token/session, protected routes, middleware sa Next.js
- **Hands-On Task:** I-implement ang login/logout flow, i-protect ang mga pages na kailangan naka-login (dashboard, admin pages).

### Lesson 2.5 — State Management
- **Topics:** Kailan kailangan ng external state library (Zustand, Context API) vs kailan sapat na ang local state/server components
- **Hands-On Task:** I-identify ang isang piece of state sa app mo na kailangan i-share across components (hal. cart, user session) at i-implement gamit ang appropriate solution — huwag mag-over-engineer.

---

## PHASE 3: MySQL Deep Dive
*Layunin: Maging kumportable sa paggawa ng efficient at tamang database design.*

### Lesson 3.1 — Indexing sa Konteksto ng Laravel
- **Topics:** Paano maglagay ng indexes sa migrations, common columns na dapat naka-index (foreign keys, search columns)
- **Hands-On Task:** I-review ang mga tables mo, maglagay ng appropriate indexes base sa mga query na ginagawa mo (check via `DB::listen` o query log).

### Lesson 3.2 — Query Optimization
- **Topics:** Eager loading (`with()`) para maiwasan ang N+1, `EXPLAIN` sa MySQL
- **Hands-On Task:** Hanapin ang isang N+1 issue sa project mo (kadalasan nasa listing pages na may relationships), ayusin gamit ang eager loading.

### Lesson 3.3 — Migrations at Seeders para sa Development
- **Topics:** Factories at seeders para sa test data, refresh/rollback strategies
- **Hands-On Task:** Gumawa ng factories at seeders para sa core models mo, para may realistic test data habang nagde-develop.

### Lesson 3.4 — Backup at Data Integrity
- **Topics:** Foreign key constraints, cascade on delete, basic backup strategy para sa production
- **Hands-On Task:** I-review ang mga foreign keys mo, magpasya kung `cascade`, `restrict`, o `set null` ang tama sa bawat relationship.

---

## PHASE 4: Connecting the Full Stack
*Layunin: Siguraduhin na maayos ang integration ng Laravel API at Next.js frontend.*

### Lesson 4.1 — CORS at API Configuration
- **Topics:** Paano mag-configure ng CORS sa Laravel para tanggapin ang requests mula sa Next.js domain
- **Hands-On Task:** I-configure ang `config/cors.php` nang tama, i-test na gumagana ang requests mula sa frontend papunta sa API kahit iba ang domain/port.

### Lesson 4.2 — Environment Configuration
- **Topics:** `.env` management sa Laravel at Next.js, paano ihiwalay ang dev/staging/production configs
- **Hands-On Task:** I-set up ang environment variables nang tama sa parehong projects, siguraduhin walang naka-hardcode na URLs o secrets.

### Lesson 4.3 — Error Handling End-to-End
- **Topics:** Paano mag-format ng error responses sa Laravel, paano i-consume at i-display sa Next.js
- **Hands-On Task:** I-standardize ang error response format ng API mo (hal. consistent JSON structure), i-handle nang maayos sa frontend (toast notifications, inline errors).

### Lesson 4.4 — API Contract Documentation
- **Topics:** Bakit importante ang documented API endpoints, simpleng approach (Postman collection o markdown docs)
- **Hands-On Task:** I-dokumento ang lahat ng endpoints mo (method, path, request/response shape) sa isang markdown file o Postman collection.

---

## PHASE 5: Deployment at Production Readiness
*Layunin: Ma-launch ang side project mo nang maayos at secure.*

### Lesson 5.1 — Hosting Options
- **Topics:** Laravel Forge/Vapor vs VPS (DigitalOcean, Hetzner), Next.js sa Vercel vs self-hosted
- **Hands-On Task:** Magpasya kung saan i-deploy base sa budget at scale ng project mo, i-justify ang desisyon.

### Lesson 5.2 — Environment at Secrets Management sa Production
- **Topics:** Paano mag-manage ng production secrets, database credentials, API keys nang secure
- **Hands-On Task:** I-set up ang production environment variables nang maayos, siguraduhin walang secrets na naka-commit sa git.

### Lesson 5.3 — Basic CI/CD
- **Topics:** Simpleng deployment pipeline (GitHub Actions), automated tests bago mag-deploy
- **Hands-On Task:** Gumawa ng simpleng GitHub Actions workflow na nagpapatakbo ng tests bago mag-deploy.

### Lesson 5.4 — Monitoring at Error Tracking
- **Topics:** Basic logging, error tracking tools (Sentry o katulad), uptime monitoring
- **Hands-On Task:** I-set up ang error tracking sa parehong Laravel at Next.js para malaman mo agad kung may nasira sa production.

---

## PHASE 6: Business/Product Considerations
*Layunin: Dahil side business ito, hindi lang code ang importante.*

### Lesson 6.1 — Payment Integration (kung applicable)
- **Topics:** Paano mag-integrate ng payment gateway (Stripe, PayMongo, GCash-based providers), webhook handling
- **Hands-On Task:** I-implement ang basic payment flow para sa product/service mo kung may monetization component.

### Lesson 6.2 — Analytics at User Behavior Tracking
- **Topics:** Basic analytics setup, ano ang dapat i-track (signups, conversions, drop-off points)
- **Hands-On Task:** Mag-set up ng simpleng analytics (hal. Plausible, PostHog, o kahit custom logging) para malaman mo kung paano ginagamit ang product mo.

### Lesson 6.3 — Feedback Loop at Iteration
- **Topics:** Paano mangolekta ng user feedback, prioritization ng susunod na features
- **Hands-On Task:** Gumawa ng simpleng feedback mechanism (form, email, o widget) sa app mo.

---

## Suggested Timeline (Flexible)

| Phase | Estimated Duration |
|---|---|
| Phase 0: Project Planning & Setup | 3-4 days |
| Phase 1: Laravel Backend Foundations | 1.5-2 weeks |
| Phase 2: Next.js Frontend Foundations | 1.5-2 weeks |
| Phase 3: MySQL Deep Dive | 1 week |
| Phase 4: Connecting the Full Stack | 3-4 days |
| Phase 5: Deployment & Production Readiness | 1 week |
| Phase 6: Business/Product Considerations | Ongoing habang lumalaki ang product |

**Total: ~7-8 weeks papuntang MVP launch**, flexible depende sa scope ng project mo at available time mo bilang currently-employed Jr developer.

---

## Susunod na Hakbang

Habang ginagawa natin ang bawat phase, pwede rin nating i-log ang mga key decisions at "gotchas" na natutunan mo bilang review notes o Anki cards — lalo na yung mga bagay na madalas pagkamalian (hal. CORS config, Sanctum vs Passport, N+1 issues). Sabihin mo lang kung saang phase/lesson tayo magsisimula.
