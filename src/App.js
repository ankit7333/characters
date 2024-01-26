import { useEffect, useState } from "react";
import './styles/global.scss';
import ListView from './components/ListView'
import DetailView from './components/DetailView'
function App() {
  const [results, setResults] = useState([]);
  const [isloading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isDetail, setIsDetail] = useState(null);
    
  useEffect(function(){
      async function getCharaterDetails(){
          try{
              setLoading(true) 
              setError('')
              const res = await fetch(`https://rickandmortyapi.com/api/character`);
              const data = await res.json();
              setResults(data.results)
              setLoading(false) 
              console.log(data.results)
          }catch(err){
              console.error(`Error`, error)
              setError('Error fetching character')
              setLoading(false)
          }
      }
      getCharaterDetails()
  },[error])

    function handleDetail(character){
      setIsDetail(character)
      console.log(character);
    }

    function handleClose(){
      setIsDetail(null)
    }

  return (
    <div className="container">
      {!isDetail && <ListView onHandleDetail={handleDetail} isloading={isloading} results={results} />}
      { isDetail && <DetailView detail={isDetail} isloading={isloading} onHandleClose={handleClose} /> }
    </div>
  );
}

export default App;
