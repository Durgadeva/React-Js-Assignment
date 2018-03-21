import {
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    
} from "../actionTypes/adminlogin";

export default (prevstate = {
logincredentials: [],

}, action) => {
    switch (action.type){
        case LOGIN:
        return{
            ...prevstate,
           
        }
        case LOGIN_SUCCESS:
        return{
            ...prevstate,
            logincredentials : action.url
        }        
       
        default :
        return prevstate
    }
}