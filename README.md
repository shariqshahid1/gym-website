# PulseForge Gym

A premium gym website built with Next.js App Router, Tailwind CSS, Framer Motion, MongoDB, Mongoose, and JWT authentication.

## Features

- Responsive dark premium UI with gradients and motion
- Home, About, Services, Pricing, Trainers, Contact, Auth, and Dashboard pages
- JWT-based signup and login
- MongoDB persistence for users, contact messages, and bookings
- Membership subscription flow
- Booking form for training sessions
- SEO metadata and loading states

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Copy environment variables:

```powershell
Copy-Item .env.example .env.local
```

3. Update `MONGODB_URI` and `JWT_SECRET` in `.env.local`.

4. Start the development server:

```bash
npm run dev
```

5. Open `http://localhost:3000`.

## API Routes

- `POST /api/auth/signup`
- `POST /api/auth/login`
- `GET /api/auth/me`
- `POST /api/contact`
- `POST /api/memberships/subscribe`
- `POST /api/bookings`

## Production

```bash
npm run build
npm start
```
