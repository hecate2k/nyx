import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import useClasses from '../anunturiCss'
import {heartIcon} from '../../../Images'
import {Box, TextField,InputAdornment,Button} from '@material-ui/core'
import Scrollbar from "react-scrollbars-custom"
import Rating from '@material-ui/lab/Rating'
function Anunt(props){
    const classes = useClasses()
    const {promovat, titlu, image, avatar,nume,prenume, judet, oras, pret, telefon, views, rating} = props
    return(
        <>
            <Box className={classes.anuntContainer}>
                <Box className={classes.anuntHeader}>
                    {promovat &&
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
                        <img src={image}/>
                    </Box>
                    <Box className={classes.anuntInfos}>
                        <Box className={classes.sellerInfo}>
                            <img className={classes.sellerAvatar} src={avatar} />
                            <Box className={classes.sellerBio}>
                                <p className={classes.anuntNumePrenume}>{prenume} {nume}</p>
                                <p className={classes.judetOras}>{judet}, {oras}</p>
                                <Rating className={classes.sellerRating} name="read-only" value={rating} readOnly />
                            </Box>
                        </Box>
                        <Box className={classes.anuntInfoFooter}>
                            <p className={classes.anuntVizualizari}>
                                {views} vizualizari
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