import React from 'react'
import { Button } from '../Button'
import { Link } from 'react-router-dom'
import './Pagesection.css'



function Pagesection({lightBg,topLine,lightText,lightTextDesc,headline,description,alt,buttonLabel,img,imgStart}) {

    return (
        <>
          <div className = {lightbg ? 'pagesection-lightbg' : 'pagesection-darkbg'}>
              
              <div className="container">

                  <div className="row home-section"></div>
              </div>
              
              </div>  
        </>
    )
}

export default Pagesection
