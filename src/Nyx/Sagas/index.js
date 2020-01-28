import { all } from 'redux-saga/effects'
import { loggerSaga } from './logger'
import { loginSaga } from './login'
import { anunturiSaga } from './anunturi'

export default function* sagas(){
    yield all([
        //lista sagauri ex saga1(),
        loggerSaga(),
        loginSaga(),
        anunturiSaga(),
    ])
}