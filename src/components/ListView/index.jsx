import styles from './list.module.scss'
import Loader from '../Loader'

export default function ListView({
    isloading,
    results
}) {
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