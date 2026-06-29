# 🚀 CryptoPulse

A modern cryptocurrency price tracker built using **React**, **Express.js**, and the **CoinMarketCap REST API**. CryptoPulse allows users to search for cryptocurrencies by symbol and instantly view real-time market information such as current price, market capitalization, and 24-hour price changes.

---

## 📌 Features

* 🔍 Search any cryptocurrency using its symbol (BTC, ETH, DOGE, etc.)
* 📋 Dropdown containing popular cryptocurrencies
* 💰 Displays live cryptocurrency price in USD
* 📈 Shows market capitalization
* 📉 Displays 24-hour percentage price change
* 🔄 Automatically refreshes data every 30 seconds
* 🔐 Secure API key management using environment variables
* 📱 Clean and responsive user interface built with Bootstrap

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Bootstrap 5
* JavaScript (ES6)
* CSS

### Backend

* Node.js
* Express.js
* Axios
* CORS
* Dotenv

### API

* CoinMarketCap REST API

---

## 📂 Project Structure

```text
CryptoPulse/
│
├── backend/
│   ├── server.js
│   ├── .env
│   ├── package.json
│   └── ...
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── App.css
│   ├── package.json
│   └── ...
│
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/cryptopulse.git
```

```bash
cd cryptopulse
```

---

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

---

### 3. Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

---

## 🔑 Configure Environment Variables

Create a `.env` file inside the **backend** folder.

```env
CMC_API_KEY=YOUR_COINMARKETCAP_API_KEY
```

You can obtain a free API key by creating an account on the CoinMarketCap Developer Portal.

---

## ▶️ Running the Project

### Start Backend

```bash
cd backend
npm start
```

Backend runs at:

```
http://localhost:5000
```

---

### Start Frontend

```bash
cd frontend
npm run dev
```

Open:

```
http://localhost:5173
```

---

## 📷 Application Preview

The application provides:

* Cryptocurrency search by symbol
* Popular coin dropdown
* Live market data
* Auto-refresh every 30 seconds
* Clean Bootstrap-based interface

> You can add screenshots inside a `screenshots/` folder and display them here later

---

## 🔗 API Endpoint

```
GET /api/crypto/:symbol
```

Example:

```
GET /api/crypto/BTC
```

Returns live cryptocurrency data fetched from the CoinMarketCap API.

---

## 📈 Future Improvements

* Add cryptocurrency charts
* Search suggestions with autocomplete
* Historical price trends
* Dark/Light theme toggle
* Favorites/Watchlist
* Multiple currency support (USD, EUR, INR)
* Loading animations
* Better error handling

---

## 👨‍💻 Author

**Santosh S**

Computer Science Engineering Student
