import React from 'react'
import '../card/Card.css'


function Card(props) {
  return (
    <div>
      <div className='card'>
        <img className='image' src={props?.path} alt='' />
        <p className='product-name'>{props?.productName} </p>
        <p className='price'>{props?.price} </p>

        <div className='hoverImg'>
       <img className='image-cap' src={props?.hoverImg} alt='' /> <br/>

       <div className='btn'>
       <button className='btn-left'>add to cart</button>
       
       <button className='btn-right'>quick view</button>
       </div>

       </div>


       </div>

      
    </div>
  )
}

export default Card
