import {createSelector} from 'reselect'
import { ModalManager } from '@material-ui/core'

//slectori pt reducer login

export const selectLoginData = createSelector(
    state => state.login,
    userData => {
        return{
            email:userData.email,
            password:userData.password,
            isLoading:userData.isLoading,
            isLogged:userData.isLogged
        }
    }
)

export const selectSignupData = createSelector(
    state => state.login,
    userData => {
        return{
            email:userData.email,
            password:userData.isLoading,
            repeatPassword:userData.isLogged
        }
    }
)

export const selectLoginErrors = createSelector(
    state => state.login.errors,
    loginError => loginError
)

export const selectModalStatus = createSelector(
    state => state.temporary,
    modalData => {
        return{
            modalStatus:modalData.modalStatus,
            modal:modalData.modal,
        }
    }
)

export const selectAnunturi = createSelector(
    state => state.anunturi,
    anunturi =>{
        return{
            anunturi:anunturi.anunturi,
        }
    }
)