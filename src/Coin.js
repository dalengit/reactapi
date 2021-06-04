import React from 'react'

const Coin = () => {
    return (
        <div className="coin-container">
            <div className="coin-row">
                <div className="coin">
                    <img src={image} alt="currency" />
                    <h1>{name}</h1>
                    <p className="coin-symbol">{symbol}</p>
                </div>
                <div className="coin-data">
                    <p className="coin-price">£{price}</p>
                    <p className="coin-volume">£{volume.toLocaleString()}</p>
                    
                </div>
            </div>
        </div>
    )
}

export default Coin
