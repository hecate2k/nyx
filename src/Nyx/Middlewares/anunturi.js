import {actionType} from '../Utils'

export default function anunturiMiddleware({dispatch,getState}){
    return function(next){
        return function(action){
            //verificari care se fac inainte sa ajunga comanda la store
            if(action.type === actionType.SET_ANUNT_ID){
                const anuntId = getState().temporary.anuntId
                if(action.anuntId === anuntId)
                    return 

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
