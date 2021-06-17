import React from 'react'
import { Link } from 'react-router-dom'
import Pic from '../UIDesign/ImageTemps/pic1.jpg'
import './HeadFront.css'

const HeadFront = () => {

return (

 <div className = 'head-pallette'>
<div className = 'head-pallette_left'>
<h1 className = 'banner'><img src="https://www.missioned.in/static/media/NavigationLogo.19c19c2f.svg" alt="" class="img-fluid"/> MISSIONED STORE</h1>
<h3>The one stop shop for all students of India</h3>
<h3>Trusted by 2500+ students</h3>
<div className = 'head-pallette_left_buttons'>
<Link to="/classes" className = 'btn-1'>Start Shopping</Link>&nbsp;&nbsp;
<Link  className = 'btn-1'>MissionEd Pro <span class="badge_btn-2">New</span></Link>  
</div>

</div>
<div className = 'head-pallette_right'>
    <img src = {Pic} width = '600px' height = '400px'/>
</div>
    </div>

);

}
export default HeadFront