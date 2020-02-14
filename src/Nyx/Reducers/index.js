import { combineReducers } from 'redux'
import login from './login'
import anunturi from './anunturi'
import temporary from './temporary'
import signup from './signup'
import snackbar from './snackbar'
import upload from './uploadanunt'
import pagination from './pagination'
const reducers = combineReducers({
    //lista reducere
    login,
    anunturi,
    temporary,
    signup,
    snackbar,
    upload,
    pagination,
})

export default reducers