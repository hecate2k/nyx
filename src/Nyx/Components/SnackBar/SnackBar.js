import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import useClasses from './snackBarCss'
import { selectLoginData, selectLoginErrors } from '../../Selectors'
import { updateLoginValue, doLogin } from '../../Actions'
import {Box} from '@material-ui/core'
function Login(props){
    const classes = useClasses()
    const {message} = props
    
    return(
        <Box>
            {message}
        </Box>
    )  
}

const mapStateToProps = (state) =>{

    return{
        data: selectLoginData(state),
        errors: selectLoginErrors(state),
    }
}


const mapDispatchToProps = dispatch => (bindActionCreators({
    //actions
    updateLoginValue,
    doLogin,
},dispatch))

export default connect(mapStateToProps,mapDispatchToProps)(Login)