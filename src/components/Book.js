import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useState } from 'react';


import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpg';
import image5 from '../images/image5.jpg';

export default function Book(props) {
  const item = props.FilterHotels;
  let item_update = [];
  console.log(`item is ${item}`);

  const [slider, Setslider] = useState(5000);
  const [itemUpdate, setItemUpdate] = useState([]);
  const [Stars, Setstars] = useState(2);
  const [inc,Setinc]=useState(1);
  const [check,Setcheck]=useState([]);

  useEffect(() => {
    const updatedItems = item.filter(
      (i) => i.price < slider && Math.floor(i.stars) <= Math.floor(Stars) && i.bedrooms===inc
    );
    setItemUpdate(updatedItems);
  }, [slider, item, Stars , inc]);



  const removeTag = (index) => {
    const updatedArray = [...check];
    updatedArray.splice(index, 1);
    Setcheck(updatedArray);
  };
  const SetTags=(tags)=>{
    if (!check.includes(tags)) {
      Setcheck([...check, tags]);
    }
  }


    return (
    <div className="book-container-wrapper">
        <h1 className="itemUpdatelength">Showing {itemUpdate.length} results</h1>
        <div className="FilterBy">
          <h3>Filter by:</h3>
          <div className="FilterByBudget">
            {/* pass */}
          </div>

          <div className="FilterByStars">
            <h3>Ratings</h3>
            <input
              type="radio"
              id="option1"
              name="mcq"
              value={1}
              onClick={(e) => {
                Setstars(e.target.value);
              }}
            />
            <label htmlFor="option1">1 Stars</label>
            <br />

            <input
              type="radio"
              id="option2"
              name="mcq"
              value={2}
              
              onClick={(e) => {
                Setstars(e.target.value);
              }}
              checked
            />
            <label htmlFor="option2">2 Stars</label>
            <br />

            <input
              type="radio"
              id="option3"
              name="mcq"
              value={3}
              onClick={(e) => {
                Setstars(e.target.value);
              }}
            />
            <label htmlFor="option3">3 Stars</label>
            <br />

            <input
              type="radio"
              id="option4"
              name="mcq"
              value={4}
              onClick={(e) => {
                Setstars(e.target.value);
              }}
            />
            <label htmlFor="option4">4 Stars</label>
            <br />

            <input
              type="radio"
              id="option5"
              name="mcq"
              value={5}
              onClick={(e) => {
                Setstars(e.target.value);
              }}
            />
            <label htmlFor="option5">5 Stars</label>
          </div>

          <div className="slider-container">
            <h3>Sort By your budget:</h3>
            <input
              type="range"
              min="1000"
              max="10000"
              value={slider}
              step="3"
              onChange={(e) => {
                Setslider(e.target.value);
              }}
            />
            <div className="slider-value" id="sliderValue">
              {slider}
            </div>
          </div>


          {/* for the increment button */}
          <h3>Sort By number of Bedrooms</h3>
          <div class="button-container">
            
        <div class="button decrement-button" onClick={()=>{
          Setinc(inc-1);
        }}>-</div>
        <div id="space">{inc}</div>
        <div class="button increment-button"  onClick={()=>{
          Setinc(inc+1);
        }}>+</div>
      </div>


          <div className='container-Tags'>
            <h3>Sort by Tags</h3>
            <div class="NotSelected">
    <div class="tag" id="hills" onClick={()=>SetTags('hills')}>    
        <span>hills</span>
      </div>
      <div class="tag" id="beach" onClick={()=>SetTags('beach')}>
        <span>beach</span>
      </div>
      <div class="tag" id="forest" onClick={()=>SetTags('forest')}>
        <span>forest</span>
      </div>
      <div class="tag" id="romance"  onClick={()=>SetTags('romance')}>    
        <span>romance</span>
      </div>
      <div class="tag" id="pilgrimage" onClick={()=>SetTags('pilgrimage')} >
        <span>pilgrimage</span>
      </div>
      <div class="tag" id="mountains"  onClick={()=>SetTags('mountains')}>
        <span>mountains</span>
      </div>

  </div>

 
 
    </div>

    <div className="select">
  {check.map((item, index) => (
    <div className="tag" key={index}>
      <span>{item}</span>
      <span className="close" onClick={()=> removeTag(index)}>x</span>
    </div>
  ))}
</div>

        </div>

        <div className="new-container">
          {itemUpdate.map((i, index) => {
            let destination = `/destination?name=${i.name}`;
            const maps_link = `/maps?lat=${i.lat}&long=${i.long}`;

            return (
              <div className="new-container-sub">
                <img src={i.image} height="200px" width="200px" />
                <br />
                <p>{i.address}</p>
                <Link to={maps_link}>View location</Link>
                <br />
                <h1>{i.name}</h1>
                <h3>{i.stars} ⭐</h3>
                <h3>{i.city}</h3>
                <h3>₹ {i.price}</h3>
                <h3>{i.bedrooms} Rooms</h3>
                <Link to={destination}>
                  <button>Go to Destination</button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  };



