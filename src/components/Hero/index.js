import React from 'react'
import { Link } from 'react-router-dom'
import simpsonsHero from '../../assets/img/allSimpsons_hero.png'
import titleHero from '../../assets/img/the_simpsons.png'
import styles from './styles.module.scss'

const Hero = () => {
    return (
        <div className={styles.containerHero}>
            <div className={styles.leftHero}>
                <h1>
                <img src={titleHero} alt="The Simpsons Title"/>
                </h1>
                <p>
                    + Have you been up all night writing code?
                    <br/>
                    - I think i'm blind.
                </p>
                <Link className={styles.btnHeroSearch }to="/search">Search Characters</Link>
            </div>
            <div className={styles.rightHero}>
                <img src={simpsonsHero} alt="All Simpsons Hero"/>
            </div>
        </div>
    )
}

export default Hero
