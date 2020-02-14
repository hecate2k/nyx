import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import useClasses from '../anunturiCss'
import {Box, Button} from '@material-ui/core'
import Anunt from './Anunt'
import useBeforeFirstRender from '../../../Utils/useBeforeFirstRender'
import CircularProgress from '@material-ui/core/CircularProgress'
import {getAnunturi,setAnuntId,setPaginationValue,getNrAnunturi, getAnunturiCategorie,resetPagination, resetAnunturi} from '../../../Actions'
import {selectAnuntId,selectAnuntData } from '../../../Selectors'
import {AnuntModal} from '../../ContinutModale'
import Rodal from 'rodal'
import 'rodal/lib/rodal.css'
import Pagination from '@material-ui/lab/Pagination'
import {useParams} from 'react-router-dom'
import PaginationItem from '@material-ui/lab/PaginationItem'
import {Link } from 'react-router-dom'


function ListaAnunturi(props){
    const classes = useClasses()
    const {offset,resetAnunturi,resetPagination,adsPerPage,nrAds,getAnunturiCategorie,numeCategorie, getNrAnunturi,currentPage,setPaginationValue,getAnunturi, anunturi, isLoading, setAnuntId, anuntId, anunt,nrAnunturi} = props
    const {categorie} = useParams()
    var modalWidth  = window.innerWidth - 30
    var modalHeight  = window.innerHeight - 30;
    
    let timeout=0
    let decreaseTimeoutBy = 0
    const renderListaAnunturi = (anunturi)  =>  {
        if(!anunturi.length)
            return <Box>Nu exista anunturi</Box>
        return anunturi.map((date) => {
                timeout += 500 - decreaseTimeoutBy;
                decreaseTimeoutBy +=50;
                return(
                    <Anunt onClick={() => setAnuntId(date.id)} timeout={timeout} {...date} key={date.id}/>
                )
            })
    }

    const changePage = (event,value) => {
        setPaginationValue({currentPage:value})
        setPaginationValue({offset:(value - 1)*adsPerPage})
        getAnunturiCategorie(adsPerPage,(value - 1)*adsPerPage,numeCategorie)
        
    }
    React.useEffect((event) => {
        resetAnunturi()
        resetPagination()
        getNrAnunturi(numeCategorie)
        getAnunturiCategorie()
    },[numeCategorie])
    const nrPagini = Math.ceil(nrAds / adsPerPage)
    // useBeforeFirstRender(() => {
        
    // })
    
    
    return(
        <>
        <Box className={classes.listaAnunturi} >
            {
                isLoading?
                <Box className={classes.loadingCircleBox}><CircularProgress color="secondary" /></Box>
                :
                <>
                    
                    {renderListaAnunturi(anunturi||[])}
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
                            to={`/anunturi/${item.page === 1 ? categorie+'' : categorie+`/page=${item.page}`}`}
                            {...item}
                            />
                        )}
                        count={nrPagini} page={currentPage} onChange={changePage}/>
                    </Box>
                </>
            }
            <Rodal width={modalWidth}  height={modalHeight} visible={anuntId>0} onClose={() => setAnuntId(-1)}>
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
        offset: state.pagination.offset
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
},dispatch))

export default connect(mapStateToProps,mapDispatchToProps)(ListaAnunturi)