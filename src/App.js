import { useEffect, useState } from "react";
import './styles/global.scss';
import ListView from './components/ListView'
function App() {
  const [results, setResults] = useState([]);
    const [isloading, setLoading] = useState(false);
    const [error, setError] = useState('');
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
            }
        }
        getCharaterDetails()
    },[])
  return (
    <div className="container">
      <ListView isloading={isloading} results={results} />
    </div>
  );
}

export default App;
