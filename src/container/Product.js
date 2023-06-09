import React, { Component } from 'react'

export default class Product extends Component {
    state={
        products:[]
    }
    componentDidMount(){
        fetch("https://backend-bbcw.onrender.com/products")
        .then((res)=>{
            return res.json()
        })
        .then((res)=>{
            this.setState({
                products:res
            })
        })
    }
  render() {
    return (
      <div>
        <h1>Products List</h1>
        {
            this.state.products.map((product)=>(
                <div key={product.name}>
                    <p>Name:{product.name}</p>
                    <p>price:{product.price}</p>
                    <img src={product.image} alt={product.name}></img>
                </div>
            ))
        }
      </div>
    )
  }
}
