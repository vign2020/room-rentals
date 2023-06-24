
import image1 from '../images/image1.jpg'
import image2 from '../images/image2.jpg'
import image3 from '../images/image3.jpg'
import image4 from '../images/image4.jpg'
import image5 from '../images/image5.jpg'

import ted from '../images/ted.jpg'
import osama from '../images/osama.jpg'
import richard from '../images/richard.jpg'
import wiz from '../images/wiz.jpg'
import narendra from '../images/narendra.jpg'

const hotels = [
    {
      image:image1,
      name: "Hotel A",
      city: "Las Vegas",
      address: "123 Street",
      price: 2000,
      stars:3,
      customers:234,
      
    },
    {
      image:image2,
      name: "Hotel B",
      city: "Las Vegas",
      address: "456 Street",
      price: 4000,
      stars:3,
      customers:234

    },
    {  
      image:image3,
      name: "Hotel C",
      city: "Las Vegas",
      address: "789 Street",
      price: 5000,
      stars:3,
      customers:244

    },
    {  
      image:image4,
      name: "Hotel D",
      city: "Las Vegas",
      address: "321 Street",
      price: 7000,
      stars:3.2,
      customers:149
    },
    {   
      image:image5,
      name: "Hotel E",
      city: "Las Vegas",
      address: "654 Street",
      price: 3000,
      stars:4.3,
      customers:349

    },
    {      
      image:image1,
        name: "Hotel LAA",
        city: "Los Angeles",
        address: "123 Street",
        price: 9000,
        stars:4.5,
        customers:789
      },
      {   
        image:image2,
        name: "Hotel LAB",
        city: "Los Angeles",
        address: "456 Street",
        price: 2000,
        stars:3.9,
        customers:456
      },
      {   
        image:image3,
        name: "Hotel LAC",
        city: "Los Angeles",
        address: "789 Street",
        price: 2000,
        stars:3,
        customers:156
      },
      {   
        image:image4,
        name: "Hotel LAD",
        city: "Los Angeles",
        address: "321 Street",
        price: 7300,
        stars:3,
        customers:956
      },
      {   
        image:image5,
        name: "Hotel LAE",
        city: "Chicago",
        address: "654 Street",
        price: 6000,
        stars:2.78,
        customers:456
      },
      {   
        image:image1,
        name: "Hotel Chicago streets",
        city: "Chicago",
        price: 2400,
        stars:2.89,
        customers:456,
        lat:41.59070534116764,
        long:-87.37084953127948,
        address:"1140 Marshall Street, Gary, Indiana 46404, United States"
      },
      {   
        image:image2,
        name: "Hotel Chicago palace",
        city: "Chicago",
        address: "321 Street",
        price: 1200,
        stars:3,
        customers:456
      },
      {  
        image:image1,
        name: "Hotel Chicago horses",
        city: "Chicago",
        price: 4480,
        stars:3,
        customers:456,
        lat:41.72408922900181,
        long:-87.98059074221698 ,
        address:"9131 91st Place, Hickory Hills, Illinois 60457, United States"
        
      },

  ];
  //purely for rendering images
  const HotelsImages=[
    {
      name:"Hotel Chicago horses",
      img:[
        image1,
        image2,
        image3,
        image4,
        image5
      ]
    },
    {
      name:"Hotel Chicago Palace",
      img:[
        image1,
        image2,
        image3,
        image4,
        image5
      ]
    },
    {
      name:"Hotel Chicago streets",
      img:[
        image1,
        image2,
        image3,
        image4,
        image5
      ]
    }
    
  ]
  const HotelReviews=[
    {
      name1:"Hotel Chicago horses",
      reviews:[
        {
          name:"felix",
          desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem iste itaque rerum recusandae veniam! Temporibus nostrum, accusantium dolore ad officia illum maiores provident. Commodi facere neque accusamus placeat dignissimos veniam officia velit provident temporibus!"
        },
        {
          name:"mary",
          desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem iste itaque rerum recusandae veniam! Temporibus nostrum, accusantium d"
        },
        {
          name:"jack",
          desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem iste itaque rerum recusandae veniam! Temporibus nostrum, accusantium dolore ad officia illum maiores provident. Commodi facere neque accusamus placeat dignissimos veniam officia velit provident temporibus!"
        },
        {
          name:"john",
          desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem iste itaque rerum recusandae veniam! Temporibus nostrum, accusantium d"
        }, {
          name:"Lawrance",
          desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem iste itaque rerum recusandae veniam! Temporibus nostrum, accusantium dolore ad officia illum maiores provident. Commodi facere neque accusamus placeat dignissimos veniam officia velit provident temporibus!"
        },
        {
          name:"Gary",
          desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem iste itaque rerum recusandae veniam! Temporibus nostrum, accusantium d"
        },
        {
          name:"Mike",
          desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem iste itaque rerum recusandae veniam! Temporibus nostrum, accusantium dolore ad officia illum maiores provident. Commodi facere neque accusamus placeat dignissimos veniam officia velit provident temporibus!"
        },
        {
          name:"william",
          desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem iste itaque rerum recusandae veniam! Temporibus nostrum, accusantium d"
        }
      ],
    },
    {
      name1:"Hotel Chicago streets",
      reviews:[
        {
          name:"Lawrance",
          desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem iste itaque rerum recusandae veniam! Temporibus nostrum, accusantium dolore ad officia illum maiores provident. Commodi facere neque accusamus placeat dignissimos veniam officia velit provident temporibus!"
        },
        {
          name:"Gary",
          desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem iste itaque rerum recusandae veniam! Temporibus nostrum, accusantium d"
        },
        {
          name:"Mike",
          desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem iste itaque rerum recusandae veniam! Temporibus nostrum, accusantium dolore ad officia illum maiores provident. Commodi facere neque accusamus placeat dignissimos veniam officia velit provident temporibus!"
        },
        {
          name:"william",
          desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem iste itaque rerum recusandae veniam! Temporibus nostrum, accusantium d"
        }
      ]
    }
    
  ]

const Testimonials=[
  {
    name:"Ted Bundy",
    image:ted,
    desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam atque sed ut rerum dolore aliquid exercitationem id inventore quaerat minus nihil aut nam, tenetur quidem repellendus pariatur similique ad debitis."
  },
  {
    name:"Richard Rimerez",
    image:richard,
    desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam atque sed ut rerum dolore aliquid exercitationem id ipsum, dolor sit amet consectetur adipisicing elit. Ipsam atque sed ut rerum dolore aliquid exercitationem id ininventore quaerat minus nihil aut nam, tenetur quidem repellendus pariatur similique ad debitis."
  },
  {
    name:"Wiz khalifa",
    image:wiz,
    desc:"amet consectetur adipisicing elit. Ipsam atque sed ut rerum dolore aliquid exercitationem id ipsum, dolor sit amet consectetur adipisicing elit. Ipsam atque sed ut rerum dolore aliquid exercitationem id ionem id ipsum, dolor sit amet consectetur adipisicing elit. Ipsam atque sed ut rerum dolore aliquid exercitat"
  },
  {
    name:"Narendra modi",
    image:narendra,
    desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam atque sed ut rerum dolore aliquid etetur adipisicing elit. Ipsam atque sed ut rerum dolore aliquid exercitationem id ininventore quaerat minus nihil aut nam, tenetur quidem repellendus pariatur similique ad debitis."
  },
  {
    name:"Osama Bin laden",
    image:osama,
    desc:"Allah!!"
  }
]
  export default [hotels,HotelsImages,HotelReviews,Testimonials];
