import { take, call, put, select} from 'redux-saga/effects'
import { actionType } from '../Utils'
import axios from 'axios'
import {linkSpreFolderApi} from '../Utils/serverLinks'


export function* profileSaga(){
    while(true){
        yield take(actionType.TRY_PROFILE_UPDATE)
        yield call(update)
        yield put({type: actionType.CHANGE_MODAL_STATUS, modalStatus: false, modal: ''})
        
    }
}

function* update(){
    yield put({type:actionType.SET_SIGNUP_STATUS_LOADING,status:true})
    try{
        const {email, password} = yield select(state => state.signup)
        const data = new FormData()
		data.append('email', email)
        data.append('password', password)
        
        const login = yield axios.post(linkSpreFolderApi + 'signup.php',data)
        
        const value = login.data.result
        console.log("RETURNED OBJ",login.data.result);
        yield put({type: actionType.SET_LOGIN_DATA, value})
       

        // return login.data.login
    }
    catch(error){
        console.log("ERROR",error.response);
    }
    finally{
        yield put({type:actionType.SET_SIGNUP_STATUS_LOADING,status:false})
    }
}