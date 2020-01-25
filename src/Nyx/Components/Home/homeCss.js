
import {makeStyles} from '@material-ui/core/styles'

const useClasses = makeStyles(theme =>({
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
        overflowX: 'scroll',
        width: '100%',
    },
    homeCard:{
        flex: '0 0 auto',
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
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        
      },
      paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        minHeight: 'calc(100% - 30px)',  
        width: 'calc(100% - 30px)',
        backgroundColor: 'white',
        border: '2px solid #000',
        border:'0px',
        borderRadius: '8px',
        boxShadow: theme.shadows[5],
        padding: '15px',
      },
      butonModal:{
          marginRight: '15px',
          backgroundColor: 'transparent',
      },
      modalHeader:{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
      },
      modalAvatarInfo:{
        '& img':{
            marginRight: '10px',
            width: '64px',
            height: '64px',
            objectFit: 'cover',
            borderRadius: '50%',
            border:'2px solid #dbdbdb',
            boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        },
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      },
      modalInfoNume:{
        fontWeight: 900,
        fontSize: '13.5pt'
      },
      modalInfoLocatie:{
        marginTop: '3.4px',
        fontWeight: 800,
        fontSize: '8pt',
        fontStyle: 'italic',
        textTransform: 'uppercase',
      },
      priceCategory:{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          marginTop: '15px',
          borderRadius: '4px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
      },
      modalPret:{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#f35',
        padding: '8px 10px 8px 10px',
        fontSize: '15pt',
        fontWeight: 900,
        color: 'white',
        borderTopLeftRadius: '4px',
        borderBottomLeftRadius: '4px',
        border: '0 !important'
      },
      modalCategorie:{
          display: 'flex',
          alignItems: 'center',
          paddingLeft: '10px',
          backgroundColor: '#262626',
          width: '100%',
          borderTopRightRadius: '4px',
          borderBottomRightRadius: '4px',
          color:'#fff',
          fontSize: '9pt',
          fontWeight: 800,
          border: '0 !important'
      },
      modalAttributes:{
          display: 'flex',
          marginTop: '15px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
          borderRadius: '4px',
          width: '100%',
      },
      modalAttributeTitle:{
          '& :first-of-type':{
                backgroundColor: 'black',
          },
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#efefef',
        padding: '8px 10px 8px 10px',
        fontSize: '11pt',
        fontWeight: 900,
        color: '#262626',
        // borderTopLeftRadius: '4px',
        // borderBottomLeftRadius: '4px',
        border: '0 !important'
      },
      modalAttributeText:{
        display: 'flex',
        alignItems: 'center',
        padding: '8px 10px 8px 10px',
        fontSize: '10pt',
        fontWeight: 900,
        color: '#262626',
        // border: '0 !important',
        width: '100%',
        height: '50%',
      },
      modalImages:{
          '& img':{
            // height: '100%',
            width: '252px',
            objectFit: 'cover',
            marginRight: '15px',
            borderRadius: '4px',
          },
          display: 'flex',
          flexDirection: 'row',
          overflowX: 'auto',
          marginTop: '15px',
          width: '100%',
          minHeight: '142px',
          position: 'relative',
      },
      modalImagesBadge:{
          position: 'absolute',
          top:'-6px',
          right: '-6px',
          width: '40px',
          height: '40px',
          backgroundColor: '#f35',
          borderRadius: '50%',
          border:'6px solid #fff',
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '8pt',
          fontWeight: 800,
          letterSpacing: '1px',
      },
      modalTitluAnunt:{
          marginTop: '15px',
          fontSize: '11pt',
          fontWeight: '800'
      },
      modalTitluDescriere:{
        marginTop: '15px',
        fontSize: '11pt',
        fontWeight: '700'
      },
      modalNrTelefon:{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '12.5pt',
          color:'white',
          borderRadius: '4px',
          fontWeight: 700,
          width: '100%',
          backgroundColor: '#f35',
          minHeight: '45px',
          letterSpacing: '.5px',
          marginTop: '15px',
          alignSelf: 'flex-end',
      },
      modalDescriereText:{
          marginTop: '15px',
          overflowY: 'auto',
          height: '300px',
          fontSize: '9.5pt',
          width: '100%',
      },
      
}))

export default useClasses