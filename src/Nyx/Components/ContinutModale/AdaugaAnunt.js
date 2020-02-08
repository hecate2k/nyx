import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import useClasses from './modaleCss'
import {noImage, xIcon} from '../../Images'
import {Box, Input, Button} from '@material-ui/core'
import Scrollbar from "react-scrollbars-custom";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import {setUploadData,openMeniu,closeMeniu,addImage,removeImage,enqueueSnackbar} from '../../Actions'
import Grow from '@material-ui/core/Grow';
import Modal from '@material-ui/core/Modal';

function ContinutModalAnunt(props){
    const classes = useClasses()
    // const [categorie, setCategorie] = React.useState('');
    const [modalStatus, setModalStatus] = React.useState(true);
    const {descriere,enqueueSnackbar,categorie,setUploadData,openMeniu,closeMeniu,meniu,brand,stare,imagini,addImage,removeImage,clickedIndex} = props
    console.log(categorie,"cat");
    
    const inF = React.createRef()
    const stergeImagine = (index) => {
        removeImage(index)
        enqueueSnackbar({
            message:'Imaginea a fost stearsa !',
            key: new Date().getTime() + Math.random(),
            options:{
                variant:"success"
            }
        })
    }
    const onChangeImage = (e) => {
        console.log(e.target.files[0],' IMAGINE')
        addImage(e.target.files[0])
      }

      const selectIndexAndDelete = (index) => {
        
      }

    const listaImagini = (imagini)  =>  {
        if(!imagini.length)
            return <Box className={classes.noAnunturi}>
                Apasa <Box className={classes.plusFigureButton}> + </Box> pentru a incarca imagini
            </Box>
        return imagini.map((date,index) => (
            <Grow in={true} key={index}>
                <Box className={classes.uploadAnuntImagine} >
                    <img className={classes.imagineUploadAnunt} src={imagini[index] && URL.createObjectURL(imagini[index])|| null}/>
                    <Button className={classes.uploadAnuntIcon} onClick={() => stergeImagine(index)} variant="contained">x</Button>
                </Box>
            </Grow>
          ))
    }


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
            <Select displayEmpty className={classes.modalCategorie} open={meniu === 'categorie'} onClose={() => closeMeniu()} onOpen={() => openMeniu('categorie')} value={categorie} onChange={e => setUploadData({categorie:e.target.value})} >
            <MenuItem style={{display: 'none'}} value="">Alege categoria</MenuItem>
                <MenuItem value={"Auto Moto"}>Auto Moto</MenuItem>
                <MenuItem value={"Matrimoniale"}>Matrimoniale</MenuItem>
                <MenuItem value={"Timp liber si sport"}>Timp liber si sport</MenuItem>
            </Select>
        </Box>
        <div className={classes.modalAttributes}>
            <div className={classes.modalAttribute}>
                <div className={classes.modalAttributeTitle} style={{borderTopLeftRadius:'4px',color:'#f35'}}>
                    Brand
                </div>
                <div className={classes.modalAttributeTitle} style={{borderBottomLeftRadius:'4px'}}>
                    Stare
                </div>
            </div>
            <div className={classes.modalAttribute} style={{width: '100%'}}>
                <Select displayEmpty disableUnderline className={[classes.modalAttributeText,classes.borderBottom].join(' ')} open={meniu === 'brand'} onClose={() => closeMeniu()} onOpen={() => openMeniu('brand')} value={brand} onChange={e => setUploadData({brand:e.target.value})} >
                    <MenuItem style={{display: 'none'}} value="">Alege brandul</MenuItem>
                    <MenuItem value={"Audi"}>Audi</MenuItem>
                    <MenuItem value={"Dacia"}>Dacia</MenuItem>
                    <MenuItem value={"Opel"}>Opel</MenuItem>
                </Select>
                <Select displayEmpty disableUnderline className={classes.modalAttributeText} open={meniu === 'stare'} onClose={() => closeMeniu()} onOpen={() => openMeniu('stare')} value={stare} onChange={e => setUploadData({stare:e.target.value})} >
                <MenuItem style={{display: 'none'}} value="">Alege starea produsului</MenuItem>
                    <MenuItem value={"Nou"}>Nou</MenuItem>
                    <MenuItem value={"Folosit"}>Folosit</MenuItem>
                </Select>
            </div>
        </div>
        <Box className={classes.modalTitluAnuntAdaugare}>
            <Input disableUnderline className={classes.titluInput} placeholder="Scrie aici titlul anuntului"/>
        </Box>
        <input  type="file" accept="image/*" onChange={onChangeImage} ref={inF} style={{display: 'none'}}/>
        <Box className={classes.uploadAnunturiContainer}>
            <Box className={classes.adaugaImaginiBox}>
                {listaImagini(imagini||[])}
            </Box>
            <Button className={classes.adaugaImagineButton} onClick={() => inF.current.click()} variant="contained">+</Button>
        </Box>
        <p className={classes.modalTitluDescriere}>
            Descriere produs
        </p>
        <Scrollbar classes={{content: classes.paddingDescriere}} className={classes.modalDescriereTextUpload}>
            {
                descriere === '' ? <Box onClick={() => setModalStatus(true)} className={classes.noDescriere}>Apasa aici pentru a adauga o descriere a produsului</Box>
                : {descriere}
            }
                        <Modal open={modalStatus} onClose={() => setModalStatus(false)}>
                            <Grow in={modalStatus}>
                                <div className={classes.descriereContainer}>
                                    <h3>Descriere produs: </h3>
                                <Input autoFocus className={classes.descriereInput} multiline fullWidth disableUnderline placeholder="Scrie aici descrierea produsului..."/>
                                </div>
                            </Grow>
                        </Modal>
        
        
        </Scrollbar>
        <Box className={classes.modalNrTelefon}>
            {"0760548262"}
        </Box>
        </>
    )  
}

const mapStateToProps = (state) =>{

    return{
        categorie: state.upload.categorie,
        meniu: state.upload.meniu,
        brand: state.upload.brand,
        stare: state.upload.stare,
        imagini: state.upload.imagini,
        clickedIndex:state.upload.clickedIndex,
        descriere: state.upload.descriere
    }
}


const mapDispatchToProps = dispatch => (bindActionCreators({
    //actions
    setUploadData,
    openMeniu,
    closeMeniu,
    addImage,
    removeImage,
    enqueueSnackbar,
},dispatch))

export default connect(mapStateToProps,mapDispatchToProps)(ContinutModalAnunt)