import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {bindActionCreators} from 'redux'
import useClasses from './headerCss'
import { Box, Drawer, Button, SwipeableDrawer, Modal, Fade, Grow, Zoom } from '@material-ui/core';
import { selectModalStatus, selectIsLogged } from '../../Selectors'
import { changeModalStatus } from '../../Actions'
import { menuIcon, nixxRedLogo,nixxLogo, questionMark } from '../../Images'
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import {menuItems} from '../../Utils'
import BlackBar from '../BlackBar'
import HeaderFals from './HeaderFals';
import {ContinutModalLogin, SignupModal, AdaugaAnunt} from '../ContinutModale'
import Rodal from 'rodal'
import 'rodal/lib/rodal.css'
import ProfileBadge from './headerComps'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {resetUpload,setPaginationValue} from '../../Actions'

function Header(props){
    const classes = useClasses()

    const {setPaginationValue,resetUpload,isLogged,modalStatus, modal, changeModalStatus} = props
    const [dialogModalMare,setDialogModalMare] = React.useState(false)
    var modalWidth  = window.innerWidth - 30
    var modalHeight  = window.innerHeight - 30
    const inchideDialogMare = () =>{
        setDialogModalMare(false)
        changeModalStatus(false,'')
        resetUpload()
    }
    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;       
        }
        setState({ ...state, [side]: open });   
    }
    
    const sideList = side => (
        <div
            className={classes.drawerLeft}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
          <List>
            {menuItems.map(({text,icon,path}, index) => (
            <Link to={"/anunturi/"+path} onClick={() => setPaginationValue({categorie:text})} key={index}>
              <ListItem  button >
                <ListItemIcon>
                    <img src={icon}/>
                </ListItemIcon>

                <p className={classes.menuItemText} >{text}</p>
              </ListItem>
              </Link>
            ))}
          </List>
          <Divider />
        </div>
      )


    const [state, setState] = React.useState({
        left: false,
      });
    return(
        <>
        <Box className={classes.headerContainer}>
            <div className={classes.header}>
                <Button className={classes.butonMeniu} onClick={toggleDrawer('left', true)}><img src={menuIcon}/></Button>
                <Drawer open={state.left} onClose={toggleDrawer('left', false)} >
                    <Box className={classes.categoriiText}>
                        Categorii
                    </Box>
                    {sideList('left')}
                </Drawer>
                <div className={isLogged ? classes.butoaneHeaderDreapta : classes.butoaneHeaderBox}>
                    {
                        !isLogged ?
                        <>
                            <Button onClick={() => changeModalStatus(true,'login')} className={classes.butoaneHeaderBoxRed} style={{color:'#f35 !important'}} variant="contained" disableElevation>INTRA IN CONT</Button>
                            <Button onClick={() => changeModalStatus(true,'signup')} className={classes.butoaneHeaderBoxWhite}  variant="outlined" disableElevation>CREAZA CONT</Button>
                        </>
                        :<Link to="/" className={classes.headerLinkHome}><img className={classes.logoLinkHome} alt={"logo"} src={nixxLogo}/></Link>
                    }
                    
                </div>
            </div>
            <Box className={classes.headerLogoSection}>
                {
                    !isLogged ?
                    <Link className={classes.headerLogoImage} to="/"><img  alt={"logo"} src={nixxRedLogo}/></Link>
                    :<ProfileBadge/>
                }
                
                {/* <Link className={classes.linkToHome} to="/">
                    <img className={classes.headerLogoImg} src={nixxRedLogo}/>
                </Link> */}
            </Box>
            <BlackBar style={{marginTop: '0px'}}/>
            
        </Box>
        
        <Dialog TransitionComponent={Grow} transitionDuration={350} disableBackdropClick={modal === 'upload' ? true : false}  
        onBackdropClick={() => modal === 'upload' ? setDialogModalMare(true) : changeModalStatus(false,'')} 
        open={modalStatus && (modal === 'login' || modal === 'signup' || modal === 'upload') ? true : false} 
        onClose={() => changeModalStatus(false,modal)}
      >
          <div className={[classes.paperLogin,modal === 'upload' && classes.paper].join(' ')}>
            {
                modal === 'login' ? <ContinutModalLogin handleClose={() => changeModalStatus(false,'')}/>
                : modal === 'signup' ? <SignupModal  handleClose={() => changeModalStatus(false,'')}/>
                : modal === 'upload' && <AdaugaAnunt inchideModalul={() => setDialogModalMare(true)}/>
            }
        </div>
      </Dialog>
        <Dialog open={dialogModalMare} onClose={() => setDialogModalMare(false)}>
            <Zoom in={dialogModalMare}>
                <Box>
                <DialogTitle disableTypography className={classes.dialogModalMareTitle}><img alt="question mark image" src={questionMark}/>{"Esti sigur?"}</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    Daca inchizi fereastra, progresul facut va fi pierdut.
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={() => setDialogModalMare(false)}>
                    Anuleaza
                </Button>
                <Button variant="contained" className={classes.iesiButon} onClick={() => inchideDialogMare()}>
                    Inchide
                </Button>
                </DialogActions>
                </Box>
            </Zoom>
        </Dialog>


        <HeaderFals/>
        
        </>
    )  
}

const mapStateToProps = (state) =>{
    const dateModal = selectModalStatus(state)

    return{
        isLogged: selectIsLogged(state),
        ...dateModal
    }
}


const mapDispatchToProps = dispatch => (bindActionCreators({
    //actions
    changeModalStatus,
    resetUpload,
    setPaginationValue,
},dispatch))

export default connect(mapStateToProps,mapDispatchToProps)(Header)