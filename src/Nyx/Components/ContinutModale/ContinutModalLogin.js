import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import useClasses from './modaleCss'
import {xIcon,loginIllustration, userIcon, passwordIcon, emailIcon} from '../../Images'
import {Box, TextField,InputAdornment,Button,Grow, Input} from '@material-ui/core'
import {updateLoginValue, doLogin, updateSignupValue,doSignup } from '../../Actions'
import {selectLoginData} from '../../Selectors'

function ContinutModalLogin(props){
    const classes = useClasses()

    const {modalTemp,emailError,passwordError,tempEmail, updateLoginValue,doLogin,doSignup,updateSignupValue } = props
    const [modalTip, setModalTip] = React.useState(modalTemp);
    
    const handleChangeTip = value => () => {
        setModalTip(value);
    };
    const seteazaSignupValue = tip => e => {
        updateSignupValue({[tip]:e.target.value})
    }
    const seteazaUploadValue = tip => e => {
        updateLoginValue({[tip]:e.target.value})
    }
    const incearcaLogin = () => () => {
        doLogin()
    }
    const incearcaSignup = () => () => {
        doSignup()
    }
    return(
        // <Box className={classes.modalContainer}>
        <>
        <Box className={classes.loginHeader}>
            <p onClick={handleChangeTip('login')} className={modalTip === 'login' ? [classes.modalTitle,classes.activeLoginTab].join(' ') : classes.modalTitle}>
                LOG<span>IN</span>
                {modalTip === 'login' && <span className={classes.redUnderline}></span>}
            </p>
            <p onClick={handleChangeTip('signup')} className={modalTip === 'signup' ? [classes.modalTitle,classes.activeLoginTab].join(' ') : classes.modalTitle}>
                SIGN<span>UP</span>
                {modalTip === 'signup' && <span className={classes.redUnderline}></span>}
            </p>
        </Box>
        <Box className={classes.loginContent}>
            {modalTip === 'signup' &&
                <Box className={classes.inputContainer}>
                    <img className={classes.inputIcon} src={emailIcon}/>
                    <Box className={classes.inputBox}>
                        <Box className={classes.labelBox}>
                            Nume
                            {emailError && 
                            <Grow in={emailError}>
                                <Box className={classes.errorBullet}>
                                </Box>
                            </Grow>
                            }
                        </Box>
                        <Input onChange={seteazaSignupValue('nume')} placeholder="tataru" className={classes.loginInput} disableUnderline />
                    </Box>
                </Box>
            }
            {modalTip === 'signup' &&
                <Box className={classes.inputContainer}>
                    <img className={classes.inputIcon} src={emailIcon}/>
                    <Box className={classes.inputBox}>
                        <Box className={classes.labelBox}>
                            Prenume
                            {emailError && 
                            <Grow in={emailError}>
                                <Box className={classes.errorBullet}>
                                </Box>
                            </Grow>
                            }
                        </Box>
                        <Input onChange={seteazaSignupValue('prenume')} placeholder="andrei" className={classes.loginInput} disableUnderline />
                    </Box>
                </Box>
            }
            <Box className={classes.inputContainer}>
                <img className={classes.inputIcon} src={emailIcon}/>
                <Box className={classes.inputBox}>
                    <Box className={classes.labelBox}>
                        Email
                        {emailError && 
                        <Grow in={emailError}>
                            <Box className={classes.errorBullet}>
                            </Box>
                        </Grow>
                        }
                    </Box>
                    <Input onChange={modalTip === 'login' ? seteazaUploadValue('email') : seteazaSignupValue('email')} placeholder="example.email@gmail.com" className={classes.loginInput} disableUnderline />
                </Box>
            </Box>
            <Box className={classes.inputContainer}>
                <img className={classes.inputIcon} src={passwordIcon}/>
                <Box className={classes.inputBox}>
                    <Box className={classes.labelBox}>
                        Parola
                        {passwordError && 
                        <Grow in={passwordError}>
                            <Box className={classes.errorBullet}>
                            </Box>
                        </Grow>
                        }
                    </Box>
                    <Input onChange={modalTip === 'login' ? seteazaUploadValue('password') : seteazaSignupValue('password')} type="password" placeholder="••••••••••••" className={classes.loginInput} autoFocus={true} disableUnderline />
                </Box>
            </Box>
        </Box>
        <Box className={classes.loginFooter}>
            <Button onClick={props.handleClose} className={classes.cancelButton} variant="contained" disableElevation>Inchide</Button>
            <Button onClick={modalTip === 'login' ? incearcaLogin() : incearcaSignup()} className={classes.loginButton} variant="contained" disableElevation >
                {modalTip === 'login' ? "Log in" : "Sign up"}
            </Button>           
        </Box>
            
        {/* </Box> */}
        </>
    )  
}

const mapStateToProps = (state) =>{
    const data = selectLoginData(state)
    return{
        ...data,
        tempEmail:state.temporary.email,
        emailError: state.temporary.errors.email,
        passwordError: state.temporary.errors.password,
        modalTemp: state.temporary.modal
    }
}


const mapDispatchToProps = dispatch => (bindActionCreators({
    updateLoginValue,
    doLogin,
    updateSignupValue,
    doSignup,
    //actions
},dispatch))

export default connect(mapStateToProps,mapDispatchToProps)(ContinutModalLogin)