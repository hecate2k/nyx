import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import useClasses from '../homeCss'
import {Box, Modal, Backdrop, Fade} from '@material-ui/core'
import { selectLoginData, selectLoginErrors } from '../../../Selectors'
import { updateLoginValue, doLogin } from '../../../Actions'
import {bannerHome} from '../../../Images'
import {Header} from '../../Header'
import AnuntMic from '../../AnuntMic'
import {ContinutModalAnunt, ContinutModalLogin} from '../../ContinutModale'
import SignupModal from '../../ContinutModale/SignupModal'


function Login(props){
    const classes = useClasses()
    const [open, setOpen] = React.useState(true);

    return(
        <Box className={classes.continutHome}>
                    <div className={classes.homeAnunturi}>
                        <div className={classes.anunturiHeader}>
                            Cele mai cautate
                            <div className={classes.butonFilledRosu}>ARATALE PE TOATE</div>
                        </div>
                        <div className={classes.anunturiCards}>
                                <button className={classes.butonModal} onClick={() => setOpen(true)}>
                                    <AnuntMic/>
                                </button>
                        </div>
                        <Modal className={classes.modal} open={open} onClose={() => setOpen(false)}>
                            <Fade in={open}>
                                <div className={classes.paper}>
                                <SignupModal handleClose={() => setOpen(false)}/>
                                    {/* <ContinutModalAnunt handleClose={() => setOpen(false)}/> */}
                                    {/* <ContinutModalLogin /> */}
                                </div>
                            </Fade>
                        </Modal>
                    </div>
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