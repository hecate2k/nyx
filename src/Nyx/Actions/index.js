import { actionType } from "../Utils";
import { act } from "react-dom/test-utils";



export const enqueueSnackbar = (notification) => {
    const key = notification.options && notification.options.key;
    console.log("notification:",notification);
    
    return {
        type: actionType.ENQUEUE_SNACKBAR,
        notification: {
            ...notification,
            key: key || new Date().getTime() + Math.random() || [],
        },
    };
};

export const closeSnackbar = key => ({
    type: actionType.CLOSE_SNACKBAR,
    dismissAll: !key, // dismiss all if no key has been defined
    key,
});

export const removeSnackbar = key => ({
    type: actionType.REMOVE_SNACKBAR,
    key,
});




export const updateLoginValue = data => ({type:actionType.UPDATE_LOGIN_DATA,data})
export const doLogin = () => ({type:actionType.TRY_LOGIN})
export const doSignup = () => ({type:actionType.TRY_SIGNUP})
export const changeModalStatus = (status, modal) => ({type:actionType.CHANGE_MODAL_STATUS,status, modal})
export const updateSignupValue = data => ({type:actionType.UPDATE_SIGNUP_DATA,data})
export const doSignupClean = () => ({type:actionType.RESET_SIGNUP_REDUCER})
export const getAnunturi = (preluate,sarite) => ({type:actionType.GET_ANUNTURI,preluate,sarite})
export const setAnuntId = (anuntId) => ({type:actionType.SET_ANUNT_ID,anuntId})
export const setLoginData = value => ({type: actionType.SET_LOGIN_DATA, value})
export const uploadImage = () => ({type:actionType.TRY_IMAGE_UPLOAD})
export const setImageLoading = (status) => ({type:actionType.SET_IMAGE_UPLOAD_LOADING,status})
export const setUploadedFile = (file,imageType ) => ({type:actionType.SET_SELECTED_FILE,file,imageType})
export const setAvatar = (avatar) => ({type:actionType.SET_AVATAR,avatar})
export const setCover = (cover) => ({type:actionType.SET_COVER,cover})
export const setBlobAvatar = () => ({type:actionType.SET_BLOB_AVATAR})
export const setBlobCover = () => ({type:actionType.SET_BLOB_COVER})
export const resetBlob = () => ({type:actionType.RESET_BLOB})
export const resetLoginData = () => ({type:actionType.RESET_LOGIN_REDUCER})
export const resetAnunturi = () => ({type:actionType.RESET_ANUNTURI})
export const setClickedId = (clickedId) => ({type:actionType.SET_CLICKED_ID,clickedId})
export const setProfileSelected = selected => ({type:actionType.SET_PROFILE_SELECTED,selected})
export const tryProfileUpdate = () => ({type:actionType.TRY_PROFILE_UPDATE})
export const updateTemp = data => ({type:actionType.UPDATE_TEMP_DATA, data})


//UPLOAD REDUCER

export const addImage = imagine => ({type:actionType.ADD_IMAGE,imagine})
export const removeImage = index => ({type:actionType.REMOVE_IMAGE,index})
export const setUploadData = value => ({type: actionType.SET_UPLOAD_DATA, value})
export const openMeniu = meniu => ({type:actionType.OPEN_MENIU,meniu})
export const closeMeniu = () => ({type:actionType.CLOSE_MENIU})
export const resetUpload = () => ({type:actionType.RESET_UPLOAD_REDUCER})
export const tryUpload = () => ({type:actionType.TRY_UPLOAD_ANUNT})


//PAGINATION REDUCER

export const setPaginationValue = (value) => ({type:actionType.SET_PAGINATION_DATA, value})
export const resetPagination = () => ({type:actionType.RESET_PAGINATION_REDUCER})
export const getNrAnunturi = (categorie) => ({type:actionType.GET_NR_ANUNTURI,categorie})
export const setNrAds = (rezultat) => ({type:actionType.SET_NR_ADS,rezultat})
export const resetPage = () => ({type:actionType.RESET_PAGE})
//GET ANUNTURI CATEGORIE

// export const getAnunturiCategorie = (preluate,sarite,categorie) => ({type:actionType.GET_ANUNTURI_CATEGORIE,preluate,sarite,categorie})
export const getAnunturiCategorie = () => ({type:actionType.GET_ANUNTURI_CATEGORIE})
export const setAD = (upType,upValue,idAnunt) => ({type:actionType.SET_DELETED_ARCHIVED, upType, upValue,idAnunt})