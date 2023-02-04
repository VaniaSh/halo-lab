import React from 'react';
import styles from './styles.module.scss'
import Image from "next/image";

const Item = ({imageSrc, clicker, className, title, desc, alt}: any) => {
    console.log(clicker,  'text >> ', title)
    return (
        <div className={`${styles.slideItemContainer}`}>
            <div
                className={styles.slideItemContent}>
                <Image
                    className={styles.slideItemContainerImage} alt={alt} src={imageSrc}/>
                <h1>{title}</h1>
            </div>
        </div>
    );
};

export default Item;