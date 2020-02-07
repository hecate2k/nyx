import loginMiddleware from "./login"
import anunturiMiddleware from './anunturi'
import temporaryMiddleware from './temporary'
// importare middlewares

const middlewares = [
    //lista middlerares
    loginMiddleware,
    anunturiMiddleware,
    temporaryMiddleware,
]

export default middlewares