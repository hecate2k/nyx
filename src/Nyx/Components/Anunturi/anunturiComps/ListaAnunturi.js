import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import useClasses from '../anunturiCss'
import {Box} from '@material-ui/core'
import Anunt from './Anunt'
import {listaAnunturi} from '../../../Utils'

const renderListaAnunturi = ()  =>  (
    listaAnunturi.map((date, index) => (
        <Anunt {...date} key={index}/>
      ))
)

function ListaAnunturi(props){
    const classes = useClasses()
    return(
        <Box className={classes.listaAnunturi}>
            {
                renderListaAnunturi()
            }
        </Box>
    )  
}

const mapStateToProps = (state) =>{

    return{
    }
}


const mapDispatchToProps = dispatch => (bindActionCreators({
    //actions
},dispatch))

export default connect(mapStateToProps,mapDispatchToProps)(ListaAnunturi)