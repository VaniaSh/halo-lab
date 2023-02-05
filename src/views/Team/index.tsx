import React from 'react';
import styles from './styles.module.scss'
import {motion} from "framer-motion";
import {TextAnim} from "@/helpers/animations";


const TeamView = () => {
    return (
        <motion.div
            initial='hidden'
            whileInView='visible'
            className={styles.teamContainer}>
            <div className={styles.teamGreeting}>
                <motion.h1 variants={TextAnim}>Our top team</motion.h1>
                <motion.p variants={TextAnim}>Learn more about how you can save our planet's nature.</motion.p>
            </div>
            <div className={styles.teamImages}>
            </div>
        </motion.div>
    );
};

export default TeamView;