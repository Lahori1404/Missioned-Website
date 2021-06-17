import React from 'react'
import './FeedbackForm.css'

const FeedbackForm = () => {

    return(
<div className = 'FeedbackForm'>
<h2>Feedback</h2>
<form className = 'feedback__input'>
<input type = 'text' className = 'name' placeholder = 'Full Name'></input>
<input type = 'email' className = 'email' placeholder = 'Your Email'></input>
<input type = 'text' className = 'subject' placeholder = 'Subject'></input>
<textarea className = 'Message' placeholder = 'Message'></textarea>
<input className = 'submitform' type = 'submit'></input>
</form>


</div>


    );
}
export default FeedbackForm