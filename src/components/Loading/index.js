import React from 'react'
import rosquillaLoader from '../../assets/img/rosquilla_loader.png'
import styles from "./styles.module.scss";


const Loading = ({isFinished}) => {
    return (
        <div className={`${styles.containerLoader} ${isFinished && styles.finish}`}>
            <img className={styles.rosquillaLoader} src={rosquillaLoader} alt="Rosquilla"/>
        </div>
    )
}

export default Loading
