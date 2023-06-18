import React from 'react'
import Hotels from '../data/data'

import { useState } from 'react'

import image1 from '../images/image1.jpg'
import image2 from '../images/image2.jpg'
import image3 from '../images/image3.jpg'

export default function Destination(props) {
    const HotelsImages=Hotels[1];
    const HotelReviews=Hotels[2];

    console.log(HotelReviews)
    console.log(props.dest)

    const [styles,Setstyles]=useState('none')

    return(
        <div>
            <h1>{props.dest}</h1>
            {
  HotelsImages.filter((items) => items.name === props.dest).map((item) => (
    <div className="image-container">
      {
        item.img.map((image, imageIndex) => (
          <img src={image} key={imageIndex} alt="Hotel Image" height={400} width={400} onClick={()=>{

            Setstyles('block')
          }}/>
        ))
      }
    </div>
  ))
}

<div id="myModal" class="modal" style={{display:styles}}>

    <div class="modal-content">

      <div className="modal-content-heading">
      <h2>{props.dest}</h2>

        <span class="close" onClick={()=>{

          Setstyles('none')
        }}>&times;</span>
      </div>
    

      
<div className="image-reviews-wrapper">
<div className="extra-images">
      {
  HotelsImages.filter((items) => items.name === props.dest).map((item) => (
    <div className="image-container">
      {
        item.img.map((image, imageIndex) => (
          <img src={image} key={imageIndex} alt="Hotel Image" height={200} width={200} onClick={()=>{

            Setstyles('block')
          }}/>
        ))
      }
    </div>
  ))
}
        
      </div>
   
   
      <div className="reviews-container">
  {
    HotelReviews.filter((item) => item.name1 === props.dest).map((items, index) => {
      const list = items.reviews;
      return list.map((item3, index) => (
        <div key={index} className="review-item">
         <h1 key={index}>{item3.name}</h1>
         <p>{item3.desc}</p>

        </div>
       
      ));
    })
  }
      </div>


</div>
 


    </div>
  </div>

        </div>
    )

}
