# JWT Auth REST API with Express & MongoDB

A simple RESTful API with user authentication using **Node.js**, **Express**, **MongoDB**, **Mongoose**, **JWT**, and a **basic HTML login frontend**.

---

## 📁 Folder Structure

```
project-root/
├── models/
│   └── user.model.js         # User schema and password hashing
├── routes/
│   ├── auth.routes.js        # Register and login endpoints
│   └── user.routes.js        # Protected user route 
├── middleware/
│   └── auth.middleware.js    # JWT verification middleware
├── public/
│   └── login.html            # HTML login form with JWT usage
|   └── register.html         # HTML registration form
├── .env                      # Environment variables (Mongo URI, JWT secret)
├── index.js                  # Main entry point
├── package.json              # Node dependencies and scripts
└── README.md                 # Project overview and instructions
```

---

## 🚀 Setup Instructions

### 1. Clone the Repository

```bash
git clone <repo-url>
cd project-root
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file:

```
MONGO_URI=mongodb://localhost:27017/rest-api
JWT_SECRET=supersecretkey
PORT=3000
```
> 💡 To generate a JWT secret:
>
> ```bash
> node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
> ```

---

## 🍃 How to Create a MongoDB Database

### Using MongoDB Atlas 

1. Go to [https://cloud.mongodb.com](https://cloud.mongodb.com)
2. Sign in and create a new **project**
3. Create a **free cluster** (choose M0 tier)
4. Create a **database user** (with username & password)
5. In **Network Access**, allow access from **Anywhere (0.0.0.0/0)**
6. Click **Connect → Connect Your Application**
7. Copy the connection URI (like below):

```
mongodb+srv://<username>:<password>@clustername.mongodb.net/<dbname>?retryWrites=true&w=majority
```

8. Use this in your `.env` file as `MONGO_URI`

---

### 4. Start the Server

```bash
node index.js
```

Server will run at: **[http://localhost:3000](http://localhost:3000)**

---

## 🔐 API Endpoints

### Public Routes

* `POST /api/auth/register` → Register user
* `POST /api/auth/login` → Login and receive JWT token

### Protected Routes (Require Token)

* `GET /api/users/me` → Get current user's profile (send `Authorization: Bearer <token>` header)

---

---

## 🧪 HTML Frontend

### 🔹 User Registration
Go to: [http://localhost:3000/register.html](http://localhost:3000/register.html)
- Fill in name, email, password, age
- Click **Register** to create a new account

### 🔹 User Login
Go to: [http://localhost:3000/login.html](http://localhost:3000/login.html)
- Enter your email and password
- On success, the token is stored and used to fetch `/api/users/me`

---

## 🛠 Technologies Used

* **Node.js**
* **Express.js**
* **MongoDB + Mongoose**
* **JWT (jsonwebtoken)**
* **Bcrypt.js** for password hashing
* **HTML/CSS** for login interface

---

## ✅ Features

* Secure password storage
* JWT token-based authentication
* Protected route with token validation
* Clean folder structure
* Easy to extend with more resources

---

