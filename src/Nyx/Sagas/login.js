import { take, call, put, delay, select} from 'redux-saga/effects'
import { actionType } from '../Utils'
import axios from 'axios'
import qs from 'qs'

export function* loginSaga(){
    while(true){
        yield take(actionType.TRY_LOGIN)
        yield call(login)
    }
}

function* login(){
    yield put({type:actionType.SET_LOGIN_STATUS_LOADING,status:true})
    try{
        const {email, password} = yield select(state => state.login)
        const userData = {
            data: {
                platform:'Speedster',
                email,
                password,
            }
        }
        const login = yield axios.post('https://speedster.cristi.club/api/login/',qs.stringify(userData))
        
        console.log(login.data.success);
        

        
    }
    catch(error){
        console.log("A INTERVENIT O EROARE", error.response.data.error)
    }
    finally{
        yield put({type:actionType.SET_LOGIN_STATUS_LOADING,status:false})
    }
}