import {actionType} from '../Utils'

export default function temporaryMiddleware({dispatch,getState}){
    return function(next){
        return function(action){
            //verificari care se fac inainte sa ajunga comanda la store
            if(action.type === actionType.ADD_IMAGE){
                if(action.imagine === undefined){
                    return
                }else{
                    dispatch({type:actionType.ENQUEUE_SNACKBAR,notification:{
                        message: 'Imaginea a fost adaugata cu success !',
                        key: new Date().getTime() + Math.random(),
                        options: {
                            variant: 'success'
                        },
                    }})
                    dispatch({type:actionType.RESET_TEMPORARY_REDUCER})
            }
                    
            }


            if(action.type === actionType.TRY_IMAGE_UPLOAD){
                const imageType = getState().temporary.selectedFile.type
                const jpeg = imageType.includes('jpeg')
                const jpg = imageType.includes('jpg')
                const png = imageType.includes('png')
                const any = jpeg || jpg || png
                
                if(!any){
                    dispatch({type:actionType.ENQUEUE_SNACKBAR,notification:{
                        message: 'Tipul de imagine nu este permis !',
                        key: new Date().getTime() + Math.random(),
                        options: {
                            variant: 'error'
                        },
                    }})
                    dispatch({type:actionType.RESET_TEMPORARY_REDUCER})
                    return
                }

            }
            
            next(action)
            //verificari dupa ce sa trimis la store
        }
    }
}
