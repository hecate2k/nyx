import {actionType} from '../Utils'

export default function verificariActiuniMiddleware({dispatch,getState}){
    return function(next){
        return function(action){
            //verificari care se fac inainte sa ajunga comanda la store
            // if(action.type === actionType.CHANGE_MODAL_STATUS){
            //     const {modal,modalStatus} = getState().temporary
            //     if(action.modal === modal && action.modalStatus === modalStatus)
            //         return
            //     else if(action.modal === modal && actionType.modalStatus !== modalStatus)
            //         dispatch({type:actionType.CHANGE_MODAL_STATUS,modal:modal,modalStatus:action.modalStatus})
            //     else if(action.modal !== modal && actionType.modalStatus === modalStatus)
            //         dispatch({type:actionType.CHANGE_MODAL_STATUS,modal:action.modal,modalStatus:modalStatus})
            // }
            if(action.type === actionType.SET_PAGINATION_DATA){
                dispatch({type:actionType.UPDATE_TEMP_DATA,data:{search:''}})
            }
            if(action.type === actionType.TRY_UPLOAD_ANUNT){
                
                
                const {pret,categorie,brand,descriere,imagini,moneda,stare,telefon,titlu} = getState().upload
                console.log('AM INTRAT AICI',pret,categorie,brand,descriere,imagini,moneda,stare,telefon,titlu);
                if(pret === 0 || categorie === '' || brand === '' || telefon === '' || titlu === '' || imagini.length === 0 || descriere === ''){
                    dispatch({type:actionType.ENQUEUE_SNACKBAR,notification:{
                        message: 'Campuri incomplete !',
                        key: new Date().getTime() + Math.random(),
                        options: {
                            variant: 'error'
                        },
                    }})
                    return
                }
            }
            next(action)
            //verificari dupa ce sa trimis la store
        }
    }
}
