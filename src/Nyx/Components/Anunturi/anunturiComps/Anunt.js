import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import useClasses from '../anunturiCss'
import {heartIcon} from '../../../Images'
import {Box} from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'
import { selectModalStatus } from '../../../Selectors'
import { changeModalStatus } from '../../../Actions'
import AnuntMic from '../../AnuntMic'
import {AnuntModal} from '../../ContinutModale'
import Rodal from 'rodal'
import 'rodal/lib/rodal.css'


function Anunt(props){
    const classes = useClasses()
    var modalWidth  = window.innerWidth - 30
    var modalHeight  = window.innerHeight - 30
    const {modalStatus,changeModalStatus,promovat,modal, titlu, avatar,nume,prenume, judet, oras, pret, telefon, vizualizari, rating,imagini} = props
    const dateAnunt = {promovat, titlu, avatar,nume,prenume, judet, oras, pret, telefon, vizualizari, rating,imagini} 
    console.log(imagini[0].nume_poza);
    return(
        <>
            <Box onClick={() => changeModalStatus(true,'anunt')} className={classes.anuntContainer}>
                <Box className={classes.anuntHeader}>
                    {promovat == 1 &&
                        <Box className={classes.anuntPromovat}>
                            promovat
                        </Box> 
                    }
                    <Box className={classes.anuntTitle}>
                        {titlu}
                    </Box>
                </Box>
                <Box className={classes.anuntBody}>
                    <Box className={classes.anuntImagine}>
                        <img src={"http://localhost/nixx/pozeAnunturi/"+imagini[0].nume_poza}/>
                    </Box>
                    <Box className={classes.anuntInfos}>
                        <Box className={classes.sellerInfo}>
                            <img className={classes.sellerAvatar} src={"http://localhost/nixx/pozeAnunturi/"+avatar} />
                            <Box className={classes.sellerBio}>
                                <p className={classes.anuntNumePrenume}>{prenume} {nume}</p>
                                <p className={classes.judetOras}>{judet}, {oras}</p>
                                <Rating className={classes.sellerRating} name="read-only" value={rating} readOnly />
                            </Box>
                        </Box>
                        <Box className={classes.anuntInfoFooter}>
                            <p className={classes.anuntVizualizari}>
                                {vizualizari} vizualizari
                            </p>
                            <Box className={classes.heartPrice}>
                                <img className={classes.heartIcon} src={heartIcon}/>
                                <Box className={classes.anuntPret}>
                                    {pret}
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box className={classes.anuntNumarTelefon}>
                        {telefon}
                </Box>
            </Box>

            <Rodal width={modalWidth}  height={modalHeight} visible={modalStatus && modal === 'anunt'} onClose={() => changeModalStatus(false,'')}>
                <AnuntModal {...dateAnunt}/>
            </Rodal>
        </>
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

export default connect(mapStateToProps,mapDispatchToProps)(Anunt)