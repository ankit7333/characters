import styles from './list.module.scss'
import Loader from '../Loader'
import Error from '../Error'

import { useSelector } from 'react-redux' // is it use to extract data from redux store

export default function ListView({onHandleDetail}) {
    const isloading = useSelector((state) => state.character.isloading)
    const results = useSelector((state) => state.character.results)
    return (
        <>
        {
            isloading ? <Loader /> : (
                <div className={`${styles.list}`}>
                    {
                        results && results.length > 0 ? (
                            results.map((value) => (
                                <figure key={value.id}>
                                    <span className={`${styles.imgwrap}`}>
                                        <img src={value.image} alt={value.name} />
                                    </span>
                                    <figcaption>
                                        <div className={`${styles.figcaption__top}`}>
                                            <b className={`${styles.name}`}>{value.name}</b>
                                            <b className={`${value.status === 'Alive' ? 'color__green' : value.status === 'Dead' ? 'color__red' : 'color__grey'}`}>{value.status}</b>
                                            <p>{value.species}</p>
                                        </div>
                                        <button className={`button button__primary`} onClick={() => onHandleDetail(value)}>More Info</button>
                                    </figcaption>
                                </figure>
                            ))
                        ):(
                            <Error />
                        )
                    }
                </div>
            )
        }
        </>
    )
}