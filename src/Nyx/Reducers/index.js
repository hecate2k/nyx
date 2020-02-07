import { combineReducers } from 'redux'
import login from './login'
import anunturi from './anunturi'
import temporary from './temporary'
import signup from './signup'
import snackbar from './snackbar'
import upload from './uploadanunt'

const reducers = combineReducers({
    //lista reducere
    login,
    anunturi,
    temporary,
    signup,
    snackbar,
    upload
})

export default reducers