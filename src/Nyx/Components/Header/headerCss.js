import {makeStyles} from '@material-ui/core/styles'

const useClasses = makeStyles(theme =>({
    headerContainer:{
        position:' fixed',
        zIndex: '999',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        backgroundColor: '#f5f5f5',
        height: '178px'
    },
    header : {
        display: 'flex',
        width:'100%',
        height: '53px',
        backgroundColor: '#f35',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0px 15px 0px 15px',
        
    },
    headerLogoSection:{
        '& img':{
            width: '21%',
            marginTop: '15px',
        },
        height: '55px',
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    butoaneHeaderDreapta :{
        // marginRight: '15px',
        display: 'flex',
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
    }
    }))

export default useClasses