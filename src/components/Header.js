import React from 'react'

export default function Header(props) {
  return (
    <div>

{/* <ul className='Navbar'>
    <li><a href="home">Home</a></li>
    <li><a href="about">About</a></li>

    <li><a href="flats">Flats</a></li>
    <li><a href="testimonials">Testimonials</a></li>
    <li><a href="contact">Contact</a></li>
   
   
</ul> */}
    <div className='container'>
       
        <h1>{props.name}</h1>
        <p>{props.desc}</p>
    </div>

    </div>
  
  )
}
