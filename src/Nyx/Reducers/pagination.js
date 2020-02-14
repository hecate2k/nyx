import { actionType } from '../Utils'

const INITIAL_STATE = {
    offset: 0,
    adsPerPage:10,
    currentPage:1,
    nrPagini: 0,
    categorie:'',
    nrAds: 0,
}

const paginationReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case actionType.SET_PAGINATION_DATA:
            return{
                ...state,
                ...action.value
            }
        case actionType.SET_NR_ADS:
            return{
                ...state,
                nrAds:action.rezultat
            }
        case actionType.RESET_PAGINATION_REDUCER:
            return{
                ...state,
                offset:0,
                currentPage:1,
                nrAds:0,
            }
        case actionType.RESET_PAGE:
            return{
                ...state,
                currentPage: 1,
            }
        default: 
        return state
    }
}

export default paginationReducer