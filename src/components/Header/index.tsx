import React, {useState} from 'react';
import styles from './styles.module.scss'
import {Button, Logo} from "@/components";
import {RiMenu3Fill} from "react-icons/Ri";
import Link from "next/link";

const Header = () => {
    const [open, setOpen] = useState(false);
    console.log(open)

    return (
        <>
            <div className={styles.headerContainer}>
                <div className={styles.headerContent}>
                    <Logo/>
                    <div className={styles.headerLinks}>
                        <Link scroll={false} href={'/'}>Home</Link>
                        <Link scroll={false} href={'#our_missions'}>Our mission</Link>
                        <Link scroll={false} href={'#places'}>Places</Link>
                        <Link scroll={false} href={'#team'}>Team</Link>
                    </div>
                    <div className={styles.headerButton}>
                        <Button>Apply</Button>
                    </div>
                    <RiMenu3Fill className={styles.icon} size={35} onClick={() => {
                        setOpen(!open)
                    }}/>

                </div>
                <div className={styles.divider}></div>
                 <div style={open ? {height: 500, opacity: 1} : {height: 0, opacity: 0}} className={`${styles.BurgerContainer} ${open ? styles.BurgerContainerOpen: ''}`}>
                     <div className={`${styles.BurgerLink}`}>
                         <Link scroll={false} href={'/'}>Home</Link>
                         <Link scroll={false} href={'#our_missions'}>Our mission</Link>
                         <Link scroll={false} href={'#places'}>Places</Link>
                         <Link scroll={false} href={'#team'}>Team</Link>
                     </div>

                    <div style={{width: '60%', margin: '0 auto'}}>
                        <Button>Apply</Button>
                    </div>
                </div>
            </div>


        </>


    )
        ;
};

export {
    Header
};