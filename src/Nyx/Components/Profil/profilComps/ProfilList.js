import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import useClasses from '../profilCss'
import {Box} from '@material-ui/core'
import ProfilListElement from './ProfilListElement'
import {profilListItems} from '../../../Utils'
function ProfilList(props){
    const classes = useClasses()
    return(
        <Box className={classes.profileList}>
            {
                profilListItems.map(({text,icon,label}, index) => (
                    <ProfilListElement text={text} icon={icon} label={label} />
                  ))
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

export default connect(mapStateToProps,mapDispatchToProps)(ProfilList)