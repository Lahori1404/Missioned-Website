import React from 'react'
import ProductCard from '../UIDesign/ProductSection/ProductCard'
import Pic1 from '../UIDesign/ImageTemps/mug.jpg'
import Pic2 from '../UIDesign/ImageTemps/lappy.jpg'
import Pic3 from '../UIDesign/ImageTemps/LEDtv.jpg'
import Pic4 from '../UIDesign/ImageTemps/mug.jpg'
import Pic5 from '../UIDesign/ImageTemps/headphone.jpg'
import Pic6 from '../UIDesign/ImageTemps/cassette.jpg'



import './ProductPallette.css'

const ProductPallette = () =>{

return(

    <div className = 'main_offers'>
<div className = 'product_section'>
<div className = 'product-title'><h2>Deals and Offers</h2></div>
    <div className = 'products'>
<ProductCard details = {'Coffee'} image = {Pic1}></ProductCard>
<ProductCard details = {'Milan'} image = {Pic2}></ProductCard>
<ProductCard details = {'Iphone Xs'} image = {Pic3}></ProductCard>
<ProductCard details = {'Cassette'} image = {Pic4}></ProductCard>
<ProductCard details = {'Headphones'} image = {Pic5}></ProductCard>
<ProductCard details = {'Ainavyi'} image = {Pic6}></ProductCard>
</div>
</div>
    </div>

);

}
export default ProductPallette