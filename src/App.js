import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './state'

import { Home, Messages, Moments, Notiffications } from './Components/Scenes'
import './App.css'

import Toolbar from './Components/Toolbar'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route path="/" component={Toolbar}/>
            <Route exact path="/" component={Home} />
            <Route path="/moments" component={Moments} />
            <Route path="/notiffications" component={Notiffications} />
            <Route path="/messages" component={Messages}/>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
