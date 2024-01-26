import styles from './detail.module.scss'
import Loader from '../Loader'

export default function DetailView({
    isloading,
    detail,
    onHandleClose
}) {
    const splitTime = detail.created;
    const dateGet = splitTime.split('T')[0];
    return (
        <>
        {
            isloading ? <Loader /> : (
                <div className={`${styles.detail}`}>
                    <figure key={detail.id}>
                        <img src={detail.image} alt={detail.name} />
                        <figcaption>
                            <button onClick={()=>onHandleClose()} className={`button ${styles.button__close}`}>X</button>
                            <div>Charater Name :- <b>{detail.name}</b></div>
                            <div>No of Episodes :- <b>{detail.episode.length}</b></div>
                            <div>Status :- <b className={`${detail.status === 'Alive' ? 'color__green' : detail.status === 'Dead' ? 'color__red' : 'color__grey'}`}>{detail.status}</b></div>
                            <div>Location :- <b>{detail.location.name}</b></div>
                            <div>Gender :- <b>{detail.gender}</b></div>
                            <div>Created :- <b>{dateGet}</b></div>
                        </figcaption>
                    </figure>
                </div>
            )
        }
        </>
    )
}