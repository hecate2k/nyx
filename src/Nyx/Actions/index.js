import { actionType } from "../Utils";

export const updateLoginValue = data => ({type:actionType.UPDATE_LOGIN_DATA,data})
export const doLogin = () => ({type:actionType.TRY_LOGIN})