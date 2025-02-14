import React from 'react'

import { Router, Switch, Route} from 'react-router-dom'
import { connect } from 'react-redux'
import useClasses from './navigationCss'
import { isMobileOnly } from 'react-device-detect'
import history from './history'
import { Home, Profil, CategorieAnunturi, Error404, About, AnunturileMele} from '../Components'
import './Global.css'
import Notifier from '../Utils/Notifier'
import { SnackbarProvider } from 'notistack';

function Navigation(props){
    const classes = useClasses()
    const {isLogged} = props
    if(!isMobileOnly)
        return(
            <div>
                MOBILE ONLY !
            </div>
        )
    
    return(
        <SnackbarProvider autoHideDuration={2000} classes={{variantSuccess: classes.success,variantError: classes.error}} disableWindowBlurListener={true} dense anchorOrigin={{vertical: 'top', horizontal: 'center',}}>
            <Router history={history}>
                <Notifier/>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    {/* <Route path="/anunturi" component={CategorieAnunturi}/> */}
                    <Route path='/anunturi/anunturilemele' component={isLogged ? AnunturileMele : Error404}/>
                    <Route path="/anunturi/:categorie" component={CategorieAnunturi}/>
                    <Route path="/Profil" component={Profil}/>
                    <Route path="/aboutus" component={About}/>
                    <Route path="/error404" component={Error404}/>
                </Switch>
            </Router>
        </SnackbarProvider>
    )
}

const mapStateToProps = state =>{
    return {
        isLogged: state.login.isLogged
    }
}

export default connect(mapStateToProps)(Navigation)