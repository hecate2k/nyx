import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import useClasses from '../anunturiCss'
import {Box, Button} from '@material-ui/core'
import Anunt from './Anunt'
import {listaAnunturi} from '../../../Utils'
import useBeforeFirstRender from '../../../Utils/useBeforeFirstRender'
import CircularProgress from '@material-ui/core/CircularProgress'


const renderListaAnunturi = (anunturi)  =>  {
    if(!anunturi.length)
        return <Box>Nu exista anunturi</Box>
    return anunturi.map((date, index) => (
        <Anunt {...date} key={index}/>
      ))
}


function ListaAnunturi(props){
    const classes = useClasses()
    const {getAnunturi, anunturi, isLoading} = props
    useBeforeFirstRender(() => {
        getAnunturi()
    })

    return(
        <>
        <Box className={classes.listaAnunturi} >
            {
                isLoading?
                <Box className={classes.loadingCircleBox}><CircularProgress color="secondary" /></Box>
                :
                renderListaAnunturi(anunturi||[])
            }
        </Box>
        </>
    )  
}

const mapStateToProps = (state) =>{

    return{
        isLoading : state.anunturi.isLoading,
        anunturi: state.anunturi.anunturi
    }
}


const mapDispatchToProps = dispatch => (bindActionCreators({
    //actions
    getAnunturi : (page) =>({type:'GET_ANUNTURI',page})
},dispatch))

export default connect(mapStateToProps,mapDispatchToProps)(ListaAnunturi)