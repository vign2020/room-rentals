import React from 'react'

export default function Header(props) {
  return (
    <div>

    <div className='header-container'>
       
        <h1>{props.name}</h1>
        <p>{props.desc}</p>
    </div>

    </div>
  
  )
}
