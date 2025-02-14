import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import useClasses from '../anunturiCss'
import {heartIcon} from '../../../Images'
import {Box, Grow} from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'
import {linkSprePozeAnunturi,linkSprePozeProfil} from '../../../Utils/serverLinks'


function Anunt(props){
    const classes = useClasses()
    const {timeout,promovat, titlu, avatar,nume,prenume, judet, oras, pret, telefon, vizualizari, rating,imagini} = props
    const myAvatar = avatar === 'none' ? "defaultAvatar.png" : avatar
    return(
        <>
        <Grow in={true} timeout={props.timeout}>
            <Box onClick={props.onClick} className={classes.anuntContainer}>
                {/* <Box className={classes.anuntHeader}> */}
                    {/* {promovat === 1 &&
                        <Box className={classes.anuntPromovat}>
                            promovat
                        </Box> 
                    } */}
                    
                {/* </Box> */}
                <Box className={classes.anuntBody}>
                    <Box className={classes.anuntImagine}>
                        <img src={(linkSprePozeAnunturi+imagini[0].nume_poza) || ""}/>
                    </Box>
                    <Box className={classes.anuntInfos}>
                    <Box className={classes.anuntTitle}>
                        {titlu}
                    </Box>
                        <Box className={classes.sellerInfo}>
                            <img className={classes.sellerAvatar} src={linkSprePozeProfil+myAvatar} />
                            <Box className={classes.sellerBio}>
                                <p className={classes.anuntNumePrenume}>{prenume} {nume}</p>
                                <p className={classes.judetOras}>{judet}, {oras}</p>
                                {/* <Rating className={classes.sellerRating} name="read-only" value={rating} readOnly /> */}
                            </Box>
                        </Box>
                        <Box className={classes.anuntInfoFooter}>
                            {/* <p className={classes.anuntVizualizari}>
                                {vizualizari} vizualizari
                            </p> */}
                            <Box className={classes.heartPrice}>
                                {/* <img className={classes.heartIcon} src={heartIcon}/> */}
                                <Box className={classes.anuntPret}>
                                    {pret} lei
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box className={classes.anuntNumarTelefon}>
                        {telefon}
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
},dispatch))

export default connect(mapStateToProps,mapDispatchToProps)(Anunt)