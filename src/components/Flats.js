import React from 'react'
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpg';
import image5 from '../images/image5.jpg';

import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';



export default function Flats(props) {
    const flats=[
        {
            img:image1,
            name:"Chicago",
            price:"30000",
            type:"3BHK",
            location:"Experience the vibrant spirit of Chicago, where city lights meet endless possibilities",

        },
        {
            img:image2,
            name:"Los Angles",
            price:"20000",
            type:"2BHK",
            location:"Discover the allure of Los Angeles, where dreams come to life against the backdrop of sun-kissed beaches and Hollywood glamour",

        },
        {
            img:image3,
            name:"Las Vegas",
            price:"33000",
            type:"3BHK",
            location:"Experience the dazzling lights and endless excitement of Las Vegas, where the city never sleeps and fortunes are made with every roll of the dice.",

        },
        {
            img:image4,
            name:"New york city",
            price:"25000",
            type:"3BHK",
            location:"Discover the heartbeat of the concrete jungle in the city that never sleeps. From iconic landmarks to hidden gems, New York City is a vibrant tapestry of cultures, art, and limitless possibilities.",

        },
        {
            img:image5,
            name:"Miami",
            price:"12000",
            type:"3BHK",
            location:"Experience the sun-kissed paradise of Miami, where the vibrant city meets pristine beaches. Indulge in the pulsating energy, savor delicious cuisine, and dance to the rhythm of Latin beats. Miami is where relaxation, excitement, and luxury intertwine",

        },
        {
            img:image1,
            name:"Philadelphia",
            price:"11000",
            type:"3BHK",
            location:"Discover the historic charm and modern allure of Philadelphia, the city of brotherly love. Immerse yourself in rich history, explore iconic landmarks like Independence Hall and the Liberty Bell, and indulge in mouthwatering cheesesteaks. Philly welcomes you with open arms, ready to create unforgettable memories.",

        }

    ]

  return (
    <div>
<Navbar />
<Header name={props.curr_title} desc={props.curr_desc} /> 

<div className='container-flats'>
     {flats.map((item,index)=>{
        return(
            <div className="container-flats-sub">
                <h1>{item.name}</h1>
                <img src={item.img} height="200px" width="320px"/>
                <h4>{item.location}</h4>
                <a href="/home"> 
                    <button className='rent'>Rent for a month</button>
                </a>
                
            </div>
        )
     })}

    
</div>
        <Footer  name={props.mod_currentRoute} desc={props.curr_desc} /> 



    </div>
    

  )
}
