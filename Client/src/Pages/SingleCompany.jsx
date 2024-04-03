import React, { useState } from 'react';
import { CiStar } from 'react-icons/ci';

const SingleCompany = () => {
  const [data, setData] = useState({
    "_id": "660c13adb3b85cc9f3231ef7",
    "scheme_name": "Aditya Birla SL Arbitrage Fund",
    "scheme_name_encoded": 34,
    "min_sip": 1000,
    "min_lumpsum": 1000,
    "expense_ratio": 0.36,
    "fund_size_cr": 4288,
    "fund_age_yr": 10,
    "fund_manager": "Lovelish Solanki",
    "fund_manager_encoded": 113,
    "sortino": 1.33,
    "alpha": 1.53,
    "sd": 0.72,
    "beta": 0.56,
    "sharpe": 1.1,
    "risk_level": 1,
    "amc_name": "Aditya Birla Sun Life Mutual Fund",
    "amc_name_encoded": 0,
    "rating": 3,
    "category": "Hybrid",
    "category_encoded": 2,
    "sub_category": "Arbitrage Mutual Funds",
    "sub_category_encoded": 1,
    "returns_1yr": 5.6,
    "returns_3yr": 4.8,
    "returns_5yr": 5.5,
    "links_url": "https://res.cloudinary.com/df0bb8ly2/image/upload/v1711960835/Mutual%20Funds%20Logo/aditya_groww_zjwfkd.webp"
  });

  const [selectedReturn, setSelectedReturn] = useState('1yr');

  const filterReturns = (returnType) => {
    setSelectedReturn(returnType);
  };

  return (
    <div className="SingleCompany-grid-container">
      <div key={data._id} className="amc-card">
        <img className="amc-logo" src={data.links_url} alt="AMC Logo" />
        <div className="amc-details">
          <div className="amc-name">
            <h1>{data.scheme_name}</h1>
          </div>
          <ul className="features-list">
            <li>{data.rating} <CiStar /> </li>
            <li>{data.category}</li>
          </ul>
          <ul className="features-return">
            {selectedReturn === '1yr' && <li>{data.returns_1yr}% <span>1Y Return</span></li>}
            {selectedReturn === '3yr' && <li>{data.returns_3yr}% <span>3Y Return</span></li>}
            {selectedReturn === '5yr' && <li>{data.returns_5yr}% <span>5Y Return</span></li>}
          </ul>
        </div>
        <img src="https://res.cloudinary.com/df0bb8ly2/image/upload/v1712089052/Mutual%20Funds%20Logo/Assets/Graph_m20eva.png" alt="" />
      </div>
      
      <div className="filter-buttons">
        <button
          className={selectedReturn === '1yr' ? 'active' : ''}
          onClick={() => filterReturns('1yr')}
        >
          1 Y
        </button>
        <button
          className={selectedReturn === '3yr' ? 'active' : ''}
          onClick={() => filterReturns('3yr')}
        >
          3 Y
        </button>
        <button
          className={selectedReturn === '5yr' ? 'active' : ''}
          onClick={() => filterReturns('5yr')}
        >
          5 Y
        </button>
      </div>

      <div className="feature-1">
        <div>
          <h3>Min:SIP amount</h3>
          {data.min_sip}
        </div>
        <div>
          <h3>Rating</h3>
          {data.rating}
        </div>
        <div>
          <h3>Fund Size</h3>
          {data.fund_size_cr}Cr
        </div>
      </div>

      <div className="features-2">
<h3>Advanced Ratio</h3>
        <div>
          <h3>Alpha</h3>
          {data.sortino}
        </div>
        <div>
          <h3>Beta</h3>
          {data.alpha}
        </div>
        <div>
          <h3>Sharpe</h3>
          {data.beta}Cr
        </div>
        <div>
          <h3>Sortino</h3>
          {data.sharpe}Cr
        </div>
      </div>
    </div>
  );
}

export default SingleCompany;