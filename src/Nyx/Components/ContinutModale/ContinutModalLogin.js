import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import useClasses from './modaleCss'
import {xIcon,loginIllustration, userIcon, passwordIcon, emailIcon} from '../../Images'
import {Box, TextField,InputAdornment,Button,Grow, Input} from '@material-ui/core'
import {updateLoginValue, doLogin } from '../../Actions'
import {selectLoginData} from '../../Selectors'

function ContinutModalLogin(props){
    const classes = useClasses()

    const {emailError,passwordError,tempEmail,isLoading, updateLoginValue,doLogin } = props
    console.log("tempEmail:",tempEmail);
    
    return(
        // <Box className={classes.modalContainer}>
        <>
        <Box className={classes.loginHeader}>
            <p className={[classes.modalTitle,classes.activeLoginTab].join(' ')}>
                LOG<span>IN</span>
                <span className={classes.redUnderline}></span>
            </p>
            <p className={classes.modalTitle}>
                SIGNUP
            </p>
        </Box>
        <Box className={classes.loginContent}>
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
                    <Input onChange={e => updateLoginValue({email:e.target.value})} placeholder="example.email@gmail.com" className={classes.loginInput} disableUnderline />
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
                    <Input onChange={e => updateLoginValue({password:e.target.value})} type="password" placeholder="••••••••••••" className={classes.loginInput} autoFocus={true} disableUnderline />
                </Box>
            </Box>
        </Box>
        <Box className={classes.loginFooter}>
            <Button onClick={props.handleClose} className={classes.cancelButton} variant="contained" disableElevation>Inchide</Button>
            <Button onClick={() => !isLoading ? doLogin() : null} className={classes.loginButton} variant="contained" disableElevation >Log in</Button>           
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
    }
}


const mapDispatchToProps = dispatch => (bindActionCreators({
    updateLoginValue,
    doLogin,
    //actions
},dispatch))

export default connect(mapStateToProps,mapDispatchToProps)(ContinutModalLogin)