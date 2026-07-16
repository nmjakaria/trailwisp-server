# Trailwisp — Backend

> *"Real trips. Real stories. Book what's actually true."*

This repository contains the **backend API** for [Trailwisp](#), a travel discovery, honest story-sharing, and booking platform. Built with Express, TypeScript, and MongoDB, it powers destination listings, bookings, stories, comments, likes, wishlists, news, and admin management for the [Trailwisp frontend](#).

**🔗 Frontend Repository:** *([Click here)](https://github.com/nmjakaria/trailwisp-travel)*

---

## ✨ Overview

The backend exposes a REST API consumed by the Next.js frontend. It does not handle authentication directly — instead, it **verifies JWTs issued by BetterAuth** (running on the frontend) against BetterAuth's JWKS endpoint, and authorizes requests based on the `role` and `isBlocked` claims embedded in the token.

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Runtime | Node.js 22+ |
| Framework | [Express 5](https://expressjs.com/) |
| Language | TypeScript |
| Database | [MongoDB](https://www.mongodb.com/) + [Mongoose](https://mongoosejs.com/) |
| Auth (verification) | [jose](https://github.com/panva/jose) (JWKS-based JWT verification) |
| Dev tooling | [tsx](https://github.com/privatenumber/tsx) + [nodemon](https://nodemon.io/) |
| Deployment | [Vercel](https://vercel.com/) (zero-config Express) |

---

## 📁 Project Structure

```
src/
├── config/
│   └── db.ts                     # MongoDB connection (serverless-safe, connection reuse)
├── middlewares/
│   ├── auth.middleware.ts         # verifyJWT — JWKS-based token verification
│   ├── role.middleware.ts         # requireAdmin, requireNotBlocked
│   ├── notFound.ts
│   └── errorHandler.ts
├── models/
│   ├── user.model.ts               # Read-only reference to BetterAuth's 'user' collection
│   ├── place.model.ts
│   ├── booking.model.ts
│   ├── story.model.ts
│   ├── comment.model.ts
│   ├── like.model.ts
│   ├── wishlist.model.ts
│   └── news.model.ts
├── controllers/
│   ├── place.controller.ts
│   ├── story.controller.ts
│   ├── booking.controller.ts
│   ├── wishlist.controller.ts
│   ├── like.controller.ts
│   ├── comment.controller.ts
│   ├── news.controller.ts
│   ├── user.controller.ts
│   └── stats.controller.ts
├── routes/
│   ├── place.routes.ts  ·  story.routes.ts  ·  booking.routes.ts
│   ├── wishlist.routes.ts  ·  like.routes.ts  ·  comment.routes.ts
│   ├── news.routes.ts  ·  user.routes.ts  ·  stats.routes.ts
│   └── index.ts                   # Mounts all routers under /api
├── utils/
│   └── asyncHandler.ts             # Wraps async route handlers for error propagation
└── index.ts                        # App entry point (Express app, exported for Vercel)
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 22+
- A MongoDB Atlas cluster (shared with the frontend's BetterAuth `user`/`session` collections)
- The [Trailwisp frontend](#) running (or reachable), since JWT verification depends on its JWKS endpoint

### Installation

```bash
git clone https://github.com/nmjakaria/trailwisp-server
cd trailwisp-server
npm install
```

### Environment Variables

Create a `.env` file in the project root:

```env
PORT=5000
MONGO_DB_URI=your_mongodb_connection_string
DB_NAME=trailwisp_db
BETTER_AUTH_URL=http://localhost:3000
CORS_ORIGIN=http://localhost:3000
```

| Variable | Description |
|---|---|
| `PORT` | Port the server listens on locally |
| `MONGO_DB_URI` | MongoDB connection string (shared with the frontend's auth database) |
| `DB_NAME` | Database name Mongoose connects to |
| `BETTER_AUTH_URL` | URL of the frontend app — used to fetch BetterAuth's JWKS for JWT verification |
| `CORS_ORIGIN` | Allowed origin for cross-origin requests from the frontend |

### Run the development server

```bash
npm run dev
```

Server runs at `http://localhost:5000`.

### Build & run for production

```bash
npm run build
npm start
```

---

## 🔐 Authentication & Authorization

This API does **not** issue tokens — it only verifies them.

1. The frontend (BetterAuth) issues a signed JWT containing `email`, `role`, and `isBlocked` claims.
2. Every protected route runs the `verifyJWT` middleware, which fetches BetterAuth's public JWKS (`{BETTER_AUTH_URL}/api/auth/jwks`) and verifies the token's signature.
3. `requireAdmin` and `requireNotBlocked` middlewares gate specific routes based on the verified claims.
4. Requests must include: `Authorization: Bearer <token>`

---

## 📡 API Endpoints

```
Places
GET    /api/places                       - list (search, filter, sort, pagination)
GET    /api/places/:id                   - single place
POST   /api/places                       - [admin] create
PATCH  /api/places/:id                   - [admin] update
DELETE /api/places/:id                   - [admin] delete
PATCH  /api/places/:id/feature           - [admin] toggle featured

Stories
GET    /api/stories                      - list
GET    /api/stories/mine                 - [auth] current user's stories
POST   /api/stories                      - [auth, not blocked] create
GET    /api/stories/:id                  - single story
PATCH  /api/stories/:id                  - [auth, owner] update
DELETE /api/stories/:id                  - [auth, owner or admin] delete
PATCH  /api/stories/:id/feature          - [admin] toggle featured

Bookings
POST   /api/bookings                     - [auth, not blocked] create
GET    /api/bookings/mine                - [auth] current user's bookings
DELETE /api/bookings/:id                 - [auth, owner] cancel (pending only)
GET    /api/admin/bookings               - [admin] list all (filterable by status)
PUT    /api/admin/bookings/:id/status    - [admin] update status
PUT    /api/admin/bookings/:id/accept    - [admin] confirm booking
DELETE /api/admin/bookings/:id           - [admin] delete record

Wishlist
POST   /api/wishlist                     - [auth] add
GET    /api/wishlist/mine                - [auth] current user's wishlist
DELETE /api/wishlist/:id                 - [auth] remove

Likes
POST   /api/likes                        - [auth] toggle like
GET    /api/likes/:targetType/:targetId  - [auth] like status

Comments
POST   /api/comments                     - [auth, not blocked] create
GET    /api/comments/best                - featured "best" comments
GET    /api/comments/all                 - [admin] all comments (paginated)
GET    /api/comments/:targetId           - comments for a place/story
PATCH  /api/comments/:id/feature         - [admin] toggle "best comment"
DELETE /api/comments/:id                 - [auth, owner or admin] delete

News
GET    /api/news/latest                  - latest headlines (homepage ticker)
GET    /api/news/all                     - [admin] paginated list
POST   /api/news                         - [admin] create
DELETE /api/news/:id                     - [admin] delete

Users
GET    /api/admin/users                  - [admin] list (search, pagination)
PATCH  /api/admin/users/:id/role         - [admin] change role
DELETE /api/admin/users/:id              - [admin] delete account

Stats
GET    /api/stats/public                 - public site-wide counts
GET    /api/stats/admin                  - [admin] aggregated dashboard stats
```

---

## 🗄️ Database Schema

| Collection | Key fields |
|---|---|
| `user` *(read-only, owned by BetterAuth)* | `name`, `email`, `role`, `isBlocked` |
| `places` | `title`, `category`, `price`, `location`, `availableDates[]`, `rating`, `likesCount`, `bookingsCount`, `isFeatured`, `createdBy` |
| `bookings` | `userId`, `placeId`, `seats`, `departureDate`, `departureTime`, `contactInfo`, `status`, `totalPrice`, `adminConfirmedTime` |
| `stories` | `userId`, `title`, `content`, `destinationTag`, `likesCount`, `isFeatured` |
| `comments` | `userId`, `targetId`, `targetType`, `text`, `isBestComment` |
| `likes` | `userId`, `targetId`, `targetType` *(unique per user+target)* |
| `wishlist` | `userId`, `placeId` *(unique per user+place)* |
| `news` | `title`, `content`, `badgeText`, `linkUrl`, `createdBy` |

`booking.status` is one of `pending` · `confirmed` · `cancelled`. `place.category` is a fixed enum (`Beach`, `Mountain`, `City`, `Adventure`, `Nature`, `Lake`, `Forest`, `Hill`, `Island`, `Wetland`, `Cultural`, `International`).

---

## ☁️ Deployment (Vercel)

This API deploys to Vercel with **zero configuration** — no `vercel.json` required:

- `src/index.ts` exports the Express `app` as the default export
- MongoDB connections are cached across invocations to avoid exhausting Atlas connection limits in a serverless environment
- **MongoDB Atlas Network Access** must allow `0.0.0.0/0`, since Vercel functions run from dynamic IPs
- Set all `.env` variables in the Vercel project's Environment Variables settings, with `BETTER_AUTH_URL` and `CORS_ORIGIN` pointed at the **production** frontend URL

---

## 🧩 Challenges & Learnings

- **JWT claims not propagating** — BetterAuth's JWT plugin only includes core identity claims by default. Custom claims (`role`, `isBlocked`) required a `definePayload` callback that fetches fresh user data at token-issue time, since the session's cached `user` object wasn't always reliable.
- **ESM-only dependencies in a CommonJS project** — `jose` ships ESM-only, which broke under `"type": "commonjs"`. Initially worked around with a CJS-compatible fork; ultimately resolved properly by migrating the whole project to `"type": "module"`.
- **`verbatimModuleSyntax` vs. `tsc` in strict builds** — the combination of `"type": "commonjs"`, `module: "nodenext"`, and `verbatimModuleSyntax: true` compiled fine under `tsx` (transpile-only) but failed hard under real `tsc`, which is what Vercel's build step uses. Declaring the project as ESM resolved the conflict.
- **TypeScript 7 (tsgo) compatibility gaps** — being a very recent release, some Node-based tooling (`ts-node`) that depends on the legacy `ts.sys` compiler API hadn't caught up yet; switching to `tsx` for local dev sidestepped this entirely.
- **Route ordering** — static routes (`/mine`, `/best`, `/latest`, `/all`) must be declared before dynamic `/:id` routes, otherwise Express matches the dynamic route first and misinterprets the static segment as an ID.
- **Full-document validation on partial updates** — calling `.save()` after an unrelated field update (e.g. incrementing `bookingsCount`) re-validates the *entire* document, which surfaced legacy/out-of-enum data unexpectedly. Switched to atomic `$inc` updates via `findByIdAndUpdate` to avoid this.
- **Collection naming collisions with BetterAuth** — Mongoose's default pluralization (`users`) created a duplicate, empty collection alongside BetterAuth's actual `user` collection. Fixed with an explicit `{ collection: 'user' }` schema option.

---

## 📄 License

This project is developed as part of a full-stack learning assignment.