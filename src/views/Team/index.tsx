import React from 'react';
import styles from './styles.module.scss'
import Image from "next/image";
import img1 from '../../../public/img 1.png'
import img2 from '../../../public/img 2.png'
import img3 from '../../../public/img 3.png'

const TeamView = () => {
    return (
        <div className={styles.teamContainer}>
            <div className={styles.teamGreeting}>
                <h1>Our top team</h1>
                <p>Learn more about how you can save our planet's nature. </p>
            </div>
           <div className={styles.teamImages}>
               <Image className={styles.img1} alt={'img1'} src={img1}/>
               <Image className={styles.img2} alt={'img1'} src={img2}/>
               <Image className={styles.img3} alt={'img1'} src={img3}/>
           </div>
        </div>
    );
};

export default TeamView;