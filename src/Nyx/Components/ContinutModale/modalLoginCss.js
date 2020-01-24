import {makeStyles} from '@material-ui/core/styles'

const useClasses = makeStyles(theme =>({
    modalContainer:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    ilustratieLogin:{
        width: '90%',
        // marginBottom: '30px',
        // marginTop: '15px',
        margin:'0 auto',
    },
    inputLogin:{
        '& label':{
            paddingLeft: '55px',
            fontWeight: 800,
        },
        '& input':{
            paddingLeft: '10px',
        },
        '& root':{
            backgroundColor: 'red',
        },
        '& label.Mui-focused':{
            color:'#f35',
            
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#f35',
          },
        margin:'0 auto',
        width: '80%',
        fontWeight: 800,
        marginTop: '15px',
        // backgroundColor: '#efefef',
    },
    modalTitle:{
        '& span':{
            color:'#f35',
        },
        // marginBottom:'15px',
        marginTop: '15px',
        margin:'0 auto',
        fontSize: '17pt',
        fontWeight: 900,
    },
    loginButton:{
        '& root':{
            backgroundColor: '#f35 !important',
        },
        marginTop: '15px',
        backgroundColor: '#f35 !important',
        color:'white',
        fontSize: '11pt',
        fontWeight: 700,
        width: '80%',
        padding: '5px',
        height: '45px',
        margin:'0 auto',
    },
    bottomInfo:{
        margin: '0 auto',
        marginTop: 'auto',
        '& p':{
            textAlign:'center',
            marginTop: '10px',
            '& span':{
                fontWeight: 800,
                color:'#f35'
            }
        }
    }
    }))

export default useClasses