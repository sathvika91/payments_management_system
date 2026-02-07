# Payments Management System 

---

##  Problem Statement

A fintech startup requires a **secure internal system** to manage and monitor all payment flows with proper **traceability, status tracking, and reporting**. The system should allow authorized users to manage user records, create and track payments, view detailed payment information, and clearly visualize payment statuses and categories.


---

##  Project Objective

* Manage users and payment records efficiently
* Track payment status (Success / Pending / Failed)
* Provide detailed payment traceability
* Ensure reliability using unit testing

---

##  Technologies & Tools Used

* **Vue 3** – Frontend framework (Composition API)
* **TypeScript** – Type safety and better code maintainability
* **Vite** – Fast development build tool
* **Vue Router** – Client‑side routing
* **HTML / CSS** – UI structure and styling

---

##  Project Folder Structure

```
payments-management/
│
├── src/
│   ├── components/
│   │   ├── users/                 # User‑related components
│   │   │   ├── UserList.vue        # Display all users
│   │   │   └── UserForm.vue        # Create new user
│   │   │
│   │   └── payments/              # Payment‑related components
│   │       ├── PaymentList.vue    # List & filter payments
│   │       ├── PaymentForm.vue    # Create / update payment
│   │       └── PaymentDetail.vue  # View payment details
│   │
│   ├── router/
│   │   └── index.ts               # Application routes
│   │
│   ├── types/
│   │   └── models.ts              # TypeScript interfaces
│   │
│   ├── App.vue                    # Root component
│   └── main.ts                    # App entry point
│
├── tests/                         # Unit test cases
│   ├── PaymentForm.spec.ts
│   ├── PaymentList.spec.ts
│   └── PaymentDetail.spec.ts
│
├── package.json                   # Project dependencies
├── vite.config.ts                 # Vite configuration
└── README.md                      # Project documentation
```

---



## Setup & Run Instructions

### 1️⃣ Prerequisites

Ensure the following are installed:

* **Node.js (v16 or above)**
* **npm**

Verify installation:

```bash
node -v
npm -v
```

---

### 2️⃣ Install Dependencies

Navigate to the project folder and run:

```bash
npm install
```

---

### 3️⃣ Run the Application

Start the development server:

```bash
npm run dev
```

Open the browser and go to:

```
http://localhost:5173
```
---

---
<img width="1502" height="798" alt="Screenshot 2026-02-07 at 8 34 42 PM" src="https://github.com/user-attachments/assets/9b14a392-fd94-4710-9d8b-4c5e8759b2e1" />
<img width="1342" height="733" alt="Screenshot 2026-02-07 at 8 33 45 PM" src="https://github.com/user-attachments/assets/b401ee51-b32f-4b59-a032-62a001d19516" />
<img width="1503" height="833" alt="Screenshot 2026-02-07 at 8 34 15 PM" src="https://github.com/user-attachments/assets/cf4ed78f-6bbe-490d-afd0-8d3d18e89426" />
<img width="1503" height="857" alt="Screenshot 2026-02-07 at 8 36 15 PM" src="https://github.com/user-attachments/assets/f0fc2541-52fb-4837-bdc7-5048262f1677" />
<img width="1502" height="835" alt="Screenshot 2026-02-07 at 8 36 02 PM" src="https://github.com/user-attachments/assets/9995bdd9-1a97-4541-8da7-d3037936c417" />








