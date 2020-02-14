import { actionType } from '../Utils'

const INITIAL_STATE = {
    anunturi:[],
    isLoading: false,
}

const anunturiReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case actionType.SET_ANUNTURI_LOADING:
            return{
                ...state,
                isLoading: action.status
            }
        case actionType.SET_ANUNTURI:
            return{
                ...state,
                anunturi: state.anunturi.filter(anunt => anunt.id !== anunt.id).concat(action.anunturi)
            }        
            case actionType.RESET_ANUNTURI:
                return{
                    ...state,
                    ...INITIAL_STATE,
                }
        default: 
        return state
    }
}

export default anunturiReducer