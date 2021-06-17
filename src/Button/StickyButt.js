import React from 'react'
import './StickyButt.css'

function StickyButt() {



const onScroll = () => {

const scrollOffset = window.pageYOffset;

const butt = document.querySelector(".floating-container");

if(scrollOffset > 120){
    butt.classList.add("float-active")
}

else{
    butt.classList.remove("float-active")
}}

window.addEventListener("scroll",onScroll);

    return (
        <div className = 'floating-container'>
            <div className="floating" onClick>&#9651;</div>
        </div>
    )
}

export default StickyButt
