import {
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from "../actionTypes/adminlogin";

export default (prevstate = {
logincred: [],

}, action) => {
    switch (action.type){
        case LOGIN:
        return{
            ...prevstate
        }
        case LOGIN_SUCCESS:
        return{
            ...prevstate,
            success: {...prevstate, ...action.logincred}
        }
        case LOGIN_FAILURE:
        return{
            ...prevstate,
            failure: {...prevstate}
        }
       
        default :
        return prevstate
    }
}