import { take, call, put, select} from 'redux-saga/effects'
import { actionType } from '../Utils'
import axios from 'axios'
import {useSnackbar} from 'notistack'


export function* loginSaga(){
    while(true){
        yield take(actionType.TRY_LOGIN)
        yield call(login)
        yield put({type: actionType.CHANGE_MODAL_STATUS, modalStatus: false, modal: ''})
        
    }
}

function* login(){
    yield put({type:actionType.SET_LOGIN_STATUS_LOADING,status:true})
    try{
        
        const {email, password} = yield select(state => state.temporary)
        const data = new FormData()
		data.append('email', email)
        data.append('password', password)
        
        const login = yield axios.post('http://localhost/nixx/login1.php',data)
        
        const value = login.data.result
        console.log("RETURNED OBJ",login.data.result);
        yield put({type: actionType.SET_LOGIN_DATA, value})
        // yield enqueueSnackbar('message de soccess', { variant: 'success', });
        yield put({type:actionType.ENQUEUE_SNACKBAR,notification:{
            message: 'Logarea a avut loc cu success !',
            options: {
                key: new Date().getTime() + Math.random(),
                variant: 'success'
            },
        }})

        // return login.data.login
    }
    catch(error){
        console.log("A INTERVENIT O EROAREa", error.response.data.error)
    }
    finally{
        yield put({type:actionType.SET_LOGIN_STATUS_LOADING,status:false})
    }
}