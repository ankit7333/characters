import styles from './detail.module.scss'
import Loader from '../Loader'
import { useSelector } from 'react-redux' // is it use to extract data from redux store

export default function DetailView({onHandleClose}) {
    const isloading = useSelector((state) => state.character.isloading)
    const detail = useSelector((state) => state.character.isDetail)
    const splitTime = detail.created; // get data from created
    const dateGet = splitTime.split('T')[0]; // split data from created
    return (
        <>
        {
            isloading || !detail ? <Loader /> : (
                <div className={`${styles.detail}`}>
                    <figure key={detail.id}>
                        <img src={detail.image} alt={detail.name} />
                        <figcaption>
                            <button onClick={()=>onHandleClose()} className={`button ${styles.button__close}`}>X</button>
                            <div><span className={`${styles.key}`}>Charater Name :- </span><b>{detail.name}</b></div>
                            <div><span className={`${styles.key}`}>Status :-</span> <b className={`${detail.status === 'Alive' ? 'color__green' : detail.status === 'Dead' ? 'color__red' : 'color__grey'}`}>{detail.status}</b></div>
                            <div><span className={`${styles.key}`}>Species :-</span> <b>{detail.species}</b></div>
                            <div><span className={`${styles.key}`}>Location :-</span> <b>{detail.location.name}</b></div>
                            <div><span className={`${styles.key}`}>Origin :-</span> <b>{detail.origin.name}</b></div>
                            <div><span className={`${styles.key}`}>Gender :-</span> <b>{detail.gender}</b></div>
                            <div><span className={`${styles.key}`}>Created :-</span> <b>{dateGet}</b></div>
                            <div><span className={`${styles.key}`}>No of Episodes :- </span><b>{detail.episode.length}</b></div>
                        </figcaption>
                    </figure>
                </div>
            )
        }
        </>
    )
}