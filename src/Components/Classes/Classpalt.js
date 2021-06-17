import React from 'react'
import './Classpalt.css'

function Classpalt(props) {
    
    return (

        <div className = 'classes-container'>
        
        <img src={props.img} alt={props.name} />

    <button className={props.btnFlag ? "":"btn-hide"}>See Courses</button>
            
        </div>
    )
}

export default Classpalt
