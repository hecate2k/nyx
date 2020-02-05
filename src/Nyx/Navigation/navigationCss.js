
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
    }
    
}))

export default useClasses