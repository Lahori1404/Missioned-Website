import React from 'react'
import PiV1 from '../UIDesign/ImageTemps/cassette.jpg'
import Classpalt from './Classpalt'
import './Classes.css'
function Classes() {
    return (
        <div className = 'section-classes'>
            <div className="courses-section">
                <h1>OUR COURSES</h1>
                <div className="couses-palti">
<Classpalt btnFlag = {true} img = {PiV1}/>
<Classpalt btnFlag = {true} img = {PiV1}/>
<Classpalt btnFlag = {true} img = {PiV1}/>
<Classpalt btnFlag = {true} img = {PiV1}/>
                </div>
            </div>

<div className="courses-section">

    <h1>ALMA MATER OF OUR FACULTY MEMBERS</h1>
    <div className="couses-palti">
    <Classpalt btnFlag = {false} img = {PiV1}/>
    <Classpalt btnFlag = {false} img = {PiV1}/>
    <Classpalt btnFlag = {false} img = {PiV1}/>
    <Classpalt btnFlag = {false} img = {PiV1}/>
    </div>
</div>


        </div>
    )
}

export default Classes
