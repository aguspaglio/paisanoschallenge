import React from 'react'
import styles from "./styles.module.scss";


const MenuMobile = ({children, handleClose}) => {
    return (
        <div className={styles.container}>
            <div className={styles.contentBody}>
                {children}
            </div>
            <div className={styles.overlayMobile} onClick={() => handleClose()}/>
        </div>
    )
}

export default MenuMobile
