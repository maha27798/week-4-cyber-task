

# Secure API Project

## Overview
This is a **secured API** built with **Node.js** and **Express**, designed with proper security measures:

- Rate-limiting to prevent brute-force attacks
- API Key authentication for protected routes
- JWT authentication (optional for future extensions)
- Security headers implemented via Helmet:
  - Content Security Policy (CSP)
  - Strict-Transport-Security (HSTS)
- CORS configuration to control access
- Logging with Morgan (optional)

---

## Project Structure

```

secure-api/
├── server.js         # Main server file
├── package.json      # Node.js dependencies
├── README.md         # This file
├── .gitignore        # Ignored files (.env, node_modules)
├── screenshots/      # Optional folder for API testing screenshots
├── node_modules/     # Installed dependencies (ignored in GitHub)
└── .env              # Environment variables (ignored in GitHub)

````

---

## Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/maha27798/week-4-cyber-task.git
cd week-4-cyber-task
````

2. **Install dependencies**

```bash
npm install
```

3. **Create `.env` file** (never push this to GitHub)

```bash
nano .env
```

Add:

```
PORT=5000
API_KEY=MY_SECRET_KEY
```

4. **Run the server**

```bash
node server.js
```

Optional: use `nodemon` for auto-reload

```bash
npm install -g nodemon
nodemon sever.js
```

---

## API Endpoints

| Method | Endpoint  | Description           | Auth Type |
| ------ | --------- | --------------------- | --------- |
| GET    | /api/data | Secured API test data | API Key   |

> Header: `x-api-key: MY_SECRET_KEY` must be included for requests


---

## Security Features Implemented

* **Rate-limiting**: limits requests per IP to prevent brute-force attacks
* **Helmet security headers**: CSP, HSTS, X-Content-Type-Options, etc.
* **API Key Authentication**: only requests with correct key can access `/api`
* **CORS**: restricts unauthorized domains from accessing API

---

