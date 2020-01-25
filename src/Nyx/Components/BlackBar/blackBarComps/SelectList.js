import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import useClasses from '../blackBarCss'
import {Box, TextField} from '@material-ui/core'
import { SelectListElement } from './'
import {listaJudete} from '../../../Utils/menuItems'
import Scrollbar from "react-scrollbars-custom"


function SelectList(props){
    const classes = useClasses()
    
    const renderListaAJudete = ()  =>  (
        listaJudete.map(({nume, selected}, index) => (
            <SelectListElement nume={nume} selected={selected} key={index}/>
          ))
    )

    return(
        
        <Box className={classes.selectList}>
                {renderListaAJudete()}
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

export default connect(mapStateToProps,mapDispatchToProps)(SelectList)