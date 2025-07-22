# E‑Commerce Frontend

This is the React.js single‑page application for the full‑stack e‑commerce project.

## Features

- User authentication (login/register)
- Product listing, search, filter
- Product detail view
- Shopping cart management
- Checkout flow

## Project Structure

```
frontend/
├── public/
│   ├── index.html      # HTML template
│   └── favicon.ico     # App icon
├── src/
│   ├── api/            # Axios API client
│   ├── components/     # Reusable UI components
│   ├── contexts/       # React context for auth state
│   ├── hooks/          # Custom React hooks
│   ├── pages/          # Route components (Home, Cart, etc.)
│   ├── styles/         # Tailwind CSS setup
│   ├── utils/          # Utility functions (currency formatting)
│   ├── App.jsx         # App routes and layout
│   └── index.js        # Entry point
├── .env                # Environment variables
├── package.json
└── README.md
```
## Environment Variables

Create a `.env` file in the `frontend/` directory with:

```dotenv
REACT_APP_API_URL=http://localhost:5000/api/v1
```

## Installation & Running

```
cd frontend
npm install        # or yarn install
npm start          # start development server at http://localhost:3000
```

## Building for Production

```
npm run build      # outputs static files to build/ folder
```