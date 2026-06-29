# 🚀 CryptoPulse

A modern cryptocurrency price tracker built with **React**, **Express.js**, and the **CoinMarketCap REST API**. CryptoPulse enables users to search for cryptocurrencies by symbol and view real-time market data including price, market capitalization, and 24-hour price changes.

---

## 📖 About the Project

CryptoPulse is a full-stack web application that demonstrates REST API integration by fetching live cryptocurrency data from the CoinMarketCap API. The application features a clean and responsive interface, popular cryptocurrency selection, automatic data refresh, and secure API key management using environment variables.

---

## ✨ Features

* 🔍 Search cryptocurrencies by symbol (BTC, ETH, SOL, DOGE, etc.)
* 📋 Popular cryptocurrency dropdown
* 💰 Live cryptocurrency price in USD
* 📊 Market capitalization
* 📉 24-hour price change
* 🔄 Auto-refresh every 30 seconds
* 🔐 Secure API key management using `.env`
* 📱 Responsive Bootstrap UI

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* Bootstrap 5
* JavaScript
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
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── vite.config.js
│
├── screenshots/
│   ├── Img1.png
│   ├── Img2.png
│   ├── Img3.png
│   └── Img4.png
│
└── README.md
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/Santosh-S321/Cryptopulse.git
cd Cryptopulse
```

### Install Backend Dependencies

```bash
cd backend
npm install
```

### Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file inside the `backend` folder.

```env
CMC_API_KEY=YOUR_COINMARKETCAP_API_KEY
```

---

## ▶️ Running the Application

### Start the backend

```bash
cd backend
npm start
```

Backend runs on:

```
http://localhost:5000
```

### Start the frontend

```bash
cd frontend
npm run dev
```

Open:

```
http://localhost:5173
```

---

# 📸 Screenshots

## Home Page

![Home](screenshots/Img1.png)

---

## Popular Cryptocurrency Dropdown

![Dropdown](screenshots/Img2.png)

---

## Bitcoin Price

![Bitcoin](screenshots/Img3.png)

---

## Ethereum Price

![Ethereum](screenshots/Img4.png)

---

## 🔗 API Endpoint

```
GET /api/crypto/:symbol
```

Example:

```
GET /api/crypto/BTC
```

---

## 🚀 Future Enhancements

* 📈 Interactive price charts
* ⭐ Watchlist feature
* 🔎 Search autocomplete
* 🌙 Dark/Light mode
* 🌍 Multiple currency support
* 📊 Historical price analysis

---

## 👨‍💻 Author

**Santosh S**

* 🎓 B.E. Computer Science Engineering

GitHub: https://github.com/Santosh-S321

