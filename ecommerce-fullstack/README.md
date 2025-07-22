# E‑Commerce Fullstack

> Monorepo containing both the **backend API** and the **React frontend** for a full‑stack e‑commerce application.

## Table of Contents

* [Features](#features)
* [Prerequisites](#prerequisites)
* [Environment Variables](#environment-variables)
* [Installation](#installation)
* [Running the Project](#running-the-project)

  * [Option 1: concurrently](#option-1-concurrently)
  * [Option 2: separate terminals](#option-2-separate-terminals)
* [Available Scripts](#available-scripts)
* [Testing](#testing)
* [Deployment](#deployment)

---

## Features

### Backend (Node.js + Express + MongoDB)

* **User Authentication** (JWT + HTTP‑Only cookies)
* **Product Management** (CRUD, search, filter, pagination)
* **Shopping Cart** per user
* **Order Processing** (create, history, admin management)
* **Stripe Payment Integration** & email notifications via Nodemailer

### Frontend (React + Tailwind CSS)

* **User Login / Register**
* **Product Listing** & detail views
* **Shopping Cart** management
* **Checkout Flow**
* **Responsive UI**

---

## Prerequisites

* **Node.js** v14+ or higher
* **npm** or **Yarn**
* **MongoDB** instance (local or Atlas)
* **Stripe** account for payments
* SMTP credentials for email notifications

---

## Environment Variables

### Backend (`/backend/.env`)

```ini
MONGODB_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:3000
NODE_ENV=development
PORT=5000

# Stripe
STRIPE_SECRET_KEY=your_stripe_secret_key

# Email (SMTP)
EMAIL_HOST=your_smtp_host
EMAIL_PORT=587          # 465 for secure
EMAIL_SECURE=false      # true if port 465
EMAIL_USER=your_email_user
EMAIL_PASS=your_email_pass
EMAIL_FROM_NAME="E‑Commerce App"
EMAIL_FROM_ADDRESS=no-reply@yourdomain.com
```

### Frontend (`/frontend/.env`)

```ini
REACT_APP_API_URL=http://localhost:5000/api/v1
```

---

## Installation

From the project root, install both backend and frontend dependencies:

```bash
# Install backend dependencies\ npm install --prefix backend

# Install frontend dependencies\ npm install --prefix frontend
```

---

## Running the Project

You can run both parts concurrently or in separate terminals.

### Option 1: concurrently

```bash
npx concurrently \
  "npm run dev --prefix backend" \
  "npm start   --prefix frontend"
```

* Backend: [http://localhost:5000](http://localhost:5000)
* Frontend: [http://localhost:3000](http://localhost:3000)

### Option 2: separate terminals

<details>
<summary><strong>Terminal 1 (Backend)</strong></summary>

```bash
cd backend
npm run dev
```

</details>

<details>
<summary><strong>Terminal 2 (Frontend)</strong></summary>

```bash
cd frontend
npm start
```

</details>

---

## Available Scripts

### Backend (`/backend`)

* `npm run dev` – start server with Nodemon
* `npm start` – start server in production mode

### Frontend (`/frontend`)

* `npm start` – start React development server
* `npm run build` – build production assets
* `npm test` – run React tests

---

## Testing

* **Backend**: add Jest & Supertest tests in `/backend/tests/` and run with:

  ```bash
  npm test --prefix backend
  ```
* **Frontend**: add React Testing Library tests in `/frontend/src/` and run with:

  ```bash
  npm test --prefix frontend
  ```

---

## Deployment






