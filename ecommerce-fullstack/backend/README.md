# E‑Commerce Backend

This is the Node.js/Express.js + MongoDB API for the full‑stack e‑commerce application.

## Features

- **User Authentication**  
  - Register, Login, Logout  
  - Password hashing (bcrypt)  
  - JWT stored in HTTP‑only cookies  

- **Product Management**  
  - CRUD endpoints for products  
  - Search, filter, pagination  

- **Shopping Cart**  
  - Add, view, remove items  
  - One cart per user  

- **Order Processing**  
  - Create orders with shipping & payment info  
  - Order history  
  - Admin can view all orders and mark as delivered  

## Project Structure

```
backend/
├── config/
│ └── db.js # MongoDB connection
├── src/
│ ├── controllers/
│ ├── middlewares/
│ │ ├── authMiddleware.js
│ │ └── errorHandler.js
│ ├── models/
│ ├── routes/
│ ├── services/
│ ├── utils/
│ ├── app.js
│ └── server.js
├── .env # Environment variables
├── package.json
└── README.md
```