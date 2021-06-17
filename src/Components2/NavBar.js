import React, {useState} from 'react'
import './NavBar.css'
import Button from '../Button/Button'
import { FaBars,FaTimes } from 'react-icons/fa'
import { ImBooks } from 'react-icons/im'
import { Link } from 'react-router-dom'


function NavBar() {

const [click,setClick] = useState(false);
const [button,setButton] = useState(true);

const onHandleClick = () => setClick(!click);
const closeMobileMenu = () => setClick(false);


const ButtonHandler = () =>{

if(window.innerWidth <= 960){
setButton(false);

}
else{setButton(true)}

}

const onScroll = () => {

    const scrollDn = window.pageYOffset;
    
    const navvu = document.querySelector(".navbar");
    
    if(scrollDn > 120){
        navvu.classList.add("SkipIt")
    }
    
    else{
        navvu.classList.remove("SkipIt")
    }}
    
   
   
   
window.addEventListener("scroll",onScroll);
window.addEventListener('resize',ButtonHandler)

    return (
        <>
          <div className="navbar">
              <div className="navBar-container container">
                  <Link className = 'navBar-logo' onClick={closeMobileMenu}><ImBooks className = 'navBar-icon' />MISSIONED</Link>
                <div className="menu-icon" onClick = {onHandleClick}>
                {click ? <FaTimes className = 'fa-times'/> : <FaBars className = 'fa-bars'/>}</div>


                <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
             <li className = 'nav-items'><Link to= '/' className = 'nav-menu-links' onClick={closeMobileMenu}>Home</Link></li>
             <li className = 'nav-items'><Link to= '/' className = 'nav-menu-links' onClick={closeMobileMenu}>Services</Link></li>
             <li className = 'nav-items'><Link to= '/' className = 'nav-menu-links' onClick={closeMobileMenu}>Products</Link></li>
             <li className = 'nav-items'>
                 {button ? (<Link to= '/' >
                     <Button buttonStyle = 'btn-outline' className = 'nav-menu-btn' Children = 'Login' onClick={closeMobileMenu}></Button></Link>):(<Link to= '/'>
                         <Button buttonStyle = 'btn-outline'className = 'nav-menu-btn' buttonSize = 'btn-wide' Children = 'Login' onClick={closeMobileMenu}>LOGIN</Button></Link>)}</li>
                </ul>

                  </div>
                     </div>   
        </>
    )
}

export default NavBar
