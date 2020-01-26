import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import useClasses from './blackBarCss'
import {Box,Button,Modal,Fade, TextField} from '@material-ui/core'
import { searchIcon } from '../../Images'
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { SelectList } from './blackBarComps'


function BlackBar(props){
    const classes = useClasses()
    const [inputStatus, setInputStatus] = React.useState(false)
    const [modalStatus, setModalStatus] = React.useState(false)

    return(
        <>
        <Box className={classes.blackBar}>
            <ClickAwayListener onClickAway={() => setInputStatus(false)}>
                <Box onClick={() => setInputStatus(true)} className={[classes.inputContainer,inputStatus?classes.expandedInputContainer:''].join(' ')}>
                    <input placeholder="Scrie aici pentru a cauta ..." className={[classes.inputBar,inputStatus?classes.expandedInput:''].join(' ')} />
                    <img  className={classes.searchIcon} src={searchIcon}/>
                </Box>
            </ClickAwayListener>
            <Box className={classes.selectContainer}>
                <Box onClick={() => setModalStatus(true)} className={classes.selectItem}>Judet</Box>
                <Box className={classes.selectItem}>Oras</Box>
            </Box>
            
           <Button className={classes.adaugaAnunt} variant="outlined">adauga anunt</Button>
           
        </Box>
        <Modal className={classes.modal} open={modalStatus} onClose={() => setModalStatus(false)} >
            <Fade in={modalStatus}>
                <div className={classes.paper}>
                    <TextField className={classes.selectListInput} placeholder="Cauta judet"/>
                    <SelectList></SelectList>
                    <Box className={classes.selectListButtons}>
                        <Button disableElevation className={classes.listButton} variant="contained">IESI </Button>
                        <Button disableElevation className={classes.listButton} variant="contained">SALVEAZA</Button>
                    </Box>
                </div>
            </Fade>
        </Modal>
        </>
    )  
}

const mapStateToProps = (state) =>{

    return{
    }
}


const mapDispatchToProps = dispatch => (bindActionCreators({
    //actions
},dispatch))

export default connect(mapStateToProps,mapDispatchToProps)(BlackBar)