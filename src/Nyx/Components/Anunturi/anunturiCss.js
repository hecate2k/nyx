import {makeStyles} from '@material-ui/core/styles'

const useClasses = makeStyles(theme =>({
    listaAnunturi:{
        width: 'calc(100% - 30px)',
        height: '100%',
        margin:'0 auto',
        // background:'white',
        // boxShadow: '0px 1px 3px rgba(0,0,0,0.05), 0px 1px 2px rgba(0,0,0,0.1)',
        // borderRadius: '8px',
        // marginTop: '15px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    anunturiWindow:{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',

    },
    anuntContainer:{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        borderRadius: '8px',
        background: 'white',
        boxShadow: '0px 3px 6px rgba(0,0,0,.16)',
        padding: '10px',
        marginBottom:'10px',
    },
    anuntHeader:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom:'10px',
    },
    anuntPromovat:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '10px',
        borderRadius: '4px',
        background: '#f35',
        color:'white',
        padding: '3px 5px',
        fontWeight: 800,
        textTransform: 'uppercase',
        fontSize: '7pt',
        paddingTop: '3px',
    },
    anuntTitle:{
        color: '#262626',
        fontWeight: 800,
        fontSize: '12pt',
        width: '100%',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
    anuntBody:{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '80px',
    },
    anuntImagine:{
        '& img':{
            height: '100%',
            width: '140px',
            objectFit: 'cover',
            borderRadius: '8px',
            boxShadow: '0px 1px 3px rgba(0,0,0,0.05), 0px 1px 2px rgba(0,0,0,0.1)',
        },
        height: '100%',
    },
    anuntInfos:{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        marginLeft: '10px',
    },
    sellerInfo:{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    sellerAvatar:{
        minWidth: '40px',
        minHeight:'40px',
        width: '40px',
        height: '40px',
        objectFit: 'cover',
        borderRadius: '50%',
        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        border: '2px solid #efefef',
    },
    sellerBio:{
        width: '100%',
        marginLeft: '10px',
    },
    anuntNumePrenume:{
        fontWeight: 900,
        fontSize: '11pt',
    },
    judetOras:{
        fontSize: '8pt',
        fontWeight: 700,
    },
    sellerRating:{
        fontSize: '8.75pt !important',
        marginLeft: '-1px',
    },
    anuntInfoFooter:{
        display: 'flex',
        flexDirection: 'row',
        marginTop: '15px',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    heartPrice:{
        display: 'flex',
        flexDirection: 'row',
    },
    heartIcon:{
        marginRight: '15px',
    },
    anuntVizualizari:{
        fontWeight: 800,
        fontSize: '8pt',
    },
    anuntPret:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding:'3px 8px',
        backgroundColor: '#f35',
        borderRadius: '4px',
        fontSize: '10pt',
        color: 'white',
        fontWeight: 800,
        paddingTop: '4px',
    },
    anuntNumarTelefon:{
        width: '100%',
        height: '30px',
        fontWeight: 800,
        fontSize: '9pt',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#262626',
        borderRadius: '4px',
        marginTop: '10px',
        boxShadow: '0px 1px 3px rgba(0,0,0,0.05), 0px 1px 2px rgba(0,0,0,0.1)',
        color:'white',
    },
    optionBox:{
        width: '100%',
        height: '30px',
        fontWeight: 800,
        fontSize: '9pt',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#262626',
        borderRadius: '4px',
        marginTop: '10px',
        boxShadow: '0px 1px 3px rgba(0,0,0,0.05), 0px 1px 2px rgba(0,0,0,0.1)',
        color:'white',
        padding: '0px 20px'
    },
    loadingCircleBox:{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '-15px',
    },
    paginationRoot:{
        // marginTop: 'auto !important',
    },
    selectedPage:{
        background: '#f35 !important',
        color:'white !important',
        fontWeight: 900,
        pointerEvents: 'none',
        touchAction: 'none',
    },
    paginationBox:{
        width: '100%',
        background: 'white',
        boxShadow: '0px 3px 6px rgba(0,0,0,.16)',
        marginBottom: '15px',
        padding: '3px',
        borderRadius: '8px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 'auto'
    },
    smallSizePagination:{
        width: '28px !important',
        height: '28px !important',
        fontSize: '9pt !important',
        fontWeight: 700,
    },
    categorieNoData:{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '0px 30px',
    },
    noDataImage:{
        width: '100px',
        height: 'auto',
        marginBottom: '15px',
    },
    noDataText:{
        textAlign: 'center',
        fontSize: '10.5pt',
        fontWeight: 800,
    },
    fillerSpaceAnunturi:{
        backgroundColor: '#f7f7f7',
        minHeight: '15px',
        width: '100%',
        zIndex: 1,
        position: 'fixed',
        top: '164px',
    },
    
}))

export default useClasses