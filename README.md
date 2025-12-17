

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
##Screenshots
<img width="1920" height="1079" alt="Screenshot_2025-12-17_00_29_45" src="https://github.com/user-attachments/assets/8a3700ec-5498-473b-9fed-b8bd360735cc" />

<img width="1920" height="1079" alt="Screenshot_2025-12-17_00_33_51" src="https://github.com/user-attachments/assets/da89464f-d10d-4995-ba22-5083a8467f01" />

<img width="1920" height="1079" alt="Screenshot_2025-12-17_00_41_48" src="https://github.com/user-attachments/assets/ab510697-caa3-47fa-b8da-2e07be494e61" />

<img width="1920" height="1079" alt="Screenshot_2025-12-17_00_47_31" src="https://github.com/user-attachments/assets/3f5896b5-83c0-408f-b615-0d2abd3c20af" />

<img width="1920" height="1079" alt="Screenshot_2025-12-17_00_48_40" src="https://github.com/user-attachments/assets/af85b1a2-3ff6-43cb-bfaf-48e5e53ff245" />

<img width="1920" height="1079" alt="Screenshot_2025-12-17_00_48_31" src="https://github.com/user-attachments/assets/63647dfc-0038-4c3e-b159-c17600c0fdfd" />

<img width="1920" height="1079" alt="Screenshot_2025-12-17_00_59_12" src="https://github.com/user-attachments/assets/cd5e9c21-bea2-497f-b913-3532bcdb0bd5" />

<img width="1920" height="1079" alt="Screenshot_2025-12-17_01_01_51" src="https://github.com/user-attachments/assets/3059cedf-5c1a-463b-89b4-05ac9e497f6f" />

<img width="1920" height="1079" alt="Screenshot_2025-12-17_01_08_38" src="https://github.com/user-attachments/assets/c318791a-460d-4098-9c4a-90c4ddb7b1b4" />

<img width="1920" height="1079" alt="Screenshot_2025-12-17_01_09_46" src="https://github.com/user-attachments/assets/bbbe8d19-3844-4576-ac50-d8775dc3bd19" />

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
API_KEY=vintage12345@
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

> Header: `x-api-key: vintage12345@` must be included for requests


---

## Security Features Implemented

* **Rate-limiting**: limits requests per IP to prevent brute-force attacks
* **Helmet security headers**: CSP, HSTS, X-Content-Type-Options, etc.
* **API Key Authentication**: only requests with correct key can access `/api`
* **CORS**: restricts unauthorized domains from accessing API

---

