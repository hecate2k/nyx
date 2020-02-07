import { take, call, put, select} from 'redux-saga/effects'
import { actionType } from '../Utils'
import axios from 'axios'
import uuid from 'react-uuid'
export function* imageuploadSaga(){
    while(true){
        yield take(actionType.TRY_IMAGE_UPLOAD)
        yield call(imageupload)
        
        
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

        const uploadResult = yield axios.post('http://localhost/nixx/uploadImage.php',data,{
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
        console.log("ERROR",error.response);
        
    }
    finally{
        yield put({type:actionType.SET_IMAGE_UPLOAD_LOADING,status:false})
    }
}