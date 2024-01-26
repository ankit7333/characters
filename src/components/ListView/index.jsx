import styles from './list.module.scss'
import Loader from '../Loader'
import Error from '../Error'

export default function ListView({
    isloading,
    results,
    onHandleDetail
}) {
    return (
        <>
        {
            isloading ? <Loader /> : (
                <div className={`${styles.list}`}>
                    {
                        results && results.length > 0 ? (
                            results.map((value) => (
                                <figure key={value.id}>
                                    <img src={value.image} alt={value.name} />
                                    <figcaption>
                                        <div>Charater Name :- <b>{value.name}</b></div>
                                        <div>Status :- <b className={`${value.status === 'Alive' ? 'color__green' : value.status === 'Dead' ? 'color__red' : 'color__grey'}`}>{value.status}</b></div>
                                        <div>
                                            <button className={`button button__primary`} onClick={() => onHandleDetail(value)}>More About {value.name}</button>
                                        </div>
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