import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import useClasses from './modaleCss'
import {testImage, xIcon} from '../../Images'
import {Box, TextField, Input} from '@material-ui/core'
import Scrollbar from "react-scrollbars-custom";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';


function ContinutModalAnunt(props){
    const classes = useClasses()
    const [categorie, setCategorie] = React.useState('');
    const [open, setOpen] = React.useState(false);

    return(
        <>
        <div className={classes.modalHeader}>
            <Box className={classes.titluAdaugaAnunt}>
                Adaugare anunt
            </Box>
            <img onClick={props.handleClose} src={xIcon} alt="close icon"/>
        </div>
        <Box className={classes.priceCategory}>
            <div className={classes.modalPret}>
                <Input disableUnderline className={classes.pretInput} placeholder="Pret"/>
            </div>
            <Select classes={{selectMenu: classes.zIndexMax, select:classes.zIndexMax, root:classes.zIndexMax}} className={classes.modalCategorie} open={open} onClose={() => setOpen(false)} onOpen={() => setOpen(true)} value={categorie} onChange={e => setCategorie(e.target.value)} >
                <MenuItem className={classes.zIndexMax} value={"Auto Moto"}>Auto Moto</MenuItem>
                <MenuItem className={classes.zIndexMax} value={"Matrimoniale"}>Matrimoniale</MenuItem>
                <MenuItem className={classes.zIndexMax} value={"Timp liber si sport"}>Timp liber si sport</MenuItem>
            </Select>
        </Box>
        <div className={classes.modalAttributes}>
            <div className={classes.modalAttribute}>
                <div className={classes.modalAttributeTitle} style={{borderTopLeftRadius:'4px',color:'#f35'}}>
                    {"Brand"}
                </div>
                <div className={classes.modalAttributeTitle} style={{borderBottomLeftRadius:'4px'}}>
                    {"Stare"}
                </div>
            </div>
            <div className={classes.modalAttribute} style={{width: '100%'}}>
                <div className={classes.modalAttributeText} style={{borderBottom:'1px solid rgba(42,42,42,.15)',color:'#f35'}}>
                    {"Lectus quis tincidunt"}
                </div>
                <div className={classes.modalAttributeText}>
                    {"Donecc nibh magna"}
                </div>
            </div>
        </div>
        <p className={classes.modalTitluAnunt}>
            {"Integet neque felis, vegicula non tempor"}
        </p>
        <Box className={classes.modalImages}>
            <div className={classes.modalImagesBadge}>{"+1"}</div>
            <img alt="imagine testare" src={testImage} />
            <img alt="imagine testare" src={testImage} />
            <img alt="imagine testare" src={testImage} />
        </Box>
        <p className={classes.modalTitluDescriere}>
            {"Descriere produs"}
        </p>
        <Scrollbar className={classes.modalDescriereText}>
            {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a dolor non leo mattis porta. Quisque quis risus vestibulum, viverra velit eu, ultricies dolor. Donec sagittis et elit at efficitur. Donec euismod metus et tempor luctus. Integer nunc arcu, eleifend a ornare vel, varius vel sem. Sed volutpat libero arcu, a pharetra mi aliquet a. Nunc ac vulputate lacus, efficitur posuere nulla. Integer lacinia in lorem in imperdiet. In porta vestibulum metus, nec suscipit enim accumsan vitae. Proin a fringilla diam. Quisque elementum, turpis eu semper fermentum, elit nulla pharetra sapien, at ullamcorper metus sapien quis velit."}
            {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a dolor non leo mattis porta. Quisque quis risus vestibulum, viverra velit eu, ultricies dolor. Donec sagittis et elit at efficitur. Donec euismod metus et tempor luctus. Integer nunc arcu, eleifend a ornare vel, varius vel sem. Sed volutpat libero arcu, a pharetra mi aliquet a. Nunc ac vulputate lacus, efficitur posuere nulla. Integer lacinia in lorem in imperdiet. In porta vestibulum metus, nec suscipit enim accumsan vitae. Proin a fringilla diam. Quisque elementum, turpis eu semper fermentum, elit nulla pharetra sapien, at ullamcorper metus sapien quis velit."}
        </Scrollbar>
        <Box className={classes.modalNrTelefon}>
            {"0760548262"}
        </Box>
        </>
    )  
}

const mapStateToProps = (state) =>{

    return{
    }
}


const mapDispatchToProps = dispatch => (bindActionCreators({
    //actions
},dispatch))

export default connect(mapStateToProps,mapDispatchToProps)(ContinutModalAnunt)