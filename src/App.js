import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Coin from './Coin';

function App() {
  const [coins, setCoins] = useState([]);
  const [ search, setSearch ] =useState("");

  useEffect( () => {
    
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&order=market_cap_desc&per_page=100&page=1&sparkline=false")

    .then(res => {
      setCoins(res.data);
    })
    .catch(error => console.log(error));
  }, []);

  // Search function input 
  const handleChange = e => {
    setSearch(e.target.value);
  }

  // Coins
  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
    )

  return (
    // Search
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Search a currency</h1>
        <form>
          <input type="text" 
          className="coin-input" 
          placeholder="Search"
          onChange={handleChange}
          />
        </form>
      </div>
      {/* Coin headers */}
      <div className="coin-container">
        <div className="coin-row">
        <div className="coin">
          <h1 className='name'>Coin</h1>
        </div>
        <div className="coin-data">
        <p className='header coin-price'>Price (GBP)</p>
        <p className='header coin-volume'>24h Volume</p>
        <p className='header coin-percent'>24h</p>
        <p className='header coin-marketcap'>Market Cap</p>
        </div>
        </div>
      </div>
      {/* Coins */}
      {filteredCoins.map(coin => {
        return (
        <Coin 
        key={coin.id} 
        name={coin.name} 
        image={coin.image}
        symbol={coin.symbol}
        volume={coin.total_volume}
        price={coin.current_price}
        priceChange = {coin.price_change_percentage_24h}
        marketcap = {coin.market_cap}
        />
        )
      })}
    </div>
  );
}

export default App;


