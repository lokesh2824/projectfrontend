import React from "react";
import { Link } from "react-router-dom";
// import { NavLink,Nav,Navbar} from 'react-bootstrap'

function Navigation(){
    return(
        <div>
            {/* <Nav className="nav">
                <NavLink as={Link} to='/'>Home</NavLink>
                <NavLink as={Link} to='/login'>Login</NavLink>
                <NavLink as={Link} to='/registation'>Registation</NavLink>
            </Nav> */}
            <Link to='/'>Login</Link>
            <Link to='/register'>Register</Link>
            <Link to='/product'>Product</Link>
            
        </div>
    )
}


export default Navigation;