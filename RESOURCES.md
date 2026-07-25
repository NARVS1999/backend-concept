# Resources

## Phase 1: Database Fundamentals

| Lesson | Resource |
|---|---|
| Normalization & Schema Design | [Database Normalization Explained (freeCodeCamp)](https://www.freecodecamp.org/news/database-normalization-1nf-2nf-3nf/) |
| Indexing | [Use the Index, Luke](https://use-the-index-luke.com/) — Comprehensive guide sa indexing |
| N+1 Query Problem | [Awesome N+1 (GitHub)](https://github.com/janestreet/awesome-n-plus-one) — Examples in different ORMs |
| Transactions & ACID | [PostgreSQL Transactions Docs](https://www.postgresql.org/docs/current/tutorial-transactions.html) |

## Phase 2: API Design

| Lesson | Resource |
|---|---|
| REST Principles | [REST API Tutorial](https://restfulapi.net/) |
| Versioning | [API Versioning Strategies (Microsoft)](https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design#versioning) |
| Pagination | [Offset vs Cursor Pagination (Slack Blog)](https://slack.engineering/evolving-api-pagination-at-slack/) |
| Rate Limiting | [Rate Limiting Strategies (Cloudflare)](https://www.cloudflare.com/learning/bots/what-is-rate-limiting/) |

## Phase 3: Caching & Performance

| Lesson | Resource |
|---|---|
| Caching Fundamentals | [Redis Caching Patterns (Redis)](https://redis.io/docs/manual/patterns/) |
| Cache Invalidation | [Cache Invalidation Strategies (Martin Fowler)](https://martinfowler.com/bliki/Cache.html) |
| Background Jobs | [RabbitMQ Tutorials](https://www.rabbitmq.com/tutorials) |

## Phase 4: Scalability & Distributed Systems

| Lesson | Resource |
|---|---|
| Scaling | [System Design Primer (GitHub)](https://github.com/donnemartin/system-design-primer) |
| Load Balancing | [Load Balancing (NGINX)](https://docs.nginx.com/nginx/admin-guide/load-balancer/) |
| Replication & Sharding | [Database Sharding (Wikipedia)](https://en.wikipedia.org/wiki/Shard_(database_architecture)) |
| CAP Theorem | [CAP Theorem (Eric Brewer)](https://www.infoq.com/articles/cap-twelve-years-later-how-the-rules-have-changed/) |
| System Design | [System Design Interview (Alex Xu)](https://www.amazon.com/System-Design-Interview-Insiders-Strategy/dp/1736049119) |

## Phase 5: Security

| Lesson | Resource |
|---|---|
| Auth vs Authz | [JWT.io](https://jwt.io/) — JWT debugger at introduction |
| Common Vulnerabilities | [OWASP Top 10](https://owasp.org/www-project-top-ten/) |
| Password Handling | [bcrypt Paper](https://www.usenix.org/legacy/events/usenix99/provos/provos_html/node1.html) |

## Phase 6: Interview Prep

| Lesson | Resource |
|---|---|
| STAR Method | [STAR Interview Method (The Balance)](https://www.thebalancemoney.com/what-is-the-star-interview-response-technique-2061029) |
| Mock Interviews | [Pramp](https://www.pramp.com/) — Free mock interviews with peers |

---

# Course 2: Laravel + Next.js + MySQL

## Phase 0: Project Planning & Setup

| Lesson | Resource |
|---|---|
| BMAD → GSD Workflow | [BMAD Method (GitHub)](https://github.com/anthropics/courses) — Spec-driven agentic development |
| MVP Scope | [MVP Guide (ProductPlan)](https://www.productplan.com/glossary/minimum-viable-product/) |
| Database Schema Planning | [DrawDB](https://drawdb.vercel.app/) — Visual ERD tool |
| Project Structure Setup | [Laravel Docs](https://laravel.com/docs/11.x/installation) — Official installation guide |

## Phase 1: Laravel Backend Foundations

| Lesson | Resource |
|---|---|
| Migrations & Eloquent | [Laravel Migrations](https://laravel.com/docs/11.x/migrations) — Official docs |
| API Resources & Controllers | [Laravel API Resources](https://laravel.com/docs/11.x/api-resources) — Response shaping |
| Authentication with Sanctum | [Laravel Sanctum](https://laravel.com/docs/11.x/sanctum) — Token/SPA auth |
| Authorization | [Laravel Policies](https://laravel.com/docs/11.x/authorization) — Gates & policies |
| File Uploads | [Laravel File Storage](https://laravel.com/docs/11.x/filesystem) — Disk & cloud |
| Queues & Background Jobs | [Laravel Queues](https://laravel.com/docs/11.x/queues) — Job processing |

## Phase 2: Next.js Frontend Foundations

| Lesson | Resource |
|---|---|
| App Router | [Next.js Docs](https://nextjs.org/docs) — Official App Router guide |
| Data Fetching | [Next.js Data Fetching](https://nextjs.org/docs/app/building-your-application/data-fetching) |
| Forms & Mutations | [Next.js Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations) |
| Authentication Flow | [NextAuth.js](https://next-auth.js.org/) — Auth library for Next.js |
| State Management | [Zustand](https://zustand-demo.pmnd.rs/) — Lightweight state management |

## Phase 3: MySQL Deep Dive

| Lesson | Resource |
|---|---|
| Indexing with Laravel | [MySQL Indexing](https://dev.mysql.com/doc/refman/8.0/en/optimization-indexes.html) — Official MySQL docs |
| Query Optimization | [Laravel Debugbar](https://github.com/barryvdh/laravel-debugbar) — Query analysis |
| Migrations & Seeders | [Laravel Factories](https://laravel.com/docs/11.x/testing#defining-model-factories) — Test data |
| Data Integrity | [Laravel Foreign Keys](https://laravel.com/docs/11.x/migrations#foreign-key-constraints) |

## Phase 4: Connecting the Full Stack

| Lesson | Resource |
|---|---|
| CORS Configuration | [Laravel CORS](https://laravel.com/docs/11.x/routing#cors-cross-origin-resource-sharing) |
| Environment Configuration | [Laravel .env](https://laravel.com/docs/11.x/configuration) — Environment setup |
| Error Handling | [Laravel Exceptions](https://laravel.com/docs/11.x/errors) — Error handling |
| API Contract Docs | [OpenAPI/Swagger](https://swagger.io/specification/) — API documentation standard |

## Phase 5: Deployment & Production

| Lesson | Resource |
|---|---|
| Hosting Options | [Laravel Forge](https://forge.laravel.com/) — Server management |
| | [Vercel](https://vercel.com/) — Next.js hosting |
| Secrets Management | [Laravel Vault](https://laravel.com/docs/11.x/vault) — Encrypted secrets |
| Basic CI/CD | [GitHub Actions](https://docs.github.com/en/actions) — CI/CD pipelines |
| Monitoring | [Sentry](https://sentry.io/) — Error tracking for Laravel & Next.js |

## Phase 6: Business/Product Considerations

| Lesson | Resource |
|---|---|
| Payment Integration | [Stripe Philippines](https://stripe.com/ph) — Payment processing |
| | [PayMongo](https://www.paymongo.com/) — PH payment gateway |
| Analytics | [Plausible](https://plausible.io/) — Privacy-friendly analytics |
| | [PostHog](https://posthog.com/) — Product analytics |
| Feedback Loop | [Canny](https://canny.io/) — User feedback widget |
