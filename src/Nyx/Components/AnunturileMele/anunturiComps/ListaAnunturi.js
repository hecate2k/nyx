import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import useClasses from '../../Anunturi/anunturiCss'
import {Box, Button} from '@material-ui/core'
import Anunt from './Anunt'
import useBeforeFirstRender from '../../../Utils/useBeforeFirstRender'
import CircularProgress from '@material-ui/core/CircularProgress'
import {setClickedId,getAnunturi,setAnuntId,setPaginationValue,getNrAnunturi, getAnunturiCategorie,resetPagination, resetAnunturi} from '../../../Actions'
import {selectAnuntId,selectAnuntData } from '../../../Selectors'
import {AnuntModal} from '../../ContinutModale'
import Rodal from 'rodal'
import 'rodal/lib/rodal.css'
import Pagination from '@material-ui/lab/Pagination'
import {useParams} from 'react-router-dom'
import PaginationItem from '@material-ui/lab/PaginationItem'
import {Link } from 'react-router-dom'
import {menuItems} from '../../../Utils'
import navigate from '../../../Navigation/navigate'
import { noData } from '../../../Images'

function ListaAnunturi(props){
    const classes = useClasses()
    const {didUpdate,setClickedId,resetPagination,adsPerPage,nrAds,getAnunturiCategorie,numeCategorie, getNrAnunturi,currentPage,setPaginationValue,getAnunturi, anunturi, isLoading, setAnuntId, anuntId, anunt,nrAnunturi} = props
    const [archived, setArchived] = React.useState(false);
    const handleArchived = value => () =>{
        resetPagination()
        setArchived(value)
    }
    var modalWidth  = window.innerWidth - 30
    var modalHeight  = window.innerHeight - 30;
    
    let timeout=0
    let decreaseTimeoutBy = 0
    const seteazaIdAnunt = id => () => {
        setAnuntId(id)
    }

    const seteazaIdAnuntulMeu = id => () =>{
        setClickedId(id)
    }
    const renderListaAnunturi = (anunturi)  =>  {
        if(!anunturi.length)
            return <Box className={classes.categorieNoData}>
                <img className={classes.noDataImage} src={noData}/>
                <p className={classes.noDataText}>Momentan nu sunt publicate anunturi in aceasta categorie.</p>
            </Box>
        return anunturi.map((date) => {
                timeout += 500 - decreaseTimeoutBy;
                decreaseTimeoutBy +=50;
                return(
                    <Anunt archived={archived} setId={seteazaIdAnuntulMeu(date.id)} onClick={seteazaIdAnunt(date.id)} anuntID={date.id} timeout={timeout} {...date} key={date.id}/>
                )
            })
    }



    const changePage = (event,value) => {
        setPaginationValue({currentPage:value})
        setPaginationValue({offset:(value - 1)*adsPerPage})
        getAnunturiCategorie(adsPerPage,(value - 1)*adsPerPage,numeCategorie)
        
    }

    

    React.useEffect((event) => {
        // resetAnunturi()
        resetPagination()
        if(archived){
            setPaginationValue({categorie:'anunturilemelearhivate'})
            getNrAnunturi('anunturilemelearhivate')
        } 
        else{
            setPaginationValue({categorie:'anunturilemele'})
            getNrAnunturi('anunturilemele')
        }
        getAnunturiCategorie()
    },[numeCategorie,archived,didUpdate])
    let test = 0
    useBeforeFirstRender(() => {
        setPaginationValue({categorie:'anunturilemele'})
        test = getNrAnunturi('anunturilemele')
    })
    const nrPagini = Math.ceil(nrAds / adsPerPage)
    
    return(
        <>
        <Box className={classes.listaAnunturi} >
            {
                isLoading?
                <Box className={classes.loadingCircleBox}><CircularProgress color="secondary" /></Box>
                :
                <>
                    <Box className={classes.buttonBox}>
                        <Button className={!archived ? classes.buttonBoxButtonA : ''} onClick={handleArchived(false)} variant="contained">NE ARHIVATE</Button>
                        <Button className={archived ? classes.buttonBoxButtonA : ''} onClick={handleArchived(true)} variant="contained"> Arhivate</Button>
                    </Box>
                    {renderListaAnunturi(anunturi||[])}
                    {
                        nrPagini > 1 &&
                        <Box className={classes.paginationBox}>
                        <Pagination shape="rounded"
                        classes={{
                            root:classes.paginationRoot
                        }}
                        size="small"
                        defaultPage={1}
                        renderItem={item => (
                            <PaginationItem
                                classes={{
                                    selected: classes.selectedPage,
                                    sizeSmall: classes.smallSizePagination
                                }}
                            component={Link}
                            to={`/anunturi/anunturilemele${item.page === 1 ? '' : `/page=${item.page}`}`}
                            {...item}
                            />
                        )}
                        count={nrPagini} page={currentPage} onChange={changePage}/>
                    </Box>
                    }
                </>
            }
            <Rodal width={modalWidth}  height={modalHeight} visible={anuntId>0} onClose={seteazaIdAnunt(-1)}>
                    <AnuntModal {...anunt}/>
                </Rodal>
        </Box>
        </>
    )  
}

const mapStateToProps = (state) =>{

    return{
        anunt: selectAnuntData(state),
        anuntId: selectAnuntId(state),
        isLoading : state.anunturi.isLoading,
        anunturi: state.anunturi.anunturi,
        nrAnunturi: state.anunturi.anunturi.length,
        currentPage: state.pagination.currentPage,
        numeCategorie: state.pagination.categorie,
        nrAds: state.pagination.nrAds,
        adsPerPage: state.pagination.adsPerPage,
        offset: state.pagination.offset,
        didUpdate: state.temporary.didUpdate
    }
}


const mapDispatchToProps = dispatch => (bindActionCreators({
    //actions
    getAnunturi,
    setAnuntId,
    setPaginationValue,
    getNrAnunturi,
    getAnunturiCategorie,
    resetPagination,
    resetAnunturi,
    setClickedId,
},dispatch))

export default connect(mapStateToProps,mapDispatchToProps)(ListaAnunturi)