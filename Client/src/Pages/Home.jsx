import React from 'react'
import { Link } from 'react-router-dom';
// import { Card } from '../Components/card-hover-effect';
// import { CardHoverEffectDemo } from '../Components/CardHoverEffectDemo';
const Home = () => {

    const data = [
  { id: 1,link:'/sip100', name: 'Hign Return', image: 'https://res.cloudinary.com/df0bb8ly2/image/upload/v1712060792/Mutual%20Funds%20Logo/Assets/high_returns_2_ounjoq.svg' },
  { id: 2,link:'/sip1000', name: 'SIP with 1000', image: 'https://res.cloudinary.com/df0bb8ly2/image/upload/v1712060786/Mutual%20Funds%20Logo/Assets/sip_with_500_ctefld.svg' },
  { id: 3,link:'/sip100', name: 'Tax SAvingob', image: 'https://res.cloudinary.com/df0bb8ly2/image/upload/v1712060785/Mutual%20Funds%20Logo/Assets/tax_saving_ix53gi.svg' },
  { id: 4,link:'/sip100', name: 'Large Cap', image: 'https://res.cloudinary.com/df0bb8ly2/image/upload/v1712060791/Mutual%20Funds%20Logo/Assets/large_cap_pzcqw1.svg' },
  { id: 5,link:'/sip100', name: 'Mid Cap', image: 'https://res.cloudinary.com/df0bb8ly2/image/upload/v1712060789/Mutual%20Funds%20Logo/Assets/mid_cap_tfkkl5.svg' },
  { id: 6,link:'/sip100', name: 'Small Cap', image: 'https://res.cloudinary.com/df0bb8ly2/image/upload/v1712060785/Mutual%20Funds%20Logo/Assets/small_cap_ee3so1.svg' },
  { id: 7,link:'/sip100', name: 'SIP with 100', image: 'https://res.cloudinary.com/df0bb8ly2/image/upload/v1712060786/Mutual%20Funds%20Logo/Assets/sip_with_500_ctefld.svg' },
];
  return (
<>
    <div className='home'>  
      <div className='home-image'>
        <img src="https://res.cloudinary.com/df0bb8ly2/image/upload/v1711994452/Mutual%20Funds%20Logo/Assets/WhatsApp_Image_2024-04-01_at_11.30.30_PM_ydi9hn.jpg" alt="" />
        {/* <img src="https://res.cloudinary.com/df0bb8ly2/image/upload/v1711994486/Mutual%20Funds%20Logo/Assets/WhatsApp_Image_2024-04-01_at_11.30.50_PM_vmvkt4.jpg" alt="" /> */}
      </div>
      <div className="home-info">
        <h1>Welcome to Fund Mantra</h1>
        <p>We Help yout analyze and recommend mutual funds for  your investment</p>
      
      <button className='home-btn'>Get  Started</button>
      </div>
      
    </div>

<div className="grid-container">
      {data.map(item => (
        <Link key={item.id} to={item.link}>
        <div className="card" >
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
        </div>
        </Link>
      ))}
    </div>

    {/* <CardHoverEffectDemo></CardHoverEffectDemo> */}
  </>
  )
};

export default Home;
