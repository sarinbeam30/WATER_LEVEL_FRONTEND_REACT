import React from 'react'
import Header from './components/Header'
import Menu from './components/Menu'
import Footer from './components/Footer'

import ContentAllBar from './components/ContentAllBar'
import ContentHome from './components/ContentHome'
import ContentOneBar from './components/ContentOneBar'
import Home from './components/Home'

import Slider from './components/Slider'
import './slide.css'

import {  Switch, Route, HashRouter } from 'react-router-dom'


//The mockup pages like MockupGreenBar, MockupRedBar are not really used
import MockupGreenBar from './components/MockupGreenBar'
import MockupRedBar from './components/MockupRedBar'

//REDUX_STORE
import store from "./store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
          <div>
            <Header/>
            <Menu/>

            <HashRouter>
            <Switch>
              
              {/* GRAPH_VIEW */} 
              <Route path="/ContentAllBar" component={ContentAllBar} />

              {/* HOME */}
              <Route exact path={"/"} component={Home} />

              {/* LADKRABANG */}
              <Route path={"/ContentOneBar"} component={ContentOneBar} />

              {/* ABOUT_THE_PROJECT */}
              <Route path={"/Slider"} component={Slider} />
              

              {/* LADPRAO */}
              <Route path={"/MockupGreenBar"} component={MockupGreenBar} />

              {/* BANGKAPI */}
              <Route path={"/MockupRedBar"} component={MockupRedBar} />

            </Switch>
            </HashRouter>
            ,
            <Footer/>
          </div>
    </Provider>
  )
}

