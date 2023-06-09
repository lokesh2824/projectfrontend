import axios from 'axios'
import React, { Component } from 'react'

export default class Register extends Component {
  state={
    users:[]
  }
  componentDidMount(){
    axios.get("https://backendapi-0bcm.onrender.com/users")
      .then((res)=>{
          console.log(res.data)
          this.setState({
            users:res.data
          })
      })
  }
  render() {
    return (
      <div>
        <center>
        {
            this.state.users.map((user)=>(
              <div key={user._id}>
                <p>username: {user.username} </p>
                <p>password: {user.password}</p>
              </div>
            ))
        }
        </center>
      </div>
    )
  }
}
