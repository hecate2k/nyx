import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import useClasses from '../headerCss'
import {Link} from 'react-router-dom'
import {Box, ClickAwayListener, Collapse, Button} from '@material-ui/core'
import { selectLoginData, selectLoginErrors } from '../../../Selectors'
import { updateLoginValue, doLogin } from '../../../Actions'
import { testImage, badgeMenuIcon, profileIcon, anunturiIcon} from '../../../Images'


function ProfileBadge(props){
    const classes = useClasses()

    const [open, setOpen] = React.useState(false)

	const onClickAway = () => {
		open && setOpen(false)
	}

    return(
        <>
        <ClickAwayListener onClickAway={onClickAway}>
				<Box style={{zIndex: '999',position: 'relative'}}>
					<Box classes={{root:classes.profileBadge}} variant="contained" onClick={() => setOpen(open => !open)}>
                        <img className={classes.profileBadgeAvatar} src={testImage} />
                        <Box className={classes.profileBadgeNume}>
                            {"Aurora"}<span>{" Lee"}</span>
                        </Box>
                        <img className={classes.profileBadgeMenuIcon} src={badgeMenuIcon}/>
                    </Box>

                    <Collapse classes={{container:classes.profileBadgeContinut}} in={open}>
                        <Box className={classes.continutBadge}>
                            <Box className={classes.emptySpace}></Box>
                            <Link to="/profil">
                                <Box className={classes.profileBadgeListElement}>
                                    <img src={profileIcon}/>
                                    <Box className={classes.profileBadgeLinkTo} to="/profil">
                                        Profil
                                    </Box>
                                </Box>
                            </Link>
                            <Link to="/anunturi">
                                <Box className={classes.profileBadgeListElement}>
                                    <img src={anunturiIcon}/>
                                    <Box className={classes.profileBadgeLinkTo}>
                                        Anunturile mele
                                    </Box>
                                </Box>
                            </Link>
                        </Box>
                    </Collapse>
				</Box>
	    </ClickAwayListener>
        </>
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

export default connect(mapStateToProps,mapDispatchToProps)(ProfileBadge)
