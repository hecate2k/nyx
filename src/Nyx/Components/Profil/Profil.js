import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import useClasses from './profilCss'
import {Box,Button} from '@material-ui/core'
import { ProfilHeader,ProfilList, ProfilTitle } from './profilComps'
function Profil(props){
    const classes = useClasses()
    return(
        <Box className={classes.ProfileWindow}>
            <ProfilHeader />
            <ProfilTitle title={"Profil si date personale"} />
            <ProfilList />
            <Button variant="contained" className={classes.logOutButton} disableElevation>LOG OUT</Button>
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

export default connect(mapStateToProps,mapDispatchToProps)(Profil)