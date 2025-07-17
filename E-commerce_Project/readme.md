            ┌─────────────────────────────┐
            │         Client (UI)         │
            │   (React Frontend App)      │
            └─────────────┬───────────────┘
                        │ HTTPS (REST API)
                        ▼
            ┌─────────────────────────────┐
            │        Backend API          │
            │   (Node.js + Express.js)    │
            ├─────────────────────────────┤
            │  • Auth Controller          │
            │  • Product Controller       │
            │  • Cart Controller          │
            │  • Order Controller         │
            │  • Auth Middleware (JWT)    │
            └─────────────┬───────────────┘
                        │ Mongoose (ODM)
                        ▼
            ┌─────────────────────────────┐
            │        MongoDB Atlas        │
            │      (Database Cloud)       │
            ├─────────────────────────────┤
            │  • users collection         │
            │  • products collection      │
            │  • orders collection        │
            └─────────────────────────────┘
