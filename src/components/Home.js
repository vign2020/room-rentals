


import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import Hotels from '../data/data';
import Header from './Header';
import Navbar from './Navbar';


//importing images
import chicago from '../images/chicago.jpg'
import nyc from '../images/nyc.jpg'
import paris from '../images/paris.jpg'
import philly from '../images/philly.jpg'
import vegas from '../images/vegas.jpg'

export default function Home(props) {
  const [checkin, setCheckin] = useState('');
  const [checkout, setCheckout] = useState('');
  const [days, setDays] = useState(-1);
  const [redirect, setRedirect] = useState(false);
  const [place, setPlace] = useState('');
  const [filterHotelsGlobal, setFilterHotelsGlobal] = useState([]);

  const hotels = Hotels[0];

  useEffect(() => {
    console.log(days); // Log the updated value of 'days'
    if (days >= 0) {
      setRedirect(true);
    }

    let filterHotels = hotels.filter((item) => item.city === place);
    const encodedHotels = encodeURIComponent(JSON.stringify(filterHotels));

    setFilterHotelsGlobal(encodedHotels);
  }, [days]);

  let query = `/book?days=${days}&place=${place}&FilterHotels=${filterHotelsGlobal}`;
  if (redirect) {
    return <Navigate to={query} />;
  }

  return (
    <>
      <div className="book-container-main">
        <div className="navbar-wrapper">
          <Navbar/>
          {/* <ul className="navbar">
            <li>Home</li>
            <li>About</li>
            <li>Destinations</li>
            <li>Testimonials</li>
            <li>Contact</li>
          </ul> */}
          <div className="button-wrapper">
            <button className="sign">Signup</button>
            <button className="login">Login</button>
          </div>
        </div>

        <div className="book-container-main-heading">
          <h2>room-<span>rentals</span>.com</h2>
          <h1>Make your stay memorable....</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas architecto aperiam iusto reprehenderit cum
            voluptatum dolore illum <br />
            quisquam fugiat ut molestias placeat, earum, dolorem libero ad distinctio error praesentium aspernatur ipsum
            voluptatem maxime minima.
          </p>
        </div>

        <div className="book-container">
          <div className="form-row">
            <label htmlFor="destination">Enter destination:</label>
            <input
              type="text"
              id="destination"
              name="destination"
              placeholder="Enter destination"
              className="destination"
              value={place}
              onChange={(e) => setPlace(e.target.value)}
            />
          </div>
          <div className="form-row">
            <label htmlFor="checkin">Select a check-in date:</label>
            <input
              type="date"
              id="checkin"
              name="checkin"
              className="checkin"
              value={checkin}
              onChange={(e) => setCheckin(e.target.value)}
            />
          </div>
          <div className="form-row">
            <label htmlFor="checkout">Select a checkout date:</label>
            <input
              type="date"
              id="checkout"
              name="checkout"
              className="checkout"
              value={checkout}
              onChange={(e) => setCheckout(e.target.value)}
            />
          </div>
          <button
            className="submit2"
            onClick={() => {
              let date1 = new Date(checkin).getTime();
              let date2 = new Date(checkout).getTime();
              let numberOfDays = Math.ceil((date2 - date1) / (1000 * 3600 * 24));
              setDays(numberOfDays);
            }}
          >
            Submit
          </button>
        </div>

        <div className="pouplar-container">
          <h1>Most popular destinations</h1>
          <div className="container">
            <img src={chicago} alt="Image 1" className="image" id="image1" />
            <img src={paris} alt="Image 2" className="image" id="image2" />
            <img src={philly} alt="Image 3" className="image" id="image3" />
            <img src={vegas} alt="Image 2" className="image" id="image4" />
            <img src={nyc} alt="Image 3" className="image" id="image5" />
          </div>
        </div>
      </div>
    </>
  );
}