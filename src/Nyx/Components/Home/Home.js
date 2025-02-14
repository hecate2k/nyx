import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import useClasses from './homeCss'
import {Box, Modal, Backdrop, Fade} from '@material-ui/core'
import { selectLoginData, selectLoginErrors } from '../../Selectors'
import { updateLoginValue, doLogin ,changeModalStatus} from '../../Actions'
import {bannerNelogat, bannerLogat} from '../../Images'
import {Header} from '../Header'
import Footer from '../Footer'
import ContinutHome from './homeComps'

function Login(props){
    const classes = useClasses()
    const {logat,changeModalStatus} = props
    const banner = logat ? bannerLogat : bannerNelogat
    const modal = logat ? 'upload' : 'signup'
    const openModal = (numeModal) => event => {
        changeModalStatus(true,numeModal)
    }  
    return(
        <Box className={classes.homeWindow}>
            <Header />

            <div  className={classes.bannerHome}>
                <img onClick={openModal(modal)} src={banner} alt="" />
            </div>
            <ContinutHome />
            
            <Footer/>
        </Box>
    )  
}

const mapStateToProps = (state) =>{

    return{
        data: selectLoginData(state),
        errors: selectLoginErrors(state),
        logat: state.login.isLogged
    }
}


const mapDispatchToProps = dispatch => (bindActionCreators({
    //actions
    updateLoginValue,
    doLogin,
    changeModalStatus,
},dispatch))

export default connect(mapStateToProps,mapDispatchToProps)(Login)