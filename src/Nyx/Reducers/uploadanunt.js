import { actionType } from '../Utils'

const INITIAL_STATE = {
    titlu:'',
    descriere:'',
    imagini:[],
    pret:0,
    categorie:'',
    brand:'',
    stare:'',
    telefon:'',
    moneda:'lei',
    isLoading: false,
}

const uploadAnuntReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case actionType.SET_UPLOAD_LOADING:
            return{
                ...state,
                isLoading:action.status
            }
        case actionType.ADD_IMAGE:{
            return{
                ...state,
                imagini:[
                    ...state.imagini,
                    action.imagine
                ]
            }
        }
        case actionType.REMOVE_IMAGE:{
            return{
                ...state,
                imagini:[
                    ...state.imagini.filter((imagine,index) => index != action.index)
                ]
            }
        }
        case actionType.RESET_UPLOAD_REDUCER:
            return{
                ...state,
                ...INITIAL_STATE,
            }
        default: 
        return state
    }
}

export default uploadAnuntReducer