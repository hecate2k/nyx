import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import useClasses from './filtreBarCss'
import {Box, Select, MenuItem} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';


function FiltreBar(props){
    const classes = useClasses()
    const [age, setAge] = React.useState('Noi');
    const [open, setOpen] = React.useState(false);
    const [adNr, setAdNr] = React.useState('10');
    const [openAdNr, setOpenAdNr] = React.useState(false);
    const openSortBy = () => () => {
        setOpen(true)
    }
    const inchideSortBy = () => () => {
        setOpen(false)
    }
    const seteazaSortBy = () => e => {
        setAge(e.target.value)
    }

    const openShowNrItems = () => () => {
        setOpenAdNr(true)
    }
    const inchideShowNrItems = () => () => {
        setOpenAdNr(false)
    }
    const seteazaShowNrItems = () => e => {
        setAdNr(e.target.value)
    }
    return(
        <>
        <Box className={classes.filtreBarFals}>
            DummyText
        </Box>
        <Box className={classes.filtreBar}>
            <Box className={classes.itemNumber}>
                {"123 anunturi"}
            </Box>
            <Box className={classes.sortBy}>
                Sort by <Select className={classes.filtreBarSelect} open={open} onClose={inchideSortBy()} onOpen={openSortBy()} value={age} onChange={seteazaSortBy()} >
                            <MenuItem value={"Noi"}>Noi</MenuItem>
                            <MenuItem value={"Ieftine"}>Ieftine</MenuItem>
                            <MenuItem value={"Scumpe"}>Scumpe</MenuItem>
                        </Select>
            </Box>
            <Box className={classes.showNumber}>
            Show <Select className={classes.filtreBarSelectShowNr}  open={openAdNr} onClose={inchideShowNrItems()} onOpen={openShowNrItems()} value={adNr} onChange={seteazaShowNrItems()} >
                            <MenuItem value={10}>10</MenuItem>
                            <MenuItem value={12}>12</MenuItem>
                            <MenuItem value={13}>13</MenuItem>
                        </Select>
            </Box>
            <Box className={classes.filtreBaricons}>
                <MenuIcon/>
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

export default connect(mapStateToProps,mapDispatchToProps)(FiltreBar)