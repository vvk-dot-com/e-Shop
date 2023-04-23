import React from 'react'
import './Product.css'


function Product({id, title, price, rating, image}) {
  return (
    <div>
      <div className='product'>
     
      <img src={image} alt='' />
        <button>Add to basket</button>
        <div className="product_Info">
          <p>{title} <div className="product_rating">
            {Array(rating)
            .fill()
            .map((_, i)=>(<p>⭐</p>))}
            </div></p>
          <p className="product_price"> <small>$</small> <strong>{price}</strong> </p>
          
        </div>
        
        </div>
    </div>
  )
}

export default Product