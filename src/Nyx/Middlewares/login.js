import {actionType} from '../Utils'

export default function loginMiddleware({dispatch,getState}){
    return function(next){
        return function(action){
            //verificari care se fac inainte sa ajunga comanda la store
            if(action.type === actionType.TRY_LOGIN){

                let error = false
                const email = getState().login.email
                const password = getState().login.password
                const errors = getState().login.errors

                if(errors.password || errors.email)
                    dispatch({type:actionType.RESET_LOGIN_ERRORS})

                if(email.length < 5) {
                     dispatch({type:actionType.SET_LOGIN_ERROR,error:'email'})
                     error = true
                }
                   
                if(password.length < 6){
                    dispatch({type:actionType.SET_LOGIN_ERROR,error:'password'})
                    error = true
                }
                
                if(error)
                    return

            }
            
            next(action)
            
            //verificari dupa ce sa trimis la store
        }
    }
}
