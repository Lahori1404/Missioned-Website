import React from 'react'
import './ProductCard.css'

const ProductCard = (props) => {


return(

    <div className = 'pallette'>
<img src = {props.image} alt='gitar hai' ></img>
<h3>{props.details}</h3>
<button className = 'btn-1'>BUY</button>
    </div>

);



}
export default ProductCard