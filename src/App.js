import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import {Route,Routes,useLocation} from 'react-router-dom';

import Flats from './components/Flats';
import About from './components/About';
import Home from './components/Home';
import Testimonials from './components/Testimonials';
import Book from './components/Book';
import Destination from './components/Destination'
import Maps from './components/Maps';

export default function App() {
  const location=useLocation();
  let currentRoute=location.pathname;
  let mod_currentRoute=currentRoute.slice(1);
  let curr_desc="";


  const [searchParams] = useSearchParams();
  const days = searchParams.get('days');
  const place = searchParams.get('place');
  const data= searchParams.get('FilterHotels')

  const decodedArray = JSON.parse(decodeURIComponent(data));



  const dicto=[
    {
      title:"about",
      desc: " Welcome to our premier flat rental service, where we strive to provide comfortable and convenient living spaces for individuals and families alike. With a diverse selection of well-maintained flats, we offer a range of options to suit your specific needs.Our flats are located in prime residential areas, offering easy access to essential amenities such as supermarkets, restaurants, parks, and public transportation. We understand the importance of location, and we have carefully chosen properties in desirable neighborhoods that provide a harmonious blend of convenience and tranquility.     Each of our flats is meticulously maintained and designed with your comfort in mind. You can expect spacious living areas, modern kitchens equipped with essential appliances, and well-appointed bedrooms and bathrooms. We believe that your home should be a place of relaxation and rejuvenation, and we have taken great care to create an inviting atmosphere within our flats."
      
    },
    {
      title:"flats",
      desc: "Safety and security are of utmost importance to us. All our flats are equipped with reliable security measures to ensure your peace of mind. From secure entry systems to well-lit common areas, we prioritize your safety and strive to create a secure living environment."
      
    },
    {
      title:"testimonials",
      desc: "Safety and security are of utmost importance to us. All our flats are equipped with reliable security measures to ensure your peace of mind. From secure entry systems to well-lit common areas, we prioritize your safety and strive to create a secure living environment."
      
    }

  ]



  //for the destination route
  const dest=searchParams.get('name')

  return (

  <div>

{dicto.map((item,index)=>{
      if(mod_currentRoute==item.title)   curr_desc=item.desc;

    })}
    {/* <Header name={mod_currentRoute} desc={curr_desc}/> */}
    <Routes>
     
     <Route path="/about" element={<About curr_desc={curr_desc} curr_title={mod_currentRoute} />}/>
     <Route path="/flats" element={<Flats curr_desc={curr_desc} curr_title={mod_currentRoute}/>}/>
     <Route path="/Testimonials" element={<Testimonials curr_desc={curr_desc} curr_title={mod_currentRoute}/>}/>
     <Route path="/" element={<Home />} />
     <Route path="/book" element={<Book days={days} place={place} FilterHotels={decodedArray}/>}/>
     <Route path="/destination" element={<Destination dest={dest}/>} />
     <Route path="/maps" element={<Maps/>}/>
    
   </Routes>
 
  </div>

   
  )
}

