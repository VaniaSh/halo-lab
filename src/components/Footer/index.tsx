import React from 'react';
import styles from './styles.module.scss'
import {AiFillGithub, AiFillLinkedin, AiFillTwitterCircle} from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.footerContacts} style={{gridArea: 'a'}}>
                <h1 className={styles.footerTitle}>Contacts</h1>
                <p>2019 Rootz Foundation. All rights reserved</p>
            </div>
            <div className={styles.footerHeadquarters} style={{gridArea: 'b'}}>
                <h1 className={styles.footerSubTitle}>Headquarters</h1>
                <p>1234 Taliban.<br/> Los Angeles, La 1234567. <br/>(123) 456-7890</p>
            </div>
            <div className={styles.footerHeadquarters} style={{gridArea: 'c'}}>
                <h1 className={styles.footerSubTitle}>Social media</h1>
                <div>
                    <Link href={'https://github.com/VaniaSh/'}>
                        <AiFillGithub color={'#333333'} size={32}/>
                    </Link>
                    <Link href={'/https://www.linkedin.com/in/vania-shepetko-255144214/'}>
                        <AiFillLinkedin color={'#333333'} size={32}/>
                    </Link>
                    <Link href={'/https://twitter.com/'}>
                        <AiFillTwitterCircle color={'#333333'} size={32}/>
                    </Link>

                </div>
            </div>
        </div>
    );
};


export { Footer };