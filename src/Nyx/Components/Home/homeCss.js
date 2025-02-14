
import {makeStyles} from '@material-ui/core/styles'

const useClasses = makeStyles(theme =>({
    homeWindow:{
        height: '100%',
        width: '100%',
    },
    continutHome:{
        minHeight: 'calc(100% - 298px)',
        display: 'flex',
        flexDirection: 'column',
    },
    bannerHome: {
        marginLeft: 'auto',
        marginRight: 'auto',
        overflow: 'hidden',
        borderRadius: '8px',
        marginTop: '15px',
        width: 'calc(100% - 30px)',
        height: '120px',
        boxShadow: '0px 0px 8px 5px rgba(0,0,0,.09)',
        '& img':{
            width: '100%',
            height: '100%',
            /* display: none, */
            objectFit: 'cover',
        }
        
    },
    homeAnunturi:{
        marginTop: '15px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding:'0px 15px 0px 15px',
    },
    anunturiHeader:{
        display: 'flex',
        alignItems: 'center',
        width:'100%',
        fontSize: '10pt',
        fontWeight: 800,
        '& $butonFilledRosu':{
            marginLeft: '15px',
        }
    },
    butonFilledRosu:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // color: 'white',
        color:'#f35',
        background: 'linear-gradient(to right top, #ff3355, #ff3655, #ff3855, #ff3b56, #ff3d56, #ff3d57, #ff3d57, #ff3d58, #ff3b5a, #ff385b, #ff365d, #ff335f)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        padding:'0px 15px 0px 15px',
        backgroundColor:'white',
        height: '27px',
        fontSize:'7pt',
        fontWeight: 900,
        borderRadius: '8px',
        boxShadow: '0px 3px 6px rgba(0,0,0,.16)',
    },
    anunturiCards:{
        width: '100%',
        // height: '195px',
        marginTop: '13px',
        display: 'flex',
        flexGrow: 'unset',
        flexDirection: 'column',
        overflowX: 'scroll',
        width: '100%',
    },
    homeCard:{
        flex: '0 0 auto',
        width: '133px',
        height: '187px',
        borderRadius: '4px',
        overflow: 'hidden',
        boxShadow: '0px 3px 6px rgba(0,0,0,.16)',
        marginRight: '15px',
        '& img':{
            width: '100%',
            height: '91px',
            objectFit: 'cover',
            borderTopLeftRadius: '4px',
            borderTopRightRadius: '4px',
        }
        
    },
    homeCardTitlu:{
        padding:'5px',
        width: '100%',
        fontSize: '11pt',
        textAlign: 'left',
        fontWeight: '700',
        overflow: 'hidden',
        height: '54px',
        lineHeight: '1.2',
        display: '-webkit-box',
        WebkitLineClamp: 3,
        WebkitBoxOrient: 'vertical',
        // -webkit-line-clamp: 3,
        // -webkit-box-orient: vertical,
    },
    footerCard:{
        width: '100%', 
        marginTop: '9px',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '3px',
    },
    pretCard:{
        height: '20px',
        backgroundColor: '#f35',
        width: '61px',
        fontWeight: '900',
        fontSize: '10pt',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '5px',
        borderRadius: '4px',
    },
    favoriteCard :{
        height: '100%',
        /* width: 14px, */
    },
    shareCard:{
        height: '100%',
        /* width: 14px, */
    },
    favoriteCard :{
        '& img':{
            /* width: 100%, */
            height: '100%',
            maxWidth: '17px',
            marginLeft: '10px',
        },
    },
    shareCard :{
        '& img':{
            /* width: 100%, */
            height: '100%',
            maxWidth: '17px',
            marginLeft: '10px',
        },
    },
    homeStatsBox:{
        width:'100%',
        margin: 'auto auto',
    },
    homeNrAnunturi:{
        fontWeight: 700,
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        '& span':{
            color:'#f35',
            fontSize: '24pt',
            fontWeight: 900,
        }
    },
    butonModal:{
        marginRight: '15px',
        backgroundColor: 'transparent',
    },
    loadingCircleBox:{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '-15px',
    },
    noAnunturi:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 800,
        fontSize: '12pt',
        width: '100%',
    }
}))

export default useClasses