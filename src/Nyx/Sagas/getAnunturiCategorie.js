import { take, call, put,select} from 'redux-saga/effects'
import { actionType } from '../Utils'
import axios from 'axios'
import {linkSpreFolderApi} from '../Utils/serverLinks'

export function* anunturiCategorieSaga(){
    while(true){
        yield take(actionType.GET_ANUNTURI_CATEGORIE)
        yield  call(getAnunturiCategorie)
    }
}

function* getAnunturiCategorie(){
    yield put({type:actionType.SET_ANUNTURI_LOADING,status:true})
    try{
        const {adsPerPage, offset, categorie } = yield select(state => state.pagination)
        const data = new FormData()
		data.append('preluate', adsPerPage)
		data.append('sarite', offset)
        data.append('categorie', categorie)
        const result = yield axios.post(linkSpreFolderApi+'getAnunturiCategorie.php',data)
        yield console.log("Anunturi:",result.data.result);
        yield console.log("sarite",offset);
        yield console.log("preluate",adsPerPage);
        yield put({type:actionType.SET_ANUNTURI,anunturi: result.data.result})

    }
    catch(error){
        console.log(error)
        return []
    }
    finally{
        yield put({type:actionType.SET_ANUNTURI_LOADING,status:false})
    }
}
