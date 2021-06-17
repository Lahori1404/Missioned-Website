import React from 'react'
import NavBar from './Components2/NavBar'
import HeadFront from './Components/Section/HeadFront'
import FeedBackForm from './Components/FeedbackForm/FeedbackForm'
import StickyButt from './Button/StickyButt'
import NewsLetter from './Components/NewsLetter/NewsLetter'
import FooterContainer from './Components/Footer/FooterContainer'
import ProductPallette from './Components/ProductSec/ProductPallette'
import Classes from './Components/Classes/Classes'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css'

function App() {



  return (

 <Router>

<NavBar/>
<HeadFront/>
<StickyButt/>
<Switch>
<Route path = '/' exact component = {ProductPallette} />
<Route path = '/classes' component = {Classes}/>
</Switch>
<FeedBackForm/>
<NewsLetter></NewsLetter>


<FooterContainer/>
</Router>  

  );
}

export default App;