import React from 'react'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

export default function Navbar() {
  return (
    <div>
      <ul className='Navbar'>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>

    <li><Link to="/flats">Destinations</Link></li>
    <li><Link to="/testimonials">Testimonials</Link></li>
    <li><Link to="/contact">Contact</Link></li>
   
   
</ul>
    </div>
  )
}
