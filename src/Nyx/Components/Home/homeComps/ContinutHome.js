import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import useClasses from '../homeCss'
import {Box, Modal, Fade, Button, Grow} from '@material-ui/core'
import { selectAnuntId,selectAnuntData } from '../../../Selectors'
import { getAnunturi,setAnuntId ,addImage,removeImage} from '../../../Actions'
import AnuntMic from '../../AnuntMic'
import CircularProgress from '@material-ui/core/CircularProgress'
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';
import {AnuntModal} from '../../ContinutModale'
import Rodal from 'rodal'
import 'rodal/lib/rodal.css'
import useBeforeFirstRender from '../../../Utils/useBeforeFirstRender'
import {Select, MenuItem} from '@material-ui/core'
import { noData } from '../../../Images'
import Anunt from '../../Anunturi/anunturiComps/Anunt'

function Login(props){
    const classes = useClasses()

    const {getAnunturi, anunturi, isLoading, setAnuntId, anuntId, anunt,len} = props
    var modalWidth  = window.innerWidth - 30
    var modalHeight  = window.innerHeight - 30

    useBeforeFirstRender(() => {
        getAnunturi(10,0)
    })

    const seteazaIdAnunt = id => () => {
        setAnuntId(id)
    }

    let timeout=0
    let decreaseTimeoutBy = 0

    const renderListaAnunturi = (anunturi)  =>  {
        if(!anunturi.length)
            return <Box className={classes.categorieNoData}>
                <img className={classes.noDataImage} src={noData}/>
                <p className={classes.noDataText}>Momentan nu sunt publicate anunturi in aceasta categorie.</p>
            </Box>
        return anunturi.map((date) => {
                timeout += 500 - decreaseTimeoutBy;
                decreaseTimeoutBy +=50;
                return(
                    <Anunt onClick={seteazaIdAnunt(date.id)} timeout={timeout} {...date} key={date.id}/>
                )
            })
    }
    return(
        <Box className={classes.continutHome}>
                    <div className={classes.homeAnunturi}>
                        <div className={classes.anunturiHeader}>
                            Anunturi recente
                        </div>
                        <div className={classes.anunturiCards}>
                        {
                            isLoading?
                            <Box className={classes.loadingCircleBox}><CircularProgress color="secondary" /></Box>
                            :
                            renderListaAnunturi(anunturi||[])
                            
                        }
                        </div>
                    </div>
                    {/* <div className={classes.homeAnunturi}>
                        <div className={classes.anunturiHeader}>
                            Cele mai cautate
                            <div className={classes.butonFilledRosu}>ARATALE PE TOATE</div>
                        </div>
                        <div className={classes.anunturiCards}>
                            {
                                // Array(~~(10)).fill(0).map( ()=> <AnuntMic key={uuid()} onClick={() => changeModalStatus(true,'anunt')}/>)
                            }
                        </div>
                    </div> */}
                    
                    
                    <Box className={classes.homeStatsBox}>
                        <p className={classes.homeNrAnunturi}><span>{len}</span> anunturi postate in total</p>
                    </Box>
                    <Rodal width={modalWidth}  height={modalHeight} visible={anuntId>0} onClose={seteazaIdAnunt(-1)}>
                        <AnuntModal {...anunt}/>
                    </Rodal>
            </Box>
    )  
}

const mapStateToProps = (state) =>{
    return{
        anunt: selectAnuntData(state),
        anuntId: selectAnuntId(state),
        isLoading : state.anunturi.isLoading,
        anunturi: state.anunturi.anunturi,
        len: state.anunturi.nrTotal,
        // nrImagini: state.uploadanunt.imagini.length || 0
    }
}


const mapDispatchToProps = dispatch => (bindActionCreators({
    //actions
    getAnunturi,
    setAnuntId,
    
},dispatch))

export default connect(mapStateToProps,mapDispatchToProps)(Login)