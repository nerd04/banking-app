# 💰 Banking App (MERN Stack)

A full-stack banking application built with the MERN stack (MongoDB, Express, React, Node.js). This project allows users to manage accounts, view transactions, and simulate basic banking operations.

---

## 📅 Day 1 – Project Setup & Backend Foundation

### ✅ Completed Tasks

- Created project structure with `client/` (React) and `server/` (Express)
- Initialized `npm` and installed dependencies for both client and server
- Configured **Tailwind CSS** in React
- Connected to **MongoDB Atlas**
- Created a basic Express server with:
  - `/api/health` endpoint for connectivity test
  - Placeholder routes: `/api/users`, `/api/transactions`
- Enabled CORS and JSON parsing
- Initialized Git repository and pushed to GitHub

---

## 📂 Project Structure
banking-app/
├── client/ # React frontend
│ ├── src/
│ ├── tailwind.config.js
│ └── ...
├── server/ # Node.js + Express backend
│ ├── routes/
│ │ ├── users.js
│ │ └── transactions.js
│ ├── .env
│ ├── index.js
│ └── ...
└── README.md

---

## 🚀 Getting Started

### 🔧 Prerequisites

- Node.js v18+
- MongoDB Atlas account (or local MongoDB)
- Git

---

### 📦 Installation

```bash
git clone https://github.com/your-username/banking-app.git

cd banking-app
cd server
npm install
# Add your .env file
npm start

### .env file
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

### frontend
cd client
npm install
npm run dev


