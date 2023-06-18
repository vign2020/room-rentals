import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Navbar from './Navbar'
import image1 from '../images/image1.jpg'
import logoimageone from '../images/logoimageone.png'
import logoimagetwo from '../images/imagelogostwo.png'
import logoimagethree from '../images/logoimagethree.png'

export default function About(props) {
  return (

    <div>
      <Navbar/>
                 <Header name={props.curr_title} desc={props.curr_desc} /> 
          <div className="about-container">
            <img src={image1} height={500} width={450}/>
            <div className="about-container-wrapper">
            <h2>About room-rentals</h2>
              <h1>Find Your Perfect Stay: Explore the World of Accommodations</h1>

              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste culpa nihil non deserunt odit repellat sint repudiandae perferendis? Ad cum ex animi nihil harum provident.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste culpa nihil non deserunt odit repellat sint repudiandae perferendis? Ad cum ex animi nihil harum provident</p>

              <div className="about-container-wrapper-logos">
                <div className="about-container-wrapper-logos-wrapper">
                  <h1><span>20+</span>Countries</h1>
                  <img src={logoimageone} height={50} width={50}/>
                </div>
                <div className="about-container-wrapper-logos-wrapper">
              
                <h1><span>100+</span>destinations</h1>
                <img src={logoimagetwo} height={50} width={50}/>

                </div>
                <div className="about-container-wrapper-logos-wrapper">
                <h1><span>500+</span>Hotels</h1>
                <img src={logoimagethree} height={50} width={50} />
                </div>
       
             
              </div>
        
            </div>
          

          </div>
     

        <Footer  name={props.mod_currentRoute} desc={props.curr_desc} /> 

    </div>


  )
}
