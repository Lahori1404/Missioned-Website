import React from 'react'
import './NewsLetter.css'



const NewsLetter = () => {

return (
<div className = 'newsLetter'>

            <h4>Join Our Newsletter</h4>
            <p>Enter your email here</p>
            <form className = 'newsLetterform'>
           <input type = 'email'></input>
           <input type = 'submit' value = 'Subscribe'></input>
            </form>


</div>

);

}
export default NewsLetter