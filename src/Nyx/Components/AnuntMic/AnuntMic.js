import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import useClasses from '../Home/homeCss'
import {testImage , shareIcon, heartIcon} from '../../Images'

function AnuntMic(props){
    const classes = useClasses()
    return(
        <div className={classes.homeCard}>
            <img src={testImage} alt="" />
            <div className={classes.homeCardTitlu}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque lectus ligula, ac pulvinar ipsum consequat a. 
            </div>
            <div className={classes.footerCard}>
                <div className={classes.pretCard}>300 lei</div>
                <div className={classes.favoriteCard}>
                    <img src={heartIcon} alt="" />
                </div>
                <div className={classes.shareCard}>
                    <img src={shareIcon} alt="" />
                </div>
            </div>
        </div>
    )  
}

const mapStateToProps = (state) =>{

    return{
    }
}


const mapDispatchToProps = dispatch => (bindActionCreators({
    //actions
},dispatch))

export default connect(mapStateToProps,mapDispatchToProps)(AnuntMic)