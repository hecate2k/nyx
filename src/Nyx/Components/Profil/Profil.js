import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import useClasses from './profilCss'
import {Box,Button} from '@material-ui/core'
import { ProfilHeader,ProfilList, ProfilTitle } from './profilComps'
import {resetLoginData, enqueueSnackbar} from '../../Actions/'
import {Link} from 'react-router-dom'




function Profil(props){
    const classes = useClasses()
    const {resetLoginData,enqueueSnackbar} = props

    const onDoLogout = () => {
        resetLoginData()
        enqueueSnackbar({
            message:'Te-ai delogat cu succes !',
            key: new Date().getTime() + Math.random(),
            options:{
                variant:"success"
            }
        })
        
    }

    return(
        <Box className={classes.ProfileWindow}>
            <ProfilHeader />
            <ProfilTitle title={"Profil si date personale"} />
            <ProfilList />
            <Link className={classes.logOutButtonContainer} to="/">
            <Button onClick={onDoLogout} variant="contained" className={classes.logOutButton}  disableElevation>LOG OUT</Button>
            </Link>
        </Box>
    )  
}

const mapStateToProps = (state) =>{

    return{
    }
}


const mapDispatchToProps = dispatch => (bindActionCreators({
    //actions
    resetLoginData,
    enqueueSnackbar,
},dispatch))

export default connect(mapStateToProps,mapDispatchToProps)(Profil)