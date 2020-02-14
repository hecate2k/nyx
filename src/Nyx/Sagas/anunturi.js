import { take, call, put,select} from 'redux-saga/effects'
import { actionType } from '../Utils'
import axios from 'axios'
import {linkSpreFolderApi} from '../Utils/serverLinks'

export function* getNrAnunturi(){
    while(true){
        const {currentPage} = yield select(state => state.pagination)
        const {categorie} = yield take(actionType.GET_NR_ANUNTURI)
        yield call(getTotalAnunturi,categorie)
    }
}

function* getTotalAnunturi(categorie){
    try{
        
        const data = new FormData()
        data.append('categorie', categorie)
        const uploadResult = yield axios.post(linkSpreFolderApi+'getNrAnunturi.php',data)
        
        const rezultat = uploadResult.data.result
        yield put({type:actionType.SET_NR_ADS,rezultat})
        console.log("total anunturi ", rezultat);
        
    }
    catch(error){
        console.log("ERROR",error.response.data);
        
    }
    finally{
    }
}






export function* anunturiSaga(){
    while(true){
        // const {modalStatus, modal} = yield take(actionType)
        const { preluate,sarite } = yield take(actionType.GET_ANUNTURI)
        const anunturi = yield  call(getAnunturi,preluate,sarite)
        yield put({type:actionType.SET_ANUNTURI,anunturi})
        console.log('afasdfa');
        
       
    }
}

function* getAnunturi(preluate,sarite){
    yield put({type:actionType.SET_ANUNTURI_LOADING,status:true})
    try{
        const data = new FormData()
		data.append('preluate', preluate)
		data.append('sarite', sarite)

        const result = yield axios.post(linkSpreFolderApi+'anunturiBune.php',data)
        
        return result.data.result

    }
    catch(error){
        console.log(error)
        return []
    }
    finally{
        yield put({type:actionType.SET_ANUNTURI_LOADING,status:false})
    }
}
