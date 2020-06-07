import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import useClasses from '../profilCss'
import {Box} from '@material-ui/core'
import ProfilListElement from './ProfilListElement'
import {profilListItems} from '../../../Utils'
import {selectLoginData} from '../../../Selectors'
import {userIcon, phoneIcon, emailIcon, passwordIcon} from '../../../Images'
import {setProfileSelected,tryProfileUpdate,updateTemp} from '../../../Actions'
import Dialog from '@material-ui/core/Dialog';
import Zoom from '@material-ui/core/Zoom';
import Button from '@material-ui/core/Button';

function ProfilList(props){
    const classes = useClasses()
    const {loginData,setProfileSelected,selected,tryProfileUpdate,nume,updateTemp} = props
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
      };
      const resetTempProfile = () =>{
        updateTemp({profileTemp:''})
    }
      const handleClose = () => {
        setOpen(false)
        resetTempProfile()
      };

    const renderListaProfil = ()  =>  (
        profilListItems.map(({text,icon,label}, index) => (
            <ProfilListElement text={text} icon={icon} label={label} key={index}/>
          ))
    )

    const setSelected = value => () => {
        setProfileSelected(value)
        handleClickOpen()
        console.log(value.toLowerCase());
    }

    const doUpdate = () => {
        tryProfileUpdate()
        console.log("i was clicked");
        handleClose()
    }

    const updateTempValue = () => e =>{
        updateTemp({profileTemp:e.target.value})
    }
    return(
        <Box className={classes.profileList}>
            <ProfilListElement onClick={setSelected('Nume')} text={loginData.nume} label="Nume" icon={userIcon}/>
            <ProfilListElement onClick={setSelected('Prenume')} text={loginData.prenume} label="Prenume" icon={userIcon}/>
            <ProfilListElement onClick={setSelected('Judet')} text={loginData.judet} label="Judet" icon={userIcon}/>
            <ProfilListElement onClick={setSelected('Oras')} text={loginData.oras} label="Oras" icon={userIcon}/>
            <ProfilListElement onClick={setSelected('Adresa')} text={loginData.adresa} label="Adresa" icon={userIcon}/>
            <ProfilListElement onClick={setSelected('Telefon')} text={loginData.telefon} label="Telefon" icon={phoneIcon}/>
            <ProfilListElement onClick={setSelected('Email')} text={loginData.email} label="Email" icon={emailIcon}/>
            <ProfilListElement onClick={setSelected('Parola')} text={"••••••••••••••••"} label="Parola" icon={passwordIcon}/>
            {/* {
                renderListaProfil()
            } */}
           
            <Dialog fullWidth={true} maxWidth={false} open={open && selected!=''}  onClose={handleClose} TransitionComponent={Zoom} className={classes.profileModal}>
                <Box className={classes.profileModalBox}>
                    {selected === 'Nume' || selected === 'Prenume' || selected === 'Email' || selected === 'Oras'  || selected === 'Judet'
                    ? 
                    "Va rugam sa introduceti noul " + selected.toLowerCase()
                    : selected === 'Telefon' ? "Noul numar de " + selected.toLowerCase() : "Noua " + selected.toLowerCase()
                    }
                    <input onChange={updateTempValue()} value={nume} autoFocus/>
                    <Box className={classes.profileModalButtons}>
                        <Button onClick={handleClose} variant="contained">Cancel</Button>
                        <Button onClick={doUpdate} variant="contained">Salveaza</Button>
                    </Box>
                    

                </Box>
            </Dialog>
        </Box>
    )  
}

const mapStateToProps = (state) =>{

    return{
        loginData: selectLoginData(state),
        selected: state.temporary.profileSelected ,
        nume: state.temporary.profileTemp
    }
}


const mapDispatchToProps = dispatch => (bindActionCreators({
    //actions
    setProfileSelected,
    tryProfileUpdate,
    updateTemp
},dispatch))

export default connect(mapStateToProps,mapDispatchToProps)(ProfilList)