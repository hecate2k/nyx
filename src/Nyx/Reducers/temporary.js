import { actionType } from '../Utils'

const INITIAL_STATE = {
    modalStatus:false,
    modal:'',
}

const temporaryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case actionType.CHANGE_MODAL_STATUS:
            return{
                ...state,
                modalStatus:action.status,
                modal:action.modal
            }
        case actionType.RESET_MODAL_STATUS:
            return{
                ...state,
                modalStatus: false,
                modal: '',
            }
        case actionType.RESET_TEMPORARY_REDUCER:
            return{
                ...state,
                ...INITIAL_STATE,
            }
        default: 
        return state
    }
}

export default temporaryReducer