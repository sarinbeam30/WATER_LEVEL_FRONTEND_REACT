import React from 'react'
import Header from './components/Header'
import Menu from './components/Menu'
import Footer from './components/Footer'

import ContentAllBar from './components/ContentAllBar'
import ContentAllLine from './components/ContentAllLine'
import ContentHome from './components/ContentHome'
import ContentOneBar from './components/ContentOneBar'
import ContentOneLine from './components/ContentOneLine'
import ContentTestingLine from './components/ContentTestingLine'

import Slider from './components/Slider'
import './slide.css'

import {  BrowserRouter, Switch, Route } from 'react-router-dom'


//The mockup pages like MockupGreenBar, MockupRedBar are not really used
import MockupGreenBar from './components/MockupGreenBar'
import MockupRedBar from './components/MockupRedBar'


export default function App() {
  return (
    <div>
      <Header/>
      <Menu/>
      <BrowserRouter>
       <Switch>
        <Route path="/ContentAllBar" component={ContentAllBar} />
        <Route path="/ContentAllLine" component={ContentAllLine} />
        <Route exact path="/ContentHome" component={ContentHome} />
        <Route path="/ContentOneBar" component={ContentOneBar} />
        <Route path="/ContentOneLine" component={ContentOneLine} />
        <Route path="/Slider" component={Slider} />
        <Route path="/ContentTestingLine" component={ContentTestingLine} />

            
        <Route path="/MockupGreenBar" component={MockupGreenBar} />
        <Route path="/MockupRedBar" component={MockupRedBar} />


      </Switch>
      </BrowserRouter>,
      <Footer/>
    </div>
  )
}

