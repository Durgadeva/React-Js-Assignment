import React, { Component } from 'react';
import './Style.css';
import Forgotpassword from "../components/Forgotpassword";
import Adlogin from "./Adlogin";
import {Link} from 'react-router-dom';

class Adminlogin extends Component
{
    render()
    {
    //     this.state={ uname,  psw};
    //    const {data, success, error} = this.props;
        return(
            <form >
            <div className = "container" >
            <h1>Administrator area</h1>            
            <hr></hr>
            <div>
            <label for = "uname"><b>Username</b></label> 
            </div>
            <div>      
            <input type = "text" placeholder = "Enter Username" name = "uname" required />
            </div>
            <div>  
            <label for = "psw"><b>Password</b></label>
            </div>
            <div>
            <input type = "password" placeholder = "Enterpassword"  name = "psw" required />
            </div>
            <div>
           
            <button type = "submit" onClick={this.props.handleChange}>LOGIN</button>
            </div>
            <span className = "psw"><Link to = "/Forgotpassword">Forgot Password?</Link></span>
            
            </div>
            </form>
            
        );
    }
}

export default Adminlogin;