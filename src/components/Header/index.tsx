import React from 'react';
import styles from './styles.module.scss'
import {Button, Logo} from "@/components";
import Link from "next/link";

const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Logo/>
                <div className={styles.headerLinks}>
                    <Link href={'/'}>Home</Link>
                    <Link href={'/'}>Our mission</Link>
                    <Link href={'/'}>Places</Link>
                    <Link href={'/'}>Team</Link>
                </div>
                <div style={{width: '145px'}}>
                    <Button>Apply</Button>

                </div>
            </div>
            <div className={styles.divider}></div>
        </div>

    );
};

export {Header};