import React from 'react'
import { useState,useEffect } from 'react';
import Book from './Book';
import { Navigate, Route , Routes, useFetcher } from 'react-router-dom';
import Hotels from '../data/data';
import Header from './Header';
import Navbar from './Navbar';

export default function Home(props) {

  const [checkin,Setcheckin]=useState('');
  const [checkout,Setcheckout]=useState('');
  const [days,Setdays]=useState(-1);
  const [redirect,Setredirect]=useState(false)
  const [place,Setplace]=useState('') 
  const [FilterHotels_Global, setFilterHotels_Global] = useState([]); // Use useState to manage FilterHotels_Global

 const hotels=Hotels[0];

  //fetching data from the data file 


 
  useEffect(() => {
    console.log(days); // Log the updated value of 'days'
    if(days>=0){
      Setredirect(true);
    }

    let FilterHotels=hotels.filter(item=>item.city==place)
    const encodedHotels = encodeURIComponent(JSON.stringify(FilterHotels));

    setFilterHotels_Global(encodedHotels);
    
  }, [days]);



  let query=`/book?days=${days}&place=${place}&FilterHotels=${FilterHotels_Global}`
  if (redirect) {
    return <Navigate to={query}/>
  }

  return (
 <>
   
   
   <Navbar/>
<div className="book-container-main">
       
       <div className="book-container-main-heading">
           <h2>room-<span>rentals</span>.com</h2>
           <h1>Make your stay memorable....</h1>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas architecto aperiam iusto reprehenderit cum voluptatum dolore illum <br />quisquam fugiat ut molestias placeat, earum, dolorem libero ad distinctio error praesentium aspernatur ipsum voluptatem maxime minima.</p>
       </div>
      
     
     
          <div className='book-container'>
       {/* <label>Enter destination:</label> */}
       <input type="text" name="destination" placeholder="Enter destination " className='destination'value={place} onChange={(e)=>{
         const value=e.target.value;
         Setplace(value)
       }}/>
     
       <label for="checkin">Select a checkin date:</label>
       <input type="date" id="checkin" name="checkin" className='checkin'  value={checkin} onChange={(e)=>{
         const value=e.target.value
         Setcheckin(value)
       }}></input>
     
     
       <label for="checkout">Select a checkout date:</label>
       <input type="date" id="checkout" name="checkout" className='checkout' value={checkout} onChange={(e)=>{
         const value=e.target.value
         Setcheckout(value)
       }} ></input>
     
       <button className='submit' onClick={()=>{
     
     
           let date1 = new Date(checkin).getTime();
           let date2 = new Date(checkout).getTime();
     
           // var timeDifference = Math.abs(date2-date1);
           let numberOfDays = Math.ceil( (date2 - date1) / (1000 * 3600 * 24));
     
           Setdays(numberOfDays);
      
     
       }}>submit</button>
     
     
     </div>
     
     
     </div>  

     <Header name={props.curr_title} desc={props.curr_desc} /> 
  
 
 </>



  )

}
