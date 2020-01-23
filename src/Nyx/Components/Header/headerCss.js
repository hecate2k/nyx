import {makeStyles} from '@material-ui/core/styles'

const useClasses = makeStyles(theme =>({
    header : {
        display: 'flex',
        width:'100%',
        height: '53px',
        backgroundColor: '#f35',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0px 15px 0px 15px',
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
        padding: '6px 20px 6px 20px !important',
        height: '35px !important',
        fontSize: '8.5pt !important',
        fontWeight: '900 !important',
        backgroundColor: 'white !important',
        display: 'flex !important',
        justifyContent: 'center !important',
        alignItems: 'center !important',
        color: '#f35 !important',
        marginRight: '15px !important',
    },
    butonBorderAlb:{
        borderRadius: '4px !important',
        padding: '6px 20px 6px 20px !important',
        height: '35px !important',
        fontSize: '8.5pt !important',
        fontWeight: '900 !important',
        border:'2px solid white !important',
        display: 'flex !important',
        justifyContent: 'center !important',
        alignItems: 'center !important',
        color: 'white !important',
    },
    drawerLeft:{
        backgroundColor: '#f35',
        height: '100%',
    },
    }))

export default useClasses