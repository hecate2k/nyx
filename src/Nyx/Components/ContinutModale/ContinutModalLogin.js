import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import useClasses from './modaleCss'
import {xIcon,loginIllustration, userIcon, passwordIcon} from '../../Images'
import {Box, TextField,InputAdornment,Button} from '@material-ui/core'

function ContinutModalLogin(props){
    const classes = useClasses()
    return(
        // <Box className={classes.modalContainer}>
        <>
            <img className={classes.ilustratieLogin} src={loginIllustration}/>
            <p className={classes.modalTitle}>
                LOG<span>IN</span>
            </p>
            <TextField
                className={classes.inputLogin}
                id="input-with-icon-textfield"
                label="Email"
                InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <img src={userIcon} />
                    </InputAdornment>
                ),
                }}
            />
            <TextField
            className={classes.inputLogin}
            id="input-with-icon-textfield"
            label="Password"
            type="password"
            InputProps={{
            startAdornment: (
                <InputAdornment position="start">
                    <img src={passwordIcon} />
                </InputAdornment>
                ),
                }}
            />
            <Button className={classes.loginButton} variant="contained" disableElevation>LOG IN</Button>
            <div className={classes.bottomInfo}>
                <p>Ai uitat parola ?</p>
                <p>Nu ai cont? <span> SIGN UP </span></p>
            </div>
        {/* </Box> */}
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

export default connect(mapStateToProps,mapDispatchToProps)(ContinutModalLogin)