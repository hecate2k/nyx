import { take, call, put, select} from 'redux-saga/effects'
import { actionType } from '../Utils'
import axios from 'axios'
import {useSnackbar} from 'notistack'
import {linkSpreFolderApi} from '../Utils/serverLinks'

export function* loginSaga(){
    while(true){
        yield take(actionType.TRY_LOGIN)
        yield call(login)
        
    }
}

function* login(){
    yield put({type:actionType.SET_LOGIN_STATUS_LOADING,status:true})
    try{
        
        const {email, password} = yield select(state => state.temporary)
        const data = new FormData()
		data.append('email', email)
        data.append('password', password)
        
        const login = yield axios.post(linkSpreFolderApi + 'login.php',data)
        
        const value = login.data.result
        console.log("RETURNED OBJ",login.data.result);
        yield put({type: actionType.SET_LOGIN_DATA, value})
        yield put({type: actionType.CHANGE_MODAL_STATUS, modalStatus: false, modal: ''})
        yield put({type:actionType.ENQUEUE_SNACKBAR,notification:{
            message: 'Logarea a avut loc cu success !',
            key: new Date().getTime() + Math.random(),
            options: {
                variant: 'success'
            },
        }})
        
        // return login.data.login
    }
    catch(error){
        console.log("Eroare: ",error.response.data.message);
        yield put({type:actionType.ENQUEUE_SNACKBAR,notification:{
            message: 'Email sau parola incorecta !',
            key: new Date().getTime() + Math.random(),
            options: {
                variant: 'error'
            },
        }})
    }
    finally{
        yield put({type:actionType.SET_LOGIN_STATUS_LOADING,status:false})
    }
}