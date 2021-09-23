import React from 'react'
import Card from '../Card';
import styles from './styles.module.scss'

const Cards = ({simpsonsData}) => {
    return (
        <div className={styles.cardsContainer}>
            {simpsonsData.map((item, index) => {
                return (
                <Card index={index} key={index} item={item}/>
                );
            })}
        </div>
    )
}

export default Cards
