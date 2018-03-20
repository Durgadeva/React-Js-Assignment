import {
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from "../actionTypes/adminlogin";

export function login(data)
{
    return{
        type: LOGIN,
        data
    }
}

export function loginsuccess(success)
{
    return{
        type: LOGIN_SUCCESS,
        success
    }
}

export function loginfailure(error)
{
    return{
        type: LOGIN_FAILURE,
        error
        }
}