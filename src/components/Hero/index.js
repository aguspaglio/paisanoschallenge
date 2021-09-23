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
                <img src={titleHero} alt="The Simpsons Title" data-aos="fade-right" data-aos-duration="1200"/>
                </h1>
                <p data-aos="fade-right" data-aos-duration="1200" data-aos-delay="200">
                    + Have you been up all night writing code?
                    <br/>
                    - I think i'm blind.
                </p>
                <Link data-aos="fade-right" data-aos-duration="1200" data-aos-delay="400" className={styles.btnHeroSearch} to="/search">Search Characters</Link>
            </div>
            <div className={styles.rightHero} data-aos="fade-left" data-aos-duration="1200" data-aos-delay="400">
                <img src={simpsonsHero} alt="All Simpsons Hero"/>
            </div>
        </div>
    )
}

export default Hero
