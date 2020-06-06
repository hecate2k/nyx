import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import useClasses from './blackBarCss'
import {Box,Button,Modal,Fade, TextField,Grow} from '@material-ui/core'
import { searchIcon } from '../../Images'
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { SelectList } from './blackBarComps'
import Rodal from 'rodal'
import {changeModalStatus,enqueueSnackbar,updateTemp} from '../../Actions'
import {selectModalStatus,selectIsLogged} from '../../Selectors'
import 'rodal/lib/rodal.css'


function BlackBar(props){
    const classes = useClasses()
    const {changeModalStatus, logat,enqueueSnackbar,updateTemp,search} = props
    const [inputStatus, setInputStatus] = React.useState(false)
    const [modalStatus, setModalStatus] = React.useState(false)
    var x  = window.innerWidth - 30
    const openModal = (event) => {
        document.body.classList.add('modal-open')
        setModalStatus(true)
      }
      const hideModal = (event) => {
        document.body.classList.remove('modal-open')
        setModalStatus(false)
      }
      const openUploadModal = () => () => {
        if(logat){
            changeModalStatus(true,'upload')
        }else{
            enqueueSnackbar({
                message:'Trebuie sa fii logat pentru a posta anunturi !',
                key: new Date().getTime() + Math.random(),
                options:{
                    variant:"error"
                }
            })
        }
      }
      const seteazaInputStatus = value => () => {
        setInputStatus(value)
      }
      const changeSearch = e =>{
        updateTemp({search:e.target.value})
      }
    return(
        <>
        <Box className={classes.blackBar}>
            <ClickAwayListener onClickAway={seteazaInputStatus(false)}>
                <Box onClick={seteazaInputStatus(true)} className={[classes.inputContainer,inputStatus?classes.expandedInputContainer:''].join(' ')}>
                    <input onChange={changeSearch} value={search} placeholder="Scrieu aici pentru a cauta ..." className={[classes.inputBar,inputStatus?classes.expandedInput:''].join(' ')} />
                    <img  className={classes.searchIcon} src={searchIcon}/>
                </Box>
            </ClickAwayListener>
            <Box className={classes.selectContainer}>
                <Box onClick={openModal} className={classes.selectItem}>Judet</Box>
                <Box className={classes.selectItem}>Oras</Box>
            </Box>
            
           <Button onClick={openUploadModal()} className={classes.adaugaAnunt} variant="outlined">adauga anunt</Button>
           
        </Box>
      
        <Rodal showCloseButton={false} visible={modalStatus} width={x} height={345} onClose={hideModal}>
            <TextField className={classes.selectListInput} placeholder="Cauta judet"/>
            <SelectList/>
            <Box className={classes.selectListButtons}>
                <Button disableElevation className={classes.listButton} variant="contained">IESI </Button>
                <Button disableElevation className={classes.listButton} variant="contained">SALVEAZA</Button>
            </Box>
        </Rodal>
        </>
    )  
}

const mapStateToProps = (state) =>{
    const dateModal = selectModalStatus(state)

    return{
        isLogged: selectIsLogged(state),
        ...dateModal,
        logat: state.login.isLogged,
        search:state.temporary.search,
    }
}


const mapDispatchToProps = dispatch => (bindActionCreators({
    //actions
    changeModalStatus,
    updateTemp,
    enqueueSnackbar
},dispatch))

export default connect(mapStateToProps,mapDispatchToProps)(BlackBar)