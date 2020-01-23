import {createSelector} from 'reselect'

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

export const selectLoginErrors = createSelector(
    state => state.login.errors,
    loginError => loginError
)