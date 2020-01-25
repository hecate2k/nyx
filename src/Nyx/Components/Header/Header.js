import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import useClasses from './headerCss'
import { Box, Drawer, Button, SwipeableDrawer } from '@material-ui/core';
import { selectLoginData, selectLoginErrors } from '../../Selectors'
import { updateLoginValue, doLogin } from '../../Actions'
import { menuIcon } from '../../Images'
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import {menuItems} from '../../Utils'
import BlackBar from '../BlackBar'
import HeaderFals from './HeaderFals';


function Header(props){
    const classes = useClasses()
    const {isLogged} = props

    


    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;       
        }
        setState({ ...state, [side]: open });   
    }
    
    const sideList = side => (
        <div
            className={classes.drawerLeft}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
          <List>
            {menuItems.map(({text,icon,path}, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                    <img src={icon}/>
                </ListItemIcon>

                <p className={classes.menuItemText} >{text}</p>
              </ListItem>
            ))}
          </List>
          <Divider />
        </div>
      )


    const [state, setState] = React.useState({
        left: false,
      });
    return(
        <>
        <Box className={classes.headerContainer}>
            <div className={classes.header}>
                <Button className={classes.butonMeniu} onClick={toggleDrawer('left', true)}><img src={menuIcon}/></Button>
                <Drawer open={state.left} onClose={toggleDrawer('left', false)} >
                    <Box className={classes.categoriiText}>
                        Categorii
                    </Box>
                    {sideList('left')}
                </Drawer>
                <div className={classes.butoaneHeaderDreapta}>
                    {
                        !isLogged &&
                        <>
                            <Button className={classes.butonFilledAlb} style={{color:'#f35 !important'}} variant="contained" disableElevation>INTRA IN CONT</Button>
                            <Button className={classes.butonBorderAlb}  variant="outlined" disableElevation>CREAZA CONT</Button>
                        
                        </>
                    }ss
                    
                </div>
            </div>
            <BlackBar />
        </Box>
        <HeaderFals/>
        
        </>
    )  
}

const mapStateToProps = (state) =>{

    return{
        data: selectLoginData(state),
    }
}


const mapDispatchToProps = dispatch => (bindActionCreators({
    //actions
    updateLoginValue,
},dispatch))

export default connect(mapStateToProps,mapDispatchToProps)(Header)