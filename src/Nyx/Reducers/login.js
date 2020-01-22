import { actionType } from '../Utils'

const INITIAL_STATE = {
    email: '',
    password: '',
    errors:{
        email: false,
        password: false,
    },
    isLoading: false,
}

const loginReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case actionType.SET_LOGIN_STATUS_LOADING:
            return{
                ...state,
                isLoading:action.status
            }
        case actionType.SET_LOGIN_ERROR:
            return{
                ...state,
                errors:{
                    ...state.errors,
                    [action.error]: true, // action.error = cuvantul cheie pt care vreau sa modific state.error.email/pass
                }
            }
        case actionType.RESET_LOGIN_ERRORS:
            return{
                ...state,
                errors:{
                    ...state.errors,
                    email: false,
                    password: false,
                }
            }
        case actionType.UPDATE_LOGIN_DATA:
            return{
                ...state,
                ...action.data
            }
        case actionType.RESET_LOGIN_REDUCER:
            return{
                ...state,
                ...INITIAL_STATE,
            }
        default: 
        return state
    }
}

export default loginReducer