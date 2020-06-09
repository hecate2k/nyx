import { take, call, put, select} from 'redux-saga/effects'
import { actionType } from '../Utils'
import axios from 'axios'
import {linkSpreFolderApi} from '../Utils/serverLinks'


export function* signupSaga(){
    while(true){
        yield take(actionType.TRY_SIGNUP)
        yield call(signup)
        yield put({type: actionType.CHANGE_MODAL_STATUS, modalStatus: false, modal: ''})
        
    }
}

function* signup(){
    yield put({type:actionType.SET_SIGNUP_STATUS_LOADING,status:true})
    try{
        const {nume,prenume,email, password} = yield select(state => state.signup)
        const data = new FormData()
        data.append('nume',nume)
        data.append('prenume',prenume)
		data.append('email', email)
        data.append('password', password)
        
        const login = yield axios.post(linkSpreFolderApi + 'signup.php',data)
        
        const value = login.data.result
        console.log("RETURNED OBJ",login.data.result);
        yield put({type: actionType.SET_LOGIN_DATA, value})
        yield put({type:actionType.ENQUEUE_SNACKBAR,notification:{
            message: 'Contul a fost creat cu succes si a-ti fost logat automat in cont !',
            key: new Date().getTime() + Math.random(),
            options: {
                variant: 'success'
            },
        }})
    }
    catch(error){
        console.log("Eroare: ",error.response.data.message);
        yield put({type:actionType.ENQUEUE_SNACKBAR,notification:{
            message: 'Datele introduse nu sunt corecte sau este o eroare de server !',
            key: new Date().getTime() + Math.random(),
            options: {
                variant: 'error'
            },
        }})
    }
    finally{
        yield put({type:actionType.SET_SIGNUP_STATUS_LOADING,status:false})
    }
}