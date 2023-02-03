import React from 'react';
import styles from './styles.module.scss'

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.footerContacts}>
                <h1 className={styles.footerTitle}>Contacts</h1>
                <p>2019 Rootz Foundation. <br/>All rights reserved</p>
            </div>
            <div className={styles.footerHeadquarters}>
                <h1 className={styles.footerSubTitle}>Headquarters</h1>
                <p>1234 Taliban.<br/> Los Angeles, La 1234567. <br/>(123) 456-7890</p>
            </div>
            <div className={styles.footerHeadquarters}>
                <h1 className={styles.footerSubTitle}>Social media</h1>
            </div>
        </div>
    );
};


export { Footer };