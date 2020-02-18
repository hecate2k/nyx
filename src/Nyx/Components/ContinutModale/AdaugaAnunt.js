import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import useClasses from './modaleCss'
import { xIcon, description, addAnunt, phoneIcon,questionMark} from '../../Images'
import {Box, Input, Button} from '@material-ui/core'
import Scrollbar from "react-scrollbars-custom";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import {setUploadData,openMeniu,closeMeniu,addImage,removeImage,enqueueSnackbar,tryUpload} from '../../Actions'
import Grow from '@material-ui/core/Grow';
import Modal from '@material-ui/core/Modal';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


function ContinutModalAnunt(props){
    const classes = useClasses()
    const [renderedOnce, setRenderedOnce] = React.useState(false)
    const [modalStatus, setModalStatus] = React.useState(false);
    const {tryUpload,telefon,telefonLogat,temporary,descriere,enqueueSnackbar,categorie,setUploadData,openMeniu,closeMeniu,meniu,brand,stare,imagini,addImage,removeImage} = props
    const [dialog,setDialog] = React.useState(false)
    // 
    const onChangeNumar = () => (e) => {
        const re = /^[0-9\s]*$/;
        if (re.test(e.target.value) && e.target.value.length <= 10) {
            setUploadData({telefon:e.target.value})
        }
     }
    const doSetRenderOnce = () => { //maybe no double arrow function
        (telefonLogat !='' && telefon == '') && setUploadData({telefon:telefonLogat})
        setRenderedOnce(true)
      }
    const inF = React.createRef()

    const stergeImagine = (index) => () => {
        removeImage(index)
        enqueueSnackbar({
            message:'Imaginea a fost stearsa !',
            key: new Date().getTime() + Math.random(),
            options:{
                variant:"success"
            }
        })
    }
    const onChangeImage = () => e => {
        console.log(e.target.files[0],' IMAGINE')
        addImage(e.target.files[0])
      }
      const inchideDescriere = () => () => {
        setUploadData({temporary:''})
        setModalStatus(false)
        setDialog(false)
      }
      const setDescriere = () => () => {
        (descriere === '' || descriere !='') && temporary !='' &&
        enqueueSnackbar({
            message: descriere === '' ? 'Ai adaugat o descriere !': 'Ai modificat descrierea produsului !',
            key: new Date().getTime() + Math.random(),
            options:{
                variant:"success"
            }
        })
        setUploadData({descriere:temporary})
        setModalStatus(false)
        setUploadData({temporary:''})
      }
      const clickInf = () => () => {
          inF.current.click()
      }
      const deschideDescriere = () => () => {
        setModalStatus(true)
      }
    const  seteazaUploadData = tip => e => {
        setUploadData({[tip]:e.target.value})
      }
      const deschideMeniu = tipMeniu => () => {
        openMeniu(tipMeniu)
      }
    const inchideMeniu = () => () => {
        closeMeniu()
    }
    const openDialog = value => () => {
        setDialog(value)
    }
    const incearcaUpload = () => () => {
        tryUpload()
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
                    <Button className={classes.uploadAnuntIcon} onClick={stergeImagine(index)} variant="contained">x</Button>
                </Box>
            </Grow>
          ))
    }


    return(
        <>
        <div className={classes.modalHeader}>
            <Box className={classes.h3Title}><img src={addAnunt}/>Adaugare anunt</Box>
            <img onClick={props.inchideModalul} src={xIcon} alt="close icon"/>
        </div>
        <Box className={classes.priceCategory}>
            <div className={classes.modalPret}>
                <Input onChange={seteazaUploadData('pret')} disableUnderline className={classes.pretInput} placeholder="Pret"/>
            </div>
            <Select displayEmpty className={classes.modalCategorie} open={meniu === 'categorie'} onClose={inchideMeniu()} onOpen={deschideMeniu('categorie')} value={categorie} onChange={seteazaUploadData('categorie')} >
            <MenuItem className={classes.displayNone} value="">Alege categoria</MenuItem>
                <MenuItem value={"Auto Moto"}>Auto Moto</MenuItem>
                <MenuItem value={"Matrimoniale"}>Matrimoniale</MenuItem>
                <MenuItem value={"Timp liber si sport"}>Timp liber si sport</MenuItem>
            </Select>
        </Box>
        <div className={classes.modalAttributes}>
            <div className={classes.attributeTitleBox}>
                <div className={classes.modalAttributeTitle}>
                    Brand
                </div>
                <div className={classes.modalAttributeTitle}>
                    Stare
                </div>
            </div>
            <div className={classes.modalAttribute}>
                <Select displayEmpty disableUnderline className={[classes.modalAttributeText,classes.borderBottom].join(' ')} open={meniu === 'brand'} onClose={inchideMeniu()} onOpen={deschideMeniu('brand')} value={brand} onChange={seteazaUploadData('brand')} >
                    <MenuItem className={classes.displayNone} value="">Alege brandul</MenuItem>
                    <MenuItem value={"Audi"}>Audi</MenuItem>
                    <MenuItem value={"Dacia"}>Dacia</MenuItem>
                    <MenuItem value={"Opel"}>Opel</MenuItem>
                </Select>
                <Select displayEmpty disableUnderline className={classes.modalAttributeText} open={meniu === 'stare'} onClose={inchideMeniu()} onOpen={deschideMeniu('stare')} value={stare} onChange={seteazaUploadData('stare')} >
                <MenuItem className={classes.displayNone} value="">Alege starea produsului</MenuItem>
                    <MenuItem value={"Nou"}>Nou</MenuItem>
                    <MenuItem value={"Folosit"}>Folosit</MenuItem>
                </Select>
            </div>
        </div>
        <Box className={classes.telefonBox}>
            <img className={classes.phoneIconUpload} alt="telephone icon" src={phoneIcon}/>
            Telefon:<Box className={classes.telefon}>
                        {
                            !renderedOnce &&
                            doSetRenderOnce()
                                
                            
                        }
                        <Input value={telefon} onChange={onChangeNumar()} disableUnderline className={classes.modalTelefonAnunt} placeholder="Ex: 0760537253"/>
                    </Box>
        </Box>
        <Box className={classes.modalTitluAnuntAdaugare}>
            <Input onChange={seteazaUploadData('titlu')} disableUnderline className={classes.titluInput} placeholder="Scrie aici titlul anuntului"/>
        </Box>
        <input  type="file" accept="image/*" onChange={onChangeImage()} ref={inF} className={classes.displayNone}/>
        <Box className={classes.uploadAnunturiContainer}>
            <Box className={classes.adaugaImaginiBox}>
                {listaImagini(imagini||[])}
            </Box>
            <Button className={classes.adaugaImagineButton} onClick={clickInf()} variant="contained">+</Button>
        </Box>
        <p className={classes.modalTitluDescriere}>
            Descriere produs
        </p>
        <Scrollbar classes={{content: classes.paddingDescriere}} className={classes.modalDescriereTextUpload}>
            <>
            {
                descriere === '' ? <Box className={classes.noDescriere}>
                                        <Box className={classes.firstLineTitle}>Deocamdata nu este nicio descriere pentru produs.</Box> 
                                        <Box className={classes.secondLineText}>apasa pe butonul de mai jos pentru a adauga una.</Box>
                                        <Button onClick={deschideDescriere(true)} variant="contained" className={classes.noDescriereButton}>
                                            Adauga descriere
                                        </Button>
                                    </Box>
                : <p onClick={deschideDescriere()} className={classes.descriereP}>{descriere}</p>
            }
            
                <Modal disableBackdropClick onBackdropClick={openDialog(true)} open={modalStatus} onClose={inchideDescriere()}>
                <Grow in={modalStatus}>
                    <div className={classes.descriereContainer}>
                        <Box className={classes.h3Title}><img src={description}/>Descriere produs: </Box>
                            {/* {descriere != '' && setUploadData({temporary:descriere})} */}
                            <Input defaultValue={descriere} onChange={seteazaUploadData('temporary')} autoFocus className={classes.descriereInput} multiline fullWidth disableUnderline placeholder="Scrie aici descrierea produsului..."/>
                            <Box className={classes.uploadDescriereButoane}>
                                <Button className={classes.uploadDescriereButonCancel} onClick={openDialog(true)}> Inchide </Button>
                                <Button onClick={setDescriere()} className={classes.uploadDescriereButonOk} variant="contained">
                                        {descriere === '' ? "Adauga" : "Modifica"}
                                </Button>
                        </Box>
                    </div>
                    </Grow>
                </Modal>
            
            </>
        </Scrollbar>
        <Box className={classes.adaugaAnuntFooter}>
            <Button onClick={props.inchideModalul} className={classes.anuleazaButton}>ANULEAZA</Button>
            <Button onClick={incearcaUpload()} className={classes.posteazaButton} variant="contained">POSTEAZA</Button>
        </Box>
        <Dialog open={dialog} onClose={openDialog(false)}>
            <Grow in={true}>
            <Box>
            <DialogTitle disableTypography className={classes.dialogModalMareTitle}><img alt="question mark image" src={questionMark}/>{"Esti sigur?"}</DialogTitle>
            <DialogContent>
            <DialogContentText>
                Modificarile facute nu vor fi salvate.
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={openDialog(false)}>
                Anuleaza
            </Button>
            <Button variant="contained" className={classes.iesiButon} onClick={inchideDescriere()}>
                Inchide
            </Button>
            </DialogActions>
            </Box>
            </Grow>
        </Dialog>
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
        descriere: state.upload.descriere,
        temporary: state.upload.temporary,
        telefon: state.upload.telefon,
        telefonLogat: state.login.telefon
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
    tryUpload
},dispatch))

export default connect(mapStateToProps,mapDispatchToProps)(ContinutModalAnunt)