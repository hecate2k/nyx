import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import useClasses from './modaleCss'
import {xIcon,loginIllustration, userIcon, passwordIcon, signupIllustration} from '../../Images'
import {Box, TextField,InputAdornment,Button} from '@material-ui/core'
import Scrollbar from "react-scrollbars-custom";

function ContinutModalLogin(props){
    const classes = useClasses()
    return(
        // <Box className={classes.modalContainer}>
        <>
            <img className={classes.ilustratieLogin} src={signupIllustration}/>
            <p className={classes.modalTitle}>
                SIGN<span>UP</span>
            </p>
            <TextField
                className={classes.inputLogin} label="Email" InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <img src={userIcon} />
                    </InputAdornment>
                ),}} />
            <TextField className={classes.inputLogin} label="Password" type="password" InputProps={{
            startAdornment: (
                <InputAdornment position="start">
                    <img src={passwordIcon} />
                </InputAdornment>
                ),
                }} />
            <TextField className={classes.inputLogin} label="Repeat password" type="password" InputProps={{
            startAdornment: (
                <InputAdornment position="start">
                    <img src={passwordIcon} />
                </InputAdornment>
                ),
                }} />
            <Button className={classes.loginButton} variant="contained" disableElevation>CREAZA CONT</Button>
            <div className={classes.bottomInfo}>
                <p>Ai deja cont? <span> LOG IN </span></p>
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