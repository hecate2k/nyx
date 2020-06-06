import loginMiddleware from "./login"
import anunturiMiddleware from './anunturi'
import temporaryMiddleware from './temporary'
import verificariActiuniMiddleware from './verificariActiuni'
// importare middlewares

const middlewares = [
    //lista middlerares
    loginMiddleware,
    anunturiMiddleware,
    temporaryMiddleware,
    verificariActiuniMiddleware,
]

export default middlewares