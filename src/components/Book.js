import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useState } from 'react';
import '../new.css';


import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpg';
import image5 from '../images/image5.jpg';

export default function Book(props) {
  const item = props.FilterHotels;
  let item_update = [];
  console.log(`item is ${item}`);

  const [slider, Setslider] = useState();
  const [itemUpdate, setItemUpdate] = useState([]);
  const [Stars, Setstars] = useState();
  const [inc,Setinc]=useState(1);
  const [check,Setcheck]=useState(["hills"]);


  useEffect(()=>{
        if(slider===undefined || Stars===undefined){
            setItemUpdate([...item])
        }

        else{

        
    // for(let i=0; i<item.length; ++i){
      for(let j of check){

        const filteredItems = item.filter((item) => item.tags.includes(j) && item.price < slider && Math.floor(item.stars) <= Math.floor(Stars) && item.bedrooms===inc);

        setItemUpdate(filteredItems)
      }

        }

  },[check,slider, item, Stars , inc])



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
      <>
      
      <h1 className="itemUpdatelength">Showing {itemUpdate.length} results</h1>
    <div className="book-container-wrapper">
        
        <div className="FilterBy">
          <h3>Filter by:</h3>
      

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
          <h3 className='SortByBedrooms'>Sort By number of Bedrooms</h3>
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
      <div class="tag" id="relaxing"  onClick={()=>SetTags('relaxing')}>    
        <span>relaxing</span>
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
                <div className="new-container-sub-imagewrapper">

                  <div className="new-container-sub-image-text-wrapper">
                  <img src={i.image} />
                  <p>{i.address}</p>
                  </div>
                 
                <Link to={maps_link}>View location</Link> <br />

                <Link to={destination}>
                  <button>Go to Destination</button>
                </Link>

                </div>
                
                <br />
               
                <br />
                <div className="new-container-sub-text">
                  <h1>{i.name}</h1>
                  <h3>{i.stars} ⭐</h3>
                  <h3>{i.city}</h3>
                  <h3>₹ {i.price}</h3>
                  <h3>{i.bedrooms} Rooms</h3>

                  <div className="tags-container-inner">
                {
                 
                  i.tags.map((j,index2)=>{
                    
                    return (
                    <div className={`tags-container-inner-${index2}`}>
                             <h3 className='tags'>{j}</h3>
                    </div>
                 
                    )
                    
                  })
                }

                </div>

                </div>                
              </div>
            );
          })}
        </div>
      </div>
      </>
    );
  };



