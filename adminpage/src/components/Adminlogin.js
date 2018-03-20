import React, { Component } from 'react';
import './Style.css';
import Forgotpassword from "../components/Forgotpassword";
import Adlogin from "./Adlogin";
import {Link} from 'react-router-dom';

class Adminlogin extends Component{
constructor(props){
    super(props)
    this.state = {
        loginUser: {}
    };
}

    onChangeHandler=(event) =>{
        const loginUser = this.state.loginUser;
        const name = event.target.name;
        const value = event.target.value;
        loginUser[name] = value;
        this.setState({ loginUser })
        console.log(loginUser)
    }
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
            <label><b>Username</b></label> 
            </div>
            <div>      
            <input type = "text" placeholder = "Enter Username" name = "username" onChange = {this.onChangeHandler}  />
            </div>
            <div>  
            <label><b>Password</b></label>
            </div>
            <div>
            <input type = "password" placeholder = "Enterpassword"  name = "password" onChange = {this.onChangeHandler} />
            </div>
            <div>
           
            <Link to="/"><button  onClick={()=>this.props.handleAdminLogin(this.state.loginUser)}>LOGIN</button></Link>
            </div>
            <span className = "psw"><Link to = "/Forgotpassword">Forgot Password?</Link></span>
            
            </div>
            </form>
            
        );
    }
}

export default Adminlogin;