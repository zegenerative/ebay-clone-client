import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import store from './store'
import { Provider } from 'react-redux'
import AdListContainer from './components/AdListContainer'
import AdCreateFormContainer from './components/AdCreateFormContainer'
import css from'./App.css'
import AdDetailsContainer from './components/AdDetailsContainer'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Route exact path='/' component={ AdListContainer } />
        <Route exact path='/sell' component={ AdCreateFormContainer } />
        <Route path="/advertisement/:id" component = {AdDetailsContainer} />
      </Provider>
    );
  }
}

export default App