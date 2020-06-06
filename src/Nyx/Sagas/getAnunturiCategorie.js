import { take, call, put,select,takeLatest,delay} from 'redux-saga/effects'
import { actionType } from '../Utils'
import axios from 'axios'
import {linkSpreFolderApi} from '../Utils/serverLinks'

export function* anunturiCategorieSaga(){
    // while(true){

        yield takeLatest(actionType.GET_ANUNTURI_CATEGORIE,getAnunturiCategorie)
        // yield  call(getAnunturiCategorie)
    // }
}

function* getAnunturiCategorie(){
    const {search} = yield select(state => state.temporary)
    if(search !== '')
        yield delay(500)

    yield put({type:actionType.SET_ANUNTURI_LOADING,status:true})
    try{
        let {adsPerPage, offset, categorie } = yield select(state => state.pagination)
        if(search !== '')
            categorie = 'search'
        // const {search} = yield select(state => state.temporary)
        const {id} = yield select(state => state.login)
        const data = new FormData()
		data.append('preluate', adsPerPage)
		data.append('sarite', offset)
        data.append('categorie', categorie)
        data.append('id',id)
        data.append('search',search)
        const result = yield axios.post(linkSpreFolderApi+'getAnunturiCategorie.php',data)
        yield put({type:actionType.SET_ANUNTURI,anunturi: result.data.result})

    }
    catch(error){
        console.log(error.response)
        yield put({type:actionType.SET_ANUNTURI,anunturi:  []})
    }
    finally{
        yield put({type:actionType.SET_ANUNTURI_LOADING,status:false})
    }
}
