import {makeStyles} from '@material-ui/core/styles'

const useClasses = makeStyles(theme =>({
    filtreBar:{
        minHeight: '36px',
        position: 'fixed',
        top: '178px',
        zIndex: '11',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        background: 'white',
        marginBottom: '15px',
        padding: '5px 20px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    },
    filtreBarFals:{
        minHeight: '36px',
        width: '100%',
        marginBottom: '15px',
    }
    ,
    itemNumber:{
        fontSize: '10pt',
        display: 'flex',
        fontWeight: 900,
        color:'#262626',
        textAlign: 'center',
        '& p':{
            color:'#f35',
            marginLeft: '5px',
            marginRight: '5px'
        }
    },
    sortBy:{
        maxWidth: '115px',
        width: '100%',
        display: 'flex',
        marginLeft: '10px',
        fontWeight: 900,
        fontSize: '8pt',
        alignItems: 'center',
        marginRight: '10px',
    },
    showNumber:{
        fontWeight: 900,
        fontSize: '8pt',
        marginRight: 'auto',
    },
    filtreBarSelect:{
        maxWidth: '66px',
        width: '100%',
        fontSize: '8pt',
        marginLeft: '10px',
        paddingTop: '1px',
    },
    filtreBarSelectShowNr:{
        fontSize: '8pt',
        paddingTop: '1px',
        marginLeft: '10px',
    },
    filtreBaricons:{
        marginLeft: 'auto',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    }
    }))

export default useClasses