import { actionType } from "../Utils";

export const updateLoginValue = data => ({type:actionType.UPDATE_LOGIN_DATA,data})
export const doLogin = () => ({type:actionType.TRY_LOGIN})
export const changeModalStatus = (status, modal) => ({type:actionType.CHANGE_MODAL_STATUS,status, modal})
export const updateSignupValue = data => ({type:actionType.UPDATE_SIGNUP_DATA,data})
export const doSignupClean = () => ({type:actionType.RESET_SIGNUP_REDUCER})