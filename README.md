# 💳 Payments Management System (Vue 3 + TypeScript)

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
* **@vue/test-utils** – Vue component testing utilities
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



## ⚙️ Setup & Run Instructions

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

## Screenshots




```md
![User List](screenshots/user-list.png)
![Payment List](screenshots/payment-list.png)
![Payment Detail](screenshots/payment-detail.png)
```

