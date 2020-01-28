import { take, call, put, delay, select} from 'redux-saga/effects'
import { actionType } from '../Utils'
import axios from 'axios'
import qs from 'qs'
import {listaAnunturi} from '../Utils'

export function* anunturiSaga(){
    while(true){
        yield take('GET_ANUNTURI')
        const anunturi = yield  call(getAnunturi)
        yield put({type:actionType.SET_ANUNTURI,anunturi})
    }
}

function* getAnunturi(lisaAnunturi){
    yield put({type:actionType.SET_ANUNTURI_LOADING,status:true})
    try{
        // const login = yield axios.post('https://speedster.cristi.club/api/login/',qs.stringify(userData))
        yield delay(1000)
        // throw new Error('eroare')
        return listaAnunturi

        
    }
    catch(error){
        console.log('saa')
        return []
    }
    finally{
        yield put({type:'SET_ANUNTURI_LOADING',status:false})
    }
}