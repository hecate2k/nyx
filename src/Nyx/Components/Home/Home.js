import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import useClasses from './homeCss'
import {Box, Modal, Backdrop, Fade} from '@material-ui/core'
import { selectLoginData, selectLoginErrors } from '../../Selectors'
import { updateLoginValue, doLogin } from '../../Actions'
import {bannerHome} from '../../Images'
import {Header} from '../Header'
import AnuntMic from '../AnuntMic'
import {ContinutModalAnunt, ContinutModalLogin} from '../ContinutModale'


function Login(props){
    const classes = useClasses()

    const [open, setOpen] = React.useState(true);

    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

    return(
        <Box>
            <Header />
            <div className={classes.subHeaderLogo}>SESSAM</div>

            <div className={classes.blackMenuBar}>
                <div className={classes.searchInput}>
                    
                </div>
                <div>Judet</div>
            </div>

            <div className={classes.bannerHome}>
                <img src={bannerHome} alt="" />
            </div>

            <div className={classes.homeAnunturi}>
                <div className={classes.anunturiHeader}>
                    Cele mai cautate
                    <div className={classes.butonFilledRosu}>ARATALE PE TOATE</div>
                </div>
                <div className={classes.anunturiCards}>
                        <button className={classes.butonModal} onClick={() => handleOpen()}>
                            <AnuntMic/>
                        </button>
                </div>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                    timeout: 500,
                    }}
                >
                    <Fade in={open}>
                        <div className={classes.paper}>
                            {/* <ContinutModalAnunt handleClose={handleClose}/> */}
                            <ContinutModalLogin />
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