import React from 'react'

import { Router, Switch, Route} from 'react-router-dom'
import { connect } from 'react-redux'
// import useClasses from './navigationCss'
import { isMobileOnly } from 'react-device-detect'
import history from './history'
import { Login , Home, Profil, CategorieAnunturi} from '../Components'
import './Global.css'

function Navigation(props){
    // const classes = useClasses()

    if(!isMobileOnly)
        return(
            <div>
                MOBILE ONLY !
            </div>
        )
    
    return(
        <Router history={history}>
            <Switch>
                <Route path="/" component={CategorieAnunturi}/>
            </Switch>
        </Router>
    )
}

const mapStateToProps = state =>{
    return {

    }
}

export default connect(mapStateToProps)(Navigation)