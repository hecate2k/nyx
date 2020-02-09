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
    clickedIndex:-1,
    meniu:'',
    isOpen:false,
    temporary: '',
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
        case actionType.SET_UPLOAD_DATA:
            return{
                ...state,
                ...action.value
            }
        case actionType.REMOVE_IMAGE:{
            return{
                ...state,
                imagini:[
                    ...state.imagini.filter((imagine,index) => index != action.index)
                ],
            }
        }
        case actionType.RESET_INDEX:
            return{
                clickedIndex:-1,
            }
        case actionType.OPEN_MENIU:
            return{
                ...state,
                meniu:action.meniu,
                isOpen:true,
            }
        case actionType.CLOSE_MENIU:
            return{
                ...state,
                meniu:'',
                isOpen:false,
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