import { take, call, put} from 'redux-saga/effects'
import { actionType } from '../Utils'
import axios from 'axios'

export function* anunturiSaga(){
    while(true){
        const { preluate,sarite } = yield take(actionType.GET_ANUNTURI)
        const anunturi = yield  call(getAnunturi,preluate,sarite)
        yield put({type:actionType.SET_ANUNTURI,anunturi})
    }
}

function* getAnunturi(preluate,sarite){
    yield put({type:actionType.SET_ANUNTURI_LOADING,status:true})
    try{
        const data = new FormData()
		data.append('preluate', preluate)
		data.append('sarite', sarite)

		// gresit ... axios returneaza obiect de tipu obiect.data (acolo is datele tale)
		// plus ca api-u creaza obiectu success in care iti baga rezultatele
		// deci ramai cu result.data.success
        const result = yield axios.post('http://localhost/nixx/anunturiCristi.php',data)
        console.log(result);
        
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
