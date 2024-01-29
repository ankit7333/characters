import { useEffect } from "react";
import './styles/global.scss';
import { useSelector, useDispatch } from 'react-redux'
import { setResults, setIsLoading, setError, setIsDetail } from './store/characterSlice.js'
import { Route, Routes, useNavigate} from "react-router-dom";
import ListView from './components/ListView'
import DetailView from './components/DetailView'


function App() {
  const error = useSelector((state) => state.character.error) // maintain error state
  const dispatch = useDispatch() // useDispatch hook is a redux library 
  let navigate = useNavigate(); // navigation to navigate page
  
  // useeffect hook to run api call on initial render
  useEffect(function(){
      async function getCharaterDetails(){
          try{
              dispatch(setIsLoading(true)) // dispatch loader component before api getting load
              dispatch(setError('')) // dispatch error state
              const res = await fetch(`https://rickandmortyapi.com/api/character`);
              const data = await res.json();
              dispatch(setResults(data.results)) // dispatch result data from api
              dispatch(setIsLoading(false)) // dispatch loader component after api get load
              console.log(data.results)
          }catch(err){
              console.error(`Error`, error)
              dispatch(setError('Error fetching character')) // dispatch error state
              dispatch(setIsLoading(false)) // dispatch loader component before api load
          }
      }
      getCharaterDetails()
  },[error, dispatch])

    // onclick move to detail page
    function handleDetail(character){
      dispatch(setIsDetail(character))
      navigate(`/detailview`);
      console.log(character);
    }

    // onclose detail page back to listing page
    function handleClose(){
      navigate(-1)
    }

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<ListView onHandleDetail={handleDetail} />}/>
        <Route path="/detailview" element={<DetailView onHandleClose={handleClose} />}/>
      </Routes>
    </div>
  );
}

export default App;
