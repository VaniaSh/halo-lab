import React from 'react';
import styles from './styles.module.scss'
import Image from "next/image";
import img1 from '../../../public/Screenshot 2023-02-03 at 07.29.04.png'
import img2 from '../../../public/Screenshot 2023-02-03 at 07.31.49.png'


const TeamView = () => {
    return (
        <div className={styles.teamContainer}>
            <div className={styles.teamGreeting}>
                <h1>Our top team</h1>
                <p>Learn more about how you can save our planet's nature. </p>
            </div>
           <div className={styles.teamImages}>
               <Image className={styles.img1} alt={'img1'} src={img2}/>
           </div>
        </div>
    );
};

export default TeamView;