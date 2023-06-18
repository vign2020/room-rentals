import React, { useState } from 'react'

import Header from './Header'
import Footer from './Footer'
import Navbar from './Navbar'

import Testimonials from '../data/data'

export default function (props) {
  const testim=Testimonials[3]
  const [ind,Setind]=useState(0);

  return (
    <div>
      <Navbar/>
        <Header name={props.curr_title} desc={props.curr_desc} /> 
            <h1 className='testim-h1'>Our Testimonials</h1>
            <p>{props.desc}</p>
            <div className="Testimonials">
              
              <div className="testim-image">
                <img src={testim[ind].image} height={150} width={150}/>
              </div>
              <h1>{testim[ind].name}</h1>
              <h4>{testim[ind].desc}</h4>

              <button className="right" onClick={()=>{
                Setind((ind+1)%5)
              }}>next</button>
            </div>

        <Footer  name={props.mod_currentRoute} desc={props.curr_desc} /> 
  
    </div>
  )
}
