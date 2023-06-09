import React, { Component } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './container/Login'
import Register from './container/Register'
import Product from './container/Product'
import Navigation from './container/Navigation'

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navigation/>
          <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/product' element={<Product/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
