import { useEffect, useState } from "react";
import styles from './list.module.scss'
import Loader from '../Loader'

export default function ListView() {
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
        <>
        {
            isloading ? <Loader /> : (
                <div className={`${styles.list}`}>
                    {
                        results.map((value) => (
                            <figure key={value.id}>
                                <img src={value.image} alt={value.name} />
                                <figcaption>
                                    <h4>Charater Name :- {value.name}</h4>
                                    <div>No of Episodes :- {value.episode.length}</div>
                                    <div>Status :- {value.status}</div>
                                </figcaption>
                            </figure>
                        ))
                    }
                </div>
            )
        }
        </>
    )
}