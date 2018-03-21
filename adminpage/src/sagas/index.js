import { loginsuccess,loginfailure } from "../actionCreators/adminlogin";
import { LOGIN } from "../actionTypes/adminlogin";
import { put, takeLatest } from "redux-saga/effects";


function* login(action){
    console.log('*****in sagas',action.loginUser)
    try {
        let url = yield fetch("http://localhost:4000/logincredentials", {
            method: 'POST',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
             body: JSON.stringify(action.loginUser)
        }).then(result => result.json() 
        );

        yield put(loginsuccess(url));
    }
    catch (error) {
        yield put(loginfailure(error));
    }
}
export function* getProductsWatcher() {
    yield [
        takeLatest(LOGIN, login)
   ];
}
