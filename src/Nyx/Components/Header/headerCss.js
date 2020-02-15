import {makeStyles} from '@material-ui/core/styles'

const useClasses = makeStyles(theme =>({
    headerContainer:{
        position:' fixed',
        zIndex: '999',
        display: 'flex',
        flexDirection: 'column',
        width:'calc(100% + 1px)',
        backgroundColor: '#f5f5f5',
        height: '164px'
    },
    header : {
        display: 'flex',
        width:'100%',
        height: '53px',
        backgroundImage: 'linear-gradient(to right top, #ff3355, #ff3655, #ff3855, #ff3b56, #ff3d56, #ff3d57, #ff3d57, #ff3d58, #ff3b5a, #ff385b, #ff365d, #ff335f)',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0px 15px 0px 15px',
        
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        
      },
      paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        minHeight: 'calc(100% - 30px)',  
        width: 'calc(100% - 30px) !important',
        height: 'calc(100% - 30px) !important',
        marginTop: '15px !important',
      },
      paperLogin:{
        paddingBottom: '8px',
        background: '#F7F7F7',
        minHeight: '184px',
        height: 'auto',
        // marginTop: '50%',
        width: 'calc(100% - 30px)',
        // top: '50%',
        // transform: 'translate(0,-50%) !important',
        padding: '15px',
        position: 'fixed',
        boxShadow: theme.shadows[5],
        borderRadius: '8px',
        // marginLeft: '15px',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%) !important',
      },
    headerLogoSection:{
        '& a':{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        height: '55px',
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerLogoImg:{
        width: '80%',
        marginTop: '20px',
    },
    profileBadgeMenuIcon:{
        marginLeft: '15px',
    },
    butoaneHeaderDreapta :{
        // marginRight: '15px',
        width: '225px',
        display: 'flex',
    },
    butoaneHeaderBox:{
        width: '221px',
        display: 'flex',
        padding: '5px',
        background: 'white',
        borderRadius: '13px',
        boxShadow: '0px 3px 6px rgba(0,0,0,.16)'
    },
    butoaneHeaderBoxRed:{
        color: 'white',
        height: '30px',
        padding: '6px 15px',
        fontSize: '7pt',
        fontWeight: 900,
        marginRight: '5px',
        background: '#f35 !important',
        backgroundImage: 'linear-gradient(to right top, #ff3355, #ff3655, #ff3855, #ff3b56, #ff3d56, #ff3d57, #ff3d57, #ff3d58, #ff3b5a, #ff385b, #ff365d, #ff335f) !important',
        boxShadow: '0px 3px 6px rgba(0,0,0,.16)',
        borderRadius: '8px',
    },
    butoaneHeaderBoxWhite:{
        color: '#262626',
        height: '30px',
        padding: '6px 15px',
        fontSize: '7pt',
        fontWeight: 900,
        background: 'white !important',
        boxShadow: '0px 3px 6px rgba(0,0,0,.16)',
        borderRadius: '8px',
        border:'none !important',
    },
    headerLinkHome:{
        marginLeft: 'auto',
        width: '59px',
    },
    logoLinkHome:{
        width: '100%',
    },
    butonMeniu:{
        padding: '0px !important',
        minWidth: '21px !important',
    },
    butonFilledAlb:{
        borderRadius: '4px !important',
        padding: '6px 15px',
        height: '35px !important',
        fontSize: '7pt',
        height: '30px',
        fontWeight: 900,
        backgroundColor: 'white !important',
        color: '#262626',
        marginRight: '15px',
    },
    butonBorderAlb:{
        borderRadius: '4px ',
        padding: '6px 15px',
        height: '30px',
        fontSize: '7pt',
        fontWeight: '900',
        border:'2px solid white',
        color: 'white',
    },
    drawerLeft:{
        backgroundColor: '#f35',
        height: '100%',
    },
    headerFals:{
        width: '100%',
        minHeight: '163px',
        backgroundColor: '#f5f5f5',
        marginBottom: '15px',
    },
    menuItemText:{
        fontSize: '10pt',
        fontWeight: 700,
        color:'white'
    },
    categoriiText:{
        height: '56px',
        fontSize: '12pt',
        fontWeight: 900,
        display: 'flex',
        alignItems: 'center',
        padding: '15px',
    },
    profileBadge:{
        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '15px',
        background: '#262626',
        padding: '5px 10px',
        borderRadius: '30px',
        position: 'relative',
        
    },
    profileBadgeAvatar:{
            margin:'0',
            marginLeft: '-5px',
            marginTop: '0 !important',
            width: '45px !important',
            height: '45px',
            borderRadius: '50%',
            border: '2px solid #efefef',
            boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
            objectFit: 'cover',
    },
    profileBadgeNume:{
        color: 'white',
        fontWeight: 900,
        fontSize: '12pt',
        marginLeft: '15px',
        '& span':{
            color:'#f35',
            background: 'linear-gradient(to right top, #ff3355, #ff3655, #ff3855, #ff3b56, #ff3d56, #ff3d57, #ff3d57, #ff3d58, #ff3b5a, #ff385b, #ff365d, #ff335f)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
        },
    },
    profileBadgeContinut:{
        borderRadius: '8px',
        overflow: 'hidden',
        background: 'white',
        top: '42px',
        position: 'absolute',
        zIndex: '-1',
        width: '100%',
        boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    },
    continutBadge:{
        // minHeight: '150px',
        width: '100%',
        background: 'white',
        '& > :last-child':{
            marginBottom: '5px',
        }
    },
    emptySpace:{
        minHeight: '28px'
    },
    profileBadgeListElement:{
        display: 'flex',
        flexDirection: 'row',
        height: '40px',
        alignItems: 'center',
        padding: '0px 15px',
        width: '100%',
    },
    profileBadgeLinkTo:{
        marginLeft: '15px',
        fontSize: '10pt',
        fontWeight: 900,
        color: '#262626'
    },
    dialogModalMareTitle:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        fontSize: '13.5pt',
        fontWeight: 900,
        '& img':{
            marginRight: '15px',
        }
    },
    iesiButon:{
        background: '#f35 !important',
        fontSize: '11pt',
        color: 'white',
        fontWeight: 800,
        padding: '10px 20px 10px 20px',
    },
    headerLogoImage:{
        marginTop: '15px',
    }
    }))

export default useClasses