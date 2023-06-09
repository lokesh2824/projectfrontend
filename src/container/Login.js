import React,{Component} from 'react'
import axios from 'axios'

export default class Login extends Component {
    state={  
        username:'',
        password:''
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
        // console.log(e.target.value)
    }
    handleclick=()=>{
        axios.post("https://backendapi-0bcm.onrender.com/store",{username:this.state.username,password:this.state.password})
        .then((res)=>{
            console.log(res)
        })
        // console.log(this.state.username,this.state.password)
        // fetch("https://backend-bbcw.onrender.com/add",{
        //     method:"POST",
        //     headers:{
        //         "Content-Type":"application/json"
        //     },
        //     body:JSON.stringify({username:this.state.username,password:this.state.password})

        // })
    }
    render(){
        return (
            <div>
                <center>
                <label>username: </label>
                <p><input name="username" onChange={this.handleChange}></input></p>
                <label>password: </label>
                <p><input name="password" onChange={this.handleChange}></input></p>
                <button onClick={this.handleclick}>Click</button>
                </center>
            </div>
        )
    }
}