import { take, call, put, select} from 'redux-saga/effects'
import { actionType } from '../Utils'
import axios from 'axios'
import uuid from 'react-uuid'
import {linkSpreFolderApi} from '../Utils/serverLinks'


export function* imageuploadSaga(){
    while(true){
        const actiune = yield take([actionType.TRY_IMAGE_UPLOAD,actionType.TRY_PROFILE_UPDATE])
        if(actiune.type === actionType.TRY_IMAGE_UPLOAD)
            yield call(imageupload)
        else if(actiune.type === actionType.TRY_PROFILE_UPDATE)
            yield call(update)
        
        
    }
}

function* imageupload(){
    yield put({type:actionType.SET_IMAGE_UPLOAD_LOADING,status:true})
    try{
        const {selectedFile, imageType} = yield select(state => state.temporary)
        const {id} = yield select(state => state.login)
        const data = new FormData()
		data.append('selectedFile', selectedFile)
        data.append('imageType', imageType)
        data.append('id',id)

        const uploadResult = yield axios.post(linkSpreFolderApi + 'uploadImage.php',data,{
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        const imagine = uploadResult.data.result
        console.log("imagine ", uploadResult.data);
        
        if(imageType === 'avatar')
        {
            yield put({type: actionType.SET_AVATAR, avatar:imagine})
            yield put({type:actionType.ENQUEUE_SNACKBAR,notification:{
                message: 'Avatarul a fot modificat cu success !',
                key: new Date().getTime() + Math.random(),
                options: {
                    variant: 'success'
                },
            }})
        }
        else if(imageType === 'cover'){
            yield put({type: actionType.SET_COVER, cover:imagine})
            yield put({type:actionType.ENQUEUE_SNACKBAR,notification:{
                message: 'Coverul a fot modificat cu success !',
                key: new Date().getTime() + Math.random(),
                options: {
                    
                    variant: 'success'
                },
            }})
        }
    }
    catch(error){
        console.log("ERROR2",error.response);
        
    }
    finally{
        yield put({type:actionType.SET_IMAGE_UPLOAD_LOADING,status:false})
    }
}

function* update(){
    yield put({type:actionType.SET_UPDATE_PROFILE_LOADING,status:true})
    try{
        const {profileSelected, profileTemp} = yield select(state => state.temporary)
        const {id} = yield select(state => state.login)
        const data = new FormData()
		data.append('tip', profileSelected.toLowerCase())
        data.append('valoare', profileTemp)
        data.append('id_user',id)
        const login = yield axios.post(linkSpreFolderApi + 'uploadImage.php',data)
        
        const rezultat = login.data.result
        console.log("Returned: ",rezultat);
        if(profileSelected !== 'parola')
            yield put({type: actionType.SET_LOGIN_DATA, value: {
                [profileSelected.toLowerCase()] : profileTemp
            }})
       

        // return login.data.login
    }
    catch(error){
        console.log("Eroare: ",error.response.data.message);
    }
    finally{
        yield put({type:actionType.SET_UPDATE_PROFILE_LOADING,status:false})
    }
}