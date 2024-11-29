import React, { useState } from 'react'
import Card from '../card/Card'
import liner from '../../assets/liner.jpg'
import dabalash_men from '../../assets/dabalash_men.webp'
import waterproof from '../../assets/waterproof.webp'
import liner_2 from '../../assets/liner_2.jpg'
import dabalash_men2 from '../../assets/dabalash-men-2.jpg'
import waterproof_2 from '../../assets/waterproof-2.webp'


const product = [
    {
        imgPath: liner,
        productName: 'DABALASH',
        price: "$98.00",
        hoverImg : liner_2,
    },
    {
        imgPath: dabalash_men,
        productName: 'DABALASH Men',
        price: "$98.00",
        hoverImg : dabalash_men2,
    },
    {
        imgPath: waterproof,
        productName: 'Waterproof Combo',
        price: "$104.00",
        hoverImg : waterproof_2,
    }
];

function Product() {
  return (
    <div>
        <h1>Featured Product</h1>
        <div className='card-container'> 
         
        {    
              product.map((item, index) => {
            return(
              <li>  <Card key={index} productName={item?.productName} price={item?.price} path={item?.imgPath} hoverImg={item?.hoverImg} />      </li>            
            )
          }) 
        }

       </div>
    </div>
  )
}

export default Product
