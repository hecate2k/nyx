import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import useClasses from '../headerCss'
import {Link} from 'react-router-dom'
import {Box, ClickAwayListener, Collapse, Button} from '@material-ui/core'
import { selectLoginData } from '../../../Selectors'
import { testImage, badgeMenuIcon, profileIcon, anunturiIcon} from '../../../Images'
import {linkSprePozeProfil} from '../../../Utils/serverLinks'

function ProfileBadge(props){
    const classes = useClasses()

    const [open, setOpen] = React.useState(false)
	const onClickAway = () => {
		open && setOpen(false)
    }
    const toggleOpen = () => () => {
        setOpen(open => !open)
    }
    const {loginData} = props
    let avatar = loginData.avatar === 'none' ? linkSprePozeProfil + 'defaultAvatar.png' : linkSprePozeProfil + loginData.avatar
    return(
        <>
        <ClickAwayListener onClickAway={onClickAway}>
				<Box className={classes.profileBadgeBox}>
					<Box classes={{root:classes.profileBadge}} variant="contained" onClick={toggleOpen()}>
                        <img className={classes.profileBadgeAvatar} src={avatar} />
                        <Box className={classes.profileBadgeNume}>
                            {loginData.prenume} <span>{loginData.nume}</span>
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
        loginData: selectLoginData(state),
    }
}


const mapDispatchToProps = dispatch => (bindActionCreators({
    //actions
    
},dispatch))

export default connect(mapStateToProps,mapDispatchToProps)(ProfileBadge)
