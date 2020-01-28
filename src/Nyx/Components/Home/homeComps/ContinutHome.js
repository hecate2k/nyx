import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import useClasses from '../homeCss'
import {Box, Modal, Fade} from '@material-ui/core'
import { selectLoginData, selectLoginErrors } from '../../../Selectors'
import { updateLoginValue, doLogin } from '../../../Actions'
import AnuntMic from '../../AnuntMic'
import {AnuntModal} from '../../ContinutModale'
import Rodal from 'rodal'
import 'rodal/lib/rodal.css'


function Login(props){
    const classes = useClasses()
    const [open, setOpen] = React.useState(false);
    var modalWidth  = window.innerWidth - 30
    var modalHeight  = window.innerHeight - 30
    const openModal = (event) => {
        document.body.classList.add('modal-open')
        setOpen(true)
      }
    const hideModal = (event) => {
        document.body.classList.remove('modal-open')
        setOpen(false)
    }


    return(
        <Box className={classes.continutHome}>
                    <div className={classes.homeAnunturi}>
                        <div className={classes.anunturiHeader}>
                            Cele mai cautate
                            <div className={classes.butonFilledRosu}>ARATALE PE TOATE</div>
                        </div>
                        <div className={classes.anunturiCards}>
                                {/* <button className={classes.butonModal} onClick={openModal}> */}
                                    <AnuntMic onClick={openModal}/>
                                {/* </button> */}
                        </div>
                    </div>
                    <Rodal width={modalWidth}  height={modalHeight} visible={open} onClose={hideModal}>
                        <AnuntModal/>
                    </Rodal>
            </Box>
    )  
}

const mapStateToProps = (state) =>{

    return{
        data: selectLoginData(state),
        errors: selectLoginErrors(state),
    }
}


const mapDispatchToProps = dispatch => (bindActionCreators({
    //actions
    updateLoginValue,
    doLogin,
},dispatch))

export default connect(mapStateToProps,mapDispatchToProps)(Login)