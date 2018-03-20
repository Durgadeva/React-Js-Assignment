import React, { Component } from 'react';
import Adminlogin from "./components/Adminlogin";
import Forgotpassword from "./components/Forgotpassword";
import { bindActionCreators } from "redux";
import * as productActions from "./actionCreators/adminlogin";
import './App.css';
import Adlogin from './components/Adlogin';
import { Route, Switch} from "react-router-dom";
import {withRouter} from 'react-router';
import { connect } from "react-redux";

class App extends Component {
  componentWillMount()
  {
    console.log("Admin");
  }
   
  handleChange = (e) =>
  {
 
   if(this.props.user === "admin" && this.props.val === 123)
   {
     console.log("successful");
   }
  }
    
  
  render() 
  {
    return (      
      <div>      
          <Switch>        
             <Route exact
                    path= "/"
                    render = {props => 
                             <Adminlogin
                             handleChange = {this.handleChange()}
                            
                              />} />                 
             <Route path = "/Forgotpassword" 
                      render = {props => (
                      <Forgotpassword />
                 ) }
                 />               
            <Route path = "/Adminlogin" 
                      render = {props => (
                      <Adminlogin />
                 )
                }
                />
          </Switch>            
                      </div>
                    
    );
  }
}


function mapStateToProps(state)
{
  return{
   data: state.data,
   
  }
}

function mapDispatchToProps(dispatch)
{
  return{
    actions: bindActionCreators(productActions, dispatch)
  }
}
 export default connect(mapStateToProps, mapDispatchToProps)(App);;
