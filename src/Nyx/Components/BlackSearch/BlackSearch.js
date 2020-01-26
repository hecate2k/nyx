import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import useClasses from './blackSearchCss'
import {Box,Button,Modal,Fade, TextField, Select, MenuItem} from '@material-ui/core'
import { searchIcon } from '../../Images'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import AppsIcon from '@material-ui/icons/Apps';
import SearchIcon from '@material-ui/icons/Search';


function BlackSearch(props){
    const classes = useClasses()
    const [age, setAge] = React.useState('Noi');
    const [open, setOpen] = React.useState(false);
    const [adNr, setAdNr] = React.useState('10');
    const [openAdNr, setOpenAdNr] = React.useState(false);
    return(
        <>
        <Box className={classes.filtreBarFals}>
            dd
        </Box>
        <Box className={classes.blackSearch}>
            <TextField className={classes.blackSearchBar} placeholder="Scrie aici pentru a cauta un anunt"/>
            <Box className={classes.filtreBaricons}>
                <SearchIcon className={classes.blackSearchIcon}/>
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

export default connect(mapStateToProps,mapDispatchToProps)(BlackSearch)