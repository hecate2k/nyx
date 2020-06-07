import { take, call, put,select} from 'redux-saga/effects'
import { actionType } from '../Utils'
import axios from 'axios'
import {linkSpreFolderApi} from '../Utils/serverLinks'

export function* getNrAnunturi(){
    while(true){
        yield take(actionType.GET_NR_ANUNTURI)
        // const {currentPage} = yield select(state => state.pagination)
        const {categorie} = yield take(actionType.GET_NR_ANUNTURI)
        yield call(getTotalAnunturi,categorie)
    }
}

function* getTotalAnunturi(categorie){
    try{
        const {id} = yield select(state => state.login)
        const data = new FormData()
        data.append('categorie', categorie)
        data.append('id',id)
        const uploadResult = yield axios.post(linkSpreFolderApi+'getNrAnunturi.php',data)
        
        const rezultat = uploadResult.data.result
        yield put({type:actionType.SET_NR_ADS,rezultat})
        console.log("total anunturi ", categorie);
        
    }
    catch(error){
        console.log("ERROR",error.response.data);
        
    }
    finally{
    }
}

export function* anunturiSaga(){
    while(true){
        const action = yield take(actionType.SET_DELETED_ARCHIVED)
        yield call(updateAnunt,action.upType,action.upValue,action.idAnunt)
    }
}

function* updateAnunt(upType,upValue,idAnunt){
    try{
        const {id} = yield select(state => state.login)
        const {clickedId,updateType,updateValue} = yield select(state => state.temporary)
        const data = new FormData()
        console.log("VALORI: ",upType,upValue,idAnunt,id);
        console.log("AM INTRAT AICI");
        
        data.append('tip', upType)
        data.append('value',upValue)
        data.append('id_anunt',idAnunt)
        data.append('id_publicant',id)
        const uploadResult = yield axios.post(linkSpreFolderApi+'getNrAnunturi.php',data)
        const rezultat = uploadResult.data.result
        console.log("Returned: ",rezultat);
        const {didUpdate} = yield select(state => state.temporary)
        
        yield put({type: actionType.UPDATE_TEMP_DATA, data: {
            didUpdate : !didUpdate
        }})
        yield put({type:actionType.ENQUEUE_SNACKBAR,notification:{
            message: upType === 'arhivat' ? (upValue === 1 ? 'Anuntul a fost arhivat cu success !' : 'Anuntul a fost dezarhivat cu success !') : 'Anuntul a fost sters cu success !',
            key: new Date().getTime() + Math.random(),
            options: {
                variant: 'success'
            },
        }})
        
    }
    catch(error){
        console.log("Eroare: ",error.response.data.message);
        yield put({type:actionType.ENQUEUE_SNACKBAR,notification:{
            message: 'A avout loc o eroare de server. Va rugam sa reincercati !',
            key: new Date().getTime() + Math.random(),
            options: {
                variant: 'error'
            },
        }})
        
    }
    finally{
    }
}