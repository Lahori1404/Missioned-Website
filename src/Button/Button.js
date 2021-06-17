import React from 'react'
import './Button.css'

const STYLES = ['btn-primary','btn-outline'];

const SIZES = ['btn-medium','btn-large','btn-mobile','btn-wide'];

const COLOR = ['primay','orange','orange-red','shaded','green']


function Button({Children,type,onclick,buttonStyle,buttonSize,buttonColor}) {
   
    const checkStyles = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    const checkColor = COLOR.includes(buttonColor) ? buttonColor : null;
   
    return (

<button className = {`btn ${checkStyles}
 ${checkSize} ${checkColor}`} type = {type} >{Children}</button>

    )
}

export default Button
