
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
    butonFilledAlb:{
        borderRadius: '4px',
        padding: '6px 20px 6px 20px',
        height: '35px',
        fontSize: '8.5pt',
        fontWeight: '900',
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#f35',
        marginRight: '15px',
    },
    butonBorderAlb:{
        borderRadius: '4px',
        padding: '6px 20px 6px 20px',
        height: '35px',
        fontSize: '8.5pt',
        fontWeight: 900,
        border:'2px solid white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
    },
    subHeaderLogo:{
        width: '100%',
        height: '46px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '22px',
        fontWeight: '900',
        fontStyle: 'italic',
        backgroundColor: 'white',
    },
    blackMenuBar:{
        height: '35px',
        backgroundColor: '#262626',
        borderRadius: '8px',
        /* width: 100%, */
        margin:'15px 15px 0px 15px',
    },
    bannerHome: {
        marginTop: '15px',
        width: '100%',
        '& img':{
            width: '100%',
            /* display: none, */
            objectFit: 'contain',
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
        display: 'flex',
        // marginLeft: '15px',
        '& $butonFilledRosu':{
            marginLeft: '15px',
        }
    },
    butonFilledRosu:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        padding:'0px 15px 0px 15px',
        backgroundColor:'#f35',
        height: '27px',
        fontSize:'7pt',
        borderRadius: '4px',
    },
    anunturiCards:{
        width: '100%',
        height: '190px',
        marginTop: '13px',
        display: 'flex',
        flexGrow: 'unset',
        flexDirection: 'row',
        /* min-width: 100%, */
        /* width: auto, */
        overflowX: 'scroll',
        /* overflow-y: hidden, */
        width: '100%',
    },
    homeCard:{
        flex: '0 0 auto',
        marginRight: '15px',
        width: '133px',
        height: '187px',
        borderRadius: '4px',
        overflow: 'hidden',
        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        '& img':{
            width: '100%',
            height: '91px',
            objectFit: 'cover',
            borderTopLeftRadius: '4px',
            borderTopRightRadius: '4px',
        }
        
    },
    //aici se poate ca trebuie homecardtitlu inauntru homeCard :{
    //     padding:'5px',
    //     width: '100%',
    //     fontSize: '11pt',
    //     textAlign: 'left',
    //     fontWeight: '700',
    //     overflow: 'hidden',
    //     height: '59px',
    //     lineHeight: '1.2',
    //     display: '-webkit-box',
    //     // -webkit-line-clamp: 3,
    //     // -webkit-box-orient: vertical,
    // },
    homeCardTitlu:{
        padding:'5px',
        width: '100%',
        fontSize: '11pt',
        textAlign: 'left',
        fontWeight: '700',
        overflow: 'hidden',
        height: '59px',
        lineHeight: '1.2',
        display: '-webkit-box',
        // -webkit-line-clamp: 3,
        // -webkit-box-orient: vertical,
    },
    footerCard:{
        width: '100%', 
        marginTop: '9px',
        display: 'flex',
        alignItems: 'center',

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
        }
        
    },
    shareCard :{
        '& img':{
            /* width: 100%, */
            height: '100%',
            maxWidth: '17px',
            marginLeft: '10px',
        }
        
    },
}))

export default useClasses