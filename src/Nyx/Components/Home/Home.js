import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import useClasses from './homeCss'
import Box from '@material-ui/core/Box'
import { selectLoginData, selectLoginErrors } from '../../Selectors'
import { updateLoginValue, doLogin } from '../../Actions'
import {bannerHome,testImage , shareIcon, heartIcon} from '../../Images'

function Login(props){
    const classes = useClasses()

    const { email, password, isLoading } = props.data
    const { errors,updateLoginValue,doLogin } = props

    return(
        <Box>
            <div className={classes.header}>
                <div className={classes.headerMenuButton}></div>
                <div className={classes.butoaneHeaderDreapta}>
                    <div className={classes.butonFilledAlb}>INTRA IN CONT</div>
                    <div className={classes.butonBorderAlb}>CREAZA CONT</div>
                </div>
            </div>

            <div className={classes.subHeaderLogo}>SESSAM</div>

            <div className={classes.blackMenuBar}>
                <div className={classes.searchInput}>
                    
                </div>
                <div>Judet</div>
            </div>

            <div className={classes.bannerHome}>
                <img src={bannerHome} alt="" />
            </div>

            <div className={classes.homeAnunturi}>
                <div className={classes.anunturiHeader}>
                    Cele mai cautate
                    <div className={classes.butonFilledRosu}>ARATALE PE TOATE</div>
                </div>
                <div className={classes.anunturiCards}>
                    <div className={classes.homeCard}>
                        <img src={testImage} alt="" />
                        <div className={classes.homeCardTitlu}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque lectus ligula, ac pulvinar ipsum consequat a. 
                        </div>
                        <div className={classes.footerCard}>
                            <div className={classes.pretCard}>300 lei</div>
                            <div className={classes.favoriteCard}>
                                <img src={heartIcon} alt="" />
                            </div>
                            <div className={classes.shareCard}>
                                <img src={shareIcon} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Box>
    )  
}

const mapStateToProps = (state) =>{

    return{
        data: selectLoginData(state),
        errors: selectLoginErrors(state),
    }
}


const mapDispatchToProps = dispatch => (bindActionCreators({
    //actions
    updateLoginValue,
    doLogin,
},dispatch))

export default connect(mapStateToProps,mapDispatchToProps)(Login)