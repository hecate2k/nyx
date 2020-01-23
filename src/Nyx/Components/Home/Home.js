import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import useClasses from './homeCss'
import {Box, Modal, Backdrop, Fade, Badge} from '@material-ui/core'
import { selectLoginData, selectLoginErrors } from '../../Selectors'
import { updateLoginValue, doLogin } from '../../Actions'
import {bannerHome, xIcon, testImage} from '../../Images'
import Header from '../Header'
import AnuntMic from '../AnuntMic'
import Scrollbar from "react-scrollbars-custom";


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
                            <div className={classes.modalHeader}>
                                <div className={classes.modalAvatarInfo}>
                                    <img src={testImage} />
                                    <Box className={classes.modalInfoText}>
                                        <p className={classes.modalInfoNume}>
                                            {"Aurora"}{" Lee"}
                                        </p>
                                        <p className={classes.modalInfoLocatie}>
                                            {"alba"},{"alba iulia"}
                                        </p>
                                    </Box>
                                </div>
                                    <img onClick={handleClose} src={xIcon}/>
                            </div>
                            <Box className={classes.priceCategory}>
                                <div className={classes.modalPret}>
                                    {"300"}{"lei"}
                                </div>
                                <div className={classes.modalCategorie}>
                                    {"Auto Moto"}
                                </div>
                            </Box>
                            <div className={classes.modalAttributes}>
                                <div className={classes.modalAttribute}>
                                    <div className={classes.modalAttributeTitle} style={{borderTopLeftRadius:'4px',color:'#f35'}}>
                                        {"Brand"}
                                    </div>
                                    <div className={classes.modalAttributeTitle} style={{borderBottomLeftRadius:'4px'}}>
                                        {"Stare"}
                                    </div>
                                </div>
                                <div className={classes.modalAttribute} style={{width: '100%'}}>
                                    <div className={classes.modalAttributeText} style={{borderBottom:'1px solid rgba(42,42,42,.15)',color:'#f35'}}>
                                        {"Lectus quis tincidunt"}
                                    </div>
                                    <div className={classes.modalAttributeText}>
                                        {"Donecc nibh magna"}
                                    </div>
                                </div>
                            </div>
                            <p className={classes.modalTitluAnunt}>
                                {"Integet neque felis, vegicula non tempor"}
                            </p>
                            <Box className={classes.modalImages}>
                                <div className={classes.modalImagesBadge}>{"+1"}</div>
                                <img src={testImage} />
                                <img src={testImage} />
                                <img src={testImage} />
                            </Box>
                            <p className={classes.modalTitluDescriere}>
                                {"Descriere produs"}
                            </p>
                            <Scrollbar className={classes.modalDescriereText}>
                                {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a dolor non leo mattis porta. Quisque quis risus vestibulum, viverra velit eu, ultricies dolor. Donec sagittis et elit at efficitur. Donec euismod metus et tempor luctus. Integer nunc arcu, eleifend a ornare vel, varius vel sem. Sed volutpat libero arcu, a pharetra mi aliquet a. Nunc ac vulputate lacus, efficitur posuere nulla. Integer lacinia in lorem in imperdiet. In porta vestibulum metus, nec suscipit enim accumsan vitae. Proin a fringilla diam. Quisque elementum, turpis eu semper fermentum, elit nulla pharetra sapien, at ullamcorper metus sapien quis velit."}
                                {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a dolor non leo mattis porta. Quisque quis risus vestibulum, viverra velit eu, ultricies dolor. Donec sagittis et elit at efficitur. Donec euismod metus et tempor luctus. Integer nunc arcu, eleifend a ornare vel, varius vel sem. Sed volutpat libero arcu, a pharetra mi aliquet a. Nunc ac vulputate lacus, efficitur posuere nulla. Integer lacinia in lorem in imperdiet. In porta vestibulum metus, nec suscipit enim accumsan vitae. Proin a fringilla diam. Quisque elementum, turpis eu semper fermentum, elit nulla pharetra sapien, at ullamcorper metus sapien quis velit."}
                            </Scrollbar>
                            <Box className={classes.modalNrTelefon}>
                                {"0760548262"}
                            </Box>
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