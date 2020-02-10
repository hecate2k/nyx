
import {makeStyles} from '@material-ui/core/styles'

const useClasses = makeStyles(theme =>({
    success:{
        background: '#fff !important',
        color:'green !important',
        display: 'flex !important',
        justifyContent: 'center !important',
        alignItems: 'center !important',
        padding: '10px !important',
        fontSize: '11pt !important',
    },
    error:{
        background: '#fff !important',
        color:'#ff1133 !important',
        display: 'flex !important',
        justifyContent: 'center !important',
        alignItems: 'center !important',
        padding: '10px !important',
        fontSize: '11pt !important',
    },
    // error:{
    //     background: '#ff1133 !important',
    //     color:'white !important',
    //     display: 'flex !important',
    //     justifyContent: 'center !important',
    //     alignItems: 'center !important',
    //     padding: '10px !important',
    //     fontSize: '11pt !important',
    //     fontWeight: '800 !important',
    // }
    
}))

export default useClasses