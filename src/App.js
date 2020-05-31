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

import {  BrowserRouter, Switch, Route, HashRouter, Router } from 'react-router-dom'


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
         
        {/* GRAPH_VIEW */}
        <Route path={process.env.PUBLIC_URL + "/ContentAllBar"} component={ContentAllBar} />
        <Route path={process.env.PUBLIC_URL + "/ContentAllLine"} component={ContentAllLine} />
        <Route exact path={process.env.PUBLIC_URL + "/"} component={ContentHome} />

        {/* LADKRABANG */}
        <Route path={process.env.PUBLIC_URL + "/ContentOneBar"} component={ContentOneBar} />

        <Route path={process.env.PUBLIC_URL + "/ContentOneLine"} component={ContentOneLine} />

        {/* ABOUT_THE_PROJECT */}
        <Route path={process.env.PUBLIC_URL + "/Slider"} component={Slider} />
        <Route path={process.env.PUBLIC_URL + "/ContentTestingLine"} component={ContentTestingLine} />

        {/* LADPRAO */}
        <Route path={process.env.PUBLIC_URL + "/MockupGreenBar"} component={MockupGreenBar} />
        {/* BANGKAPI */}
        <Route path={process.env.PUBLIC_URL + "/MockupRedBar"} component={MockupRedBar} />


      </Switch>
      </BrowserRouter>
      ,
      <Footer/>
    </div>
  )
}

