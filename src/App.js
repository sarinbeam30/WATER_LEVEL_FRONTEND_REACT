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

import {  BrowserRouter, Switch, Route, HashRouter, Router, Redirect } from 'react-router-dom'


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
          

              <Route path={"/ContentAllLine"} component={ContentAllLine} />

              {/* HOME */}
              <Route exact path={"/"} component={ContentHome} />

              {/* LADKRABANG */}
              <Route path={"/ContentOneBar"} component={ContentOneBar} />

              <Route path={"/ContentOneLine"} component={ContentOneLine} />

              {/* ABOUT_THE_PROJECT */}
              <Route path={"/Slider"} component={Slider} />
              <Route path={"/ContentTestingLine"} component={ContentTestingLine} />

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

