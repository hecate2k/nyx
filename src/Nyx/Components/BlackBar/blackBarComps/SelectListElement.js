import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import useClasses from '../blackBarCss'
import {Box, TextField} from '@material-ui/core'


function SelectListElement(props){
    const classes = useClasses()
    const {nume,selected} = props
    return(
        <Box className={selected?classes.selectListElementSelected:classes.selectListElement}>
            {nume}
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

export default connect(mapStateToProps,mapDispatchToProps)(SelectListElement)