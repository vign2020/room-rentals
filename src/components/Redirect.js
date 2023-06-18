import React from 'react'

import Header from './Header';
import Footer from './Footer';
import About from './About';
import Flats from './Flats';
import Testimonials from './Testimonials';
import {Route,Routes,useLocation} from 'react-router-dom';


export default function () {
    const location=useLocation();
    let currentRoute=location.pathname;
    let mod_currentRoute=currentRoute.slice(1);
    let curr_desc="";
  
   
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
    
  return (
    <div>

{dicto.map((item,index)=>{
      if(mod_currentRoute==item.title)   curr_desc=item.desc;

    })}
    {/* <Header name={mod_currentRoute} desc={curr_desc}/> */}
     <Routes>
     
     <Route path="/about" element={<About/>}/>
     <Route path="/flats" element={<Flats/>}/>
     <Route path="/Testimonials" element={<Testimonials/>}/>
    
   </Routes>

   {/* <Footer/> */}
   

    </div>
  )
}
