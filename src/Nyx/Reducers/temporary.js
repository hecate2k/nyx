import { actionType } from '../Utils'

const INITIAL_STATE = {
    modalStatus:false,
    modal:'',
    anuntId: -1,
    email: '',
    password: '',
    imageType: '',//daca e imagine de cover sau de profil
    errors:{
        email: false,
        password: false,
    },
    isLoading: false,
    selectedFile: {},
    imageLoading: false,
    blobAvatar:false,
    blobCover:false,
    clickedId:-1,
    profileSelected:'',
    profileTemp:'',
    profileLoading:false,
    search:'',
    didUpdate: false,
}

const temporaryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case actionType.SET_CLICKED_ID:
            return{
                ...state,
                clickedId:action.clickedId
            }
        case actionType.SET_PROFILE_SELECTED:
            return{
                ...state,
                profileSelected:action.selected
            }
        case actionType.SET_BLOB_COVER:
            return{
                ...state,
                blobCover:true
            }
        case actionType.RESET_BLOB:
            return{
                ...state,
                blobAvatar:false,
                blobCover:false,
            }
        case actionType.SET_IMAGE_UPLOAD_LOADING:
            return{
                ...state,
                imageLoading:action.status
            }
        case actionType.SET_UPDATE_PROFILE_LOADING:
            return{
                ...state,
                profileLoading:action.status
            }
        case actionType.SET_SELECTED_FILE:{
            return{
                ...state,
                selectedFile:action.file,
                imageType:action.imageType,
            }
        }
        case action.SET_IMAGE_TYPE:
            return{
                ...state,
                isAvatar:action.isAvatar
            }
        case actionType.CHANGE_MODAL_STATUS:
            return{
                ...state,
                modalStatus:action.status,
                modal:action.modal
            }
        case actionType.UPDATE_TEMP_DATA:
            return{
                ...state,
                ...action.data
            }
            case actionType.UPDATE_LOGIN_DATA:
                return{
                    ...state,
                    ...action.data
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
        case actionType.SET_ANUNT_ID:
            return{
                ...state,
                anuntId:action.anuntId
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