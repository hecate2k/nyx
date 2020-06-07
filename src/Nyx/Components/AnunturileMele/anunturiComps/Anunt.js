import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import useClasses from '../../Anunturi/anunturiCss'
import {heartIcon, whiteEdit, whiteArchive, whiteDelete} from '../../../Images'
import {Box, Grow} from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'
import {linkSprePozeAnunturi,linkSprePozeProfil} from '../../../Utils/serverLinks'
import {setClickedId,setAD} from '../../../Actions'

function Anunt(props){
    const classes = useClasses()
    const {archived,setAD,setClickedId,timeout,id,promovat, titlu, avatar,nume,prenume, judet, oras, pret, telefon, vizualizari, rating,imagini} = props
    const doUpdate = (tip,valoare,id) => () => {
        setAD(tip,valoare,id)
    }
    return(
        <>
        <Grow in={true} timeout={props.timeout}>
            <Box  className={classes.anuntContainer}>
                <Box onClick={props.onClick} className={classes.anuntHeader}>
                    {promovat === 1 &&
                        <Box className={classes.anuntPromovat}>
                            promovat
                        </Box> 
                    }
                    <Box className={classes.anuntTitle}>
                        {titlu}
                    </Box>
                </Box>
                <Box onClick={props.onClick} className={classes.anuntBody}>
                    <Box className={classes.anuntImagine}>
                        <img src={(linkSprePozeAnunturi+imagini[0].nume_poza) || ""}/>
                    </Box>
                    <Box className={classes.anuntInfos}>
                        <Box className={classes.sellerInfo}>
                            <img className={classes.sellerAvatar} src={linkSprePozeProfil+avatar} />
                            <Box className={classes.sellerBio}>
                                <p className={classes.anuntNumePrenume}>{prenume} {nume}</p>
                                <p className={classes.judetOras}>{judet}, {oras}</p>
                                <Rating className={classes.sellerRating} name="read-only" value={rating} readOnly />
                            </Box>
                        </Box>
                        <Box className={classes.anuntInfoFooter}>
                            {/* <p className={classes.anuntVizualizari}>
                                {vizualizari} vizualizari
                            </p> */}
                            <Box className={classes.heartPrice}>
                                {/* <img className={classes.heartIcon} src={heartIcon}/> */}
                                <Box className={classes.anuntPret}>
                                    {pret}
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box onClick={props.setId} className={classes.optionBox}>
                    <Box onClick={!archived ? doUpdate("arhivat",1,props.anuntID) : doUpdate("arhivat",0,props.anuntID) } className={classes.option}>
                        <img src={whiteArchive} alt="archive icon"/>
                        {archived ? "Dezarhiveaza" : "Arhiveaza"}
                    </Box>
                    <Box onClick={doUpdate("deleted",1,props.anuntID)} className={classes.option}>
                        <img src={whiteDelete} alt="delete icon"/>
                        Sterge
                    </Box>
                    
                </Box>
            </Box>
            </Grow>
        </>
    )  
}

const mapStateToProps = (state) =>{
    return{
    }
}


const mapDispatchToProps = dispatch => (bindActionCreators({
    //actions
    setClickedId,
    setAD,
},dispatch))

export default connect(mapStateToProps,mapDispatchToProps)(Anunt)