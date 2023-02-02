import React from 'react';
import Image from "next/image";
import styles from './index.module.scss'
import parrot from '../../../public/Parrot.svg'
import square from '../../../public/squre.png'
import iconInSquare from '../../../public/iconInSqu.png'

const Parrot = () => {
    return (
        <div className={styles.imagesContainer}>
            <Image className={styles.parrot} alt={'parrot'} src={parrot}/>
            <Image className={styles.square} alt={'square'} width={304} height={360} src={square}/>
            <Image className={styles.icon} alt={'icon'} src={iconInSquare}/>
            <div className={styles.members}>
                Members
                <p>29999</p>
            </div>
        </div>
    );
};

export {Parrot};