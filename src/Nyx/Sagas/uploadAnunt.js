import { take, call, put, select} from 'redux-saga/effects'
import { actionType } from '../Utils'
import axios from 'axios'
import uuid from 'react-uuid'
import { act } from 'react-dom/test-utils'
import {linkSpreFolderApi} from '../Utils/serverLinks'


export function* uploadAnuntSaga(){
    while(true){
        yield take(actionType.TRY_UPLOAD_ANUNT)
        yield call(uploadFile)
        
        
    }
}

function* uploadFile(){
    yield put({type:actionType.SET_IMAGE_UPLOAD_LOADING,status:true})
    try{
        const {brand,categorie,descriere,titlu,moneda,pret,stare,telefon,imagini} = yield select(state => state.upload)
        const {id} = yield select(state => state.login)
        const data = new FormData()
        data.append('id_publicant', id)
        data.append('brand',brand)
        data.append('categorie',categorie)
        data.append('descriere',descriere)
        data.append('titlu',titlu)
        data.append('moneda',moneda)
        data.append('pret',pret)
        data.append('stare',stare)
        data.append('telefon',telefon)
        console.log(imagini.length);
        
        for( var i = 0; i < imagini.length; i++ ){
            let file = imagini[i];
            data.append('files[' + i + ']', file);
        }

        const uploadResult = yield axios.post(linkSpreFolderApi+'upload_anunt.php',data,{
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        yield put({type:actionType.RESET_TEMPORARY_REDUCER})
        yield put({type:actionType.RESET_UPLOAD_REDUCER})
        yield put({type:actionType.ENQUEUE_SNACKBAR,notification:{
            message: 'Ai publicat anuntul cu success !',
            key: new Date().getTime() + Math.random(),
            options: {
                variant: 'success'
            },
        }})
        // const rezultat = uploadResult.data.result
        // console.log("rezultat ", rezultat);
    }
    catch(error){
        console.log("ERROR",error.response.data);
        
    }
    finally{
        yield put({type:actionType.SET_IMAGE_UPLOAD_LOADING,status:false})
    }
}