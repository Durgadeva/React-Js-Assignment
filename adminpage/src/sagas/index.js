import { loginsuccess,loginfailure } from "../actionCreators/adminlogin";
import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE} from "../actionTypes/adminlogin";
import { put, takeLatest } from "redux-saga/effects";


function* login(action){
   try{
        let values = yield fetch("http://localhost:4000/logincred", {
            method: 'POST',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify(action.logincred)
        }).then(r => r.json());
        yield put(loginsuccess(values));
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
