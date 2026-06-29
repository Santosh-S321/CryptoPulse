import { useState, useEffect  } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


function App() {
  const [symbol, setSymbol] = useState("");
  const [coin, setCoin] = useState(null);
  const [error, setError] = useState("");

  const popularCoins = ["BTC", "ETH", "BNB", "XRP", "ADA", "DOGE", "SOL", "DOT", "SUI", "LTC"];

  const getPrice = () => {
    if (!symbol) return;

    fetch(`http://localhost:5000/api/crypto/${symbol}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status && data.status.error_code === 0) {
          const coinData = data.data[symbol.toUpperCase()];
          setCoin(coinData);
          setError("");
        } else {
          setError(" Cryptocurrency not found");
          setCoin(null);
        }
      })
      .catch(() => {
        setError(" Error fetching data");
        setCoin(null);
      });
  };

  useEffect(() => {
    if (!symbol) return;

      getPrice();
      
      const interval = setInterval(() => {
      getPrice();
    }, 30000);

    return () => clearInterval(interval); // cleanup
  }, [symbol]);

  return (
  <div className="d-flex justify-content-center align-items-center vh-100 bg-wrapper">
    <div className="container">
      <div className="card card-transparent shadow-lg p-4 mx-auto" style={{ maxWidth: "500px" }}>
        <h1 className="text-center mb-4 app-title">₿  CryptoPulse</h1>

          {/* Input + Dropdown + Button */}
          <div className="mb-4">
            <div className="d-flex mb-2">
              <input
                type="text"
                className="form-control me-2"
                placeholder="Enter Symbol (e.g. BTC, ETH)"
                value={symbol}
                onChange={(e) => setSymbol(e.target.value.toUpperCase())}
              />
              <button className="btn btn-primary" onClick={getPrice}>Get Price</button>
            </div>

            {/* Dropdown */}
            <select
              className="form-select"
              onChange={(e) => setSymbol(e.target.value)}
              value={symbol}
            >
              <option value="">-- Select Popular Coin --</option>
              {popularCoins.map((coin) => (
                <option key={coin} value={coin}>
                  {coin}
                </option>
              ))}
            </select>
          </div>

          {/* Error */}
          {error && <p className="error-text text-center">{error}</p>}

          {/* Display Coin Info */}
          {coin ? (
            <div className="card bg-light text-dark mt-3">
              <div className="card-body">
                <h4 className="card-title text-center">
                  {coin.name} ({coin.symbol})
                </h4>
                <p className="card-text">
                  💰 <strong>Price:</strong> ${coin.quote?.USD?.price?.toFixed(2) ?? "N/A"}
                </p>
                <p className="card-text">
                  📈 <strong>Market Cap:</strong> $
                  {coin.quote?.USD?.market_cap?.toLocaleString() ?? "N/A"}
                </p>
                <p className="card-text">
                  📉 <strong>24h Change:</strong>{" "}
                  <span
                    className=
                    {
                      coin.quote?.USD?.percent_change_24h > 0
                      ? "text-success"
                      : "text-danger"
                    }>
                    {coin.quote?.USD?.percent_change_24h?.toFixed(2) ?? "N/A"}%
                  </span>
                </p>
              </div>
            </div>
          ) : (
            error && <p className="text-danger text-center">{error}</p>
          )}
          <br/>
        </div>
      </div>
    </div>
  );
}

export default App;
