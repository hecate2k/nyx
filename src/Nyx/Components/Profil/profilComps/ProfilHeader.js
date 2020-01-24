import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import useClasses from '../profilCss'
import {xIcon,loginIllustration, userIcon, passwordIcon, testImage,cameraIcon, profileBackIcon} from '../../../Images'
import {Box, TextField,InputAdornment,Button, Avatar} from '@material-ui/core'
import Scrollbar from "react-scrollbars-custom"
import Rating from '@material-ui/lab/Rating';

function ProfilHeader(props){
    const classes = useClasses()
    return(
        <>
            <Box className={classes.ProfilHeader}>
                <img className={classes.profileCoverImage} src={testImage} />
                <Box className={classes.backIcon}>
                    <img src={profileBackIcon}/>
                </Box>
                <Button disableElevation variant="contained" className={classes.changeCoverButton}>
                    Schimba
                </Button>
                <div className={classes.modalAvatarInfo}>
                    <Box>
                        <img className={classes.profilAvatar} src={testImage} />
                        <div className={classes.cameraIcon}>
                            <img  src={cameraIcon}/>
                        </div>
                        
                    </Box>
                    <Box className={classes.modalInfoText}>
                        <p className={classes.modalInfoNume}>
                            {"Aurora"}{" Lee"}
                        </p>
                        <p className={classes.modalInfoLocatie}>
                            {"alba"},{"alba iulia"}
                        </p>
                    </Box>
                    <Box className={classes.profilRating}>
                        <Rating name="read-only" defaultValue={2.5}  size="small" readOnly />
                    </Box>
                </div>
                
            </Box>
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

export default connect(mapStateToProps,mapDispatchToProps)(ProfilHeader)