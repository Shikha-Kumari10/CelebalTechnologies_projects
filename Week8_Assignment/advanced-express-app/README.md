# 📦 Advanced Express.js App

A simple full-stack Node.js application demonstrating:

- ✅ File Upload using `multer`
- ✅ Weather API Integration using `OpenWeatherMap`
- ✅ Centralized Error Handling Middleware
- ✅ HTML Frontend Interface

---

## 📁 Folder Structure

```

advanced-express-app/
├── controllers/
│   └── uploadController.js
├── middlewares/
│   └── errorHandler.js
├── routes/
│   ├── uploadRoutes.js
│   └── weatherRoutes.js
├── utils/
│   └── fetchWeather.js
├── uploads/
│   └── (uploaded files saved here)
├── public/
│   ├── index.html
│   └── style.css
├── .env
├── index.js
├── package.json

````

---

## 🛠 Installation

1. Clone the repository or copy the files into your workspace.
2. Install dependencies:

```bash
npm install
````

---

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```
PORT=3000
OPENWEATHER_API_KEY=your_openweathermap_api_key
```

> 🔑 You can get your free API key at [OpenWeatherMap](https://openweathermap.org/api)

---

## 🚀 Running the App

```bash
node index.js
```

Then open your browser and visit: [http://localhost:3000](http://localhost:3000)

---

## 💻 Features

### 📤 1. File Upload

* Select and upload a file using the UI form
* File is saved inside the `/uploads` directory
* **API Endpoint:** `POST /api/upload`

### 🌦️ 2. Weather Lookup

* Enter a city name to retrieve weather data using OpenWeatherMap API
* **API Endpoint:** `GET /api/weather/:city`

### ❗ 3. Error Handling

* All thrown errors are handled centrally by the `errorHandler` middleware
* Returns consistent error responses with proper status codes

---

## 🌐 HTML Frontend

Accessible at:

* [http://localhost:3000/index.html](http://localhost:3000/index.html)

Features:

* File upload form
* Weather lookup form
* Display responses as JSON

---

## 📦 Technologies Used

* Node.js
* Express.js
* Multer (for file uploads)
* Axios (for API calls)
* dotenv
* HTML5 & CSS3
