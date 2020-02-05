
import {makeStyles} from '@material-ui/core/styles'

const useClasses = makeStyles(theme =>({
    success:{
        background: '#fff',
        color:'green',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px',
        fontSize: '11pt',
    }
    
}))

export default useClasses