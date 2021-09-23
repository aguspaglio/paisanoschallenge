import React from 'react'
import styles from './styles.module.scss';
import {ReactComponent as TwitterIcon} from '../../assets/svg/twitter.svg' ;
import {ReactComponent as InstagramIcon} from '../../assets/svg/instagram.svg' ;
import {ReactComponent as LinkedinIcon} from '../../assets/svg/linkedin.svg' ;
const Footer = () => {
    return (
            <footer>
                <div className={styles.footerContainer}>
                    <ul>
                        <li className={styles.phrase}>♡ Hecho con amor por Agustín Paglioriti</li>
                        <li className={styles.svgIcon}><a href="https://twitter.com/agustinpaglio" rel="noreferrer" target="_blank"><TwitterIcon/></a></li>
                        <li className={styles.svgIcon}><a href="https://instagram.com/aguspaglio" rel="noreferrer" target="_blank"><InstagramIcon/></a></li>
                        <li className={styles.svgIcon}><a href="https://www.linkedin.com/in/agustinpaglioriti/" rel="noreferrer" target="_blank"><LinkedinIcon/></a></li>
                    </ul>
                </div>
            </footer>
    )
}
export default Footer
