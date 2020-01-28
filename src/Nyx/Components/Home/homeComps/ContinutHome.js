import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import useClasses from '../homeCss'
import {Box, Modal, Fade} from '@material-ui/core'
import { selectModalStatus } from '../../../Selectors'
import { changeModalStatus } from '../../../Actions'
import AnuntMic from '../../AnuntMic'
import {AnuntModal} from '../../ContinutModale'
import Rodal from 'rodal'
import 'rodal/lib/rodal.css'
import uuid from 'react-uuid'

function Login(props){
    const classes = useClasses()
    var modalWidth  = window.innerWidth - 30
    var modalHeight  = window.innerHeight - 30
    const {modalStatus, modal, changeModalStatus} =props
    
    return(
        <Box className={classes.continutHome}>
                    <div className={classes.homeAnunturi}>
                        <div className={classes.anunturiHeader}>
                            Cele mai cautate
                            <div className={classes.butonFilledRosu}>ARATALE PE TOATE</div>
                        </div>
                        <div className={classes.anunturiCards}>
                            {
                                Array(~~(10)).fill(0).map( ()=> <AnuntMic key={uuid()} onClick={() => changeModalStatus(true,'anunt')}/>)
                            }
                        </div>
                    </div>
                    <div className={classes.homeAnunturi}>
                        <div className={classes.anunturiHeader}>
                            Cele mai cautate
                            <div className={classes.butonFilledRosu}>ARATALE PE TOATE</div>
                        </div>
                        <div className={classes.anunturiCards}>
                            {
                                Array(~~(10)).fill(0).map( ()=> <AnuntMic key={uuid()} onClick={() => changeModalStatus(true,'anunt')}/>)
                            }
                        </div>
                    </div>
                    <Box className={classes.homeStatsBox}>
                        <p className={classes.homeNrAnunturi}><span>124</span> anunturi postate in total</p>
                    </Box>
                    <Rodal width={modalWidth}  height={modalHeight} visible={modalStatus && modal === 'anunt'} onClose={() => changeModalStatus(false,'')}>
                        <AnuntModal/>
                    </Rodal>
            </Box>
    )  
}

const mapStateToProps = (state) =>{
    const dateModal = selectModalStatus(state)
    return{
        ...dateModal
    }
}


const mapDispatchToProps = dispatch => (bindActionCreators({
    //actions
    changeModalStatus,
},dispatch))

export default connect(mapStateToProps,mapDispatchToProps)(Login)