import React from 'react';
import styles from './styles.module.scss'
import Image from "next/image";
import {motion} from "framer-motion";
import vec1 from '../../../public/Vector-1.png'
import vec2 from '../../../public/Vector.png'
import {MTextInput} from "@/components/Input";
import {MButton} from "@/components/Button";
import {TextAnim} from "@/helpers/animations";

const LoginView = () => {
    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginContent}>
                <div className={styles.loginText}>
                    <motion.h1 variants={TextAnim}>
                        Get started today!
                    </motion.h1>
                    <motion.p variants={TextAnim}>
                        Learn more about how you can save our planet's nature. From smart consumption to switching to
                        renewable energy, each of us can do our part to save the planet.
                    </motion.p>
                </div>
                <div className={styles.loginForm}>
                    <div>
                        <h1 className={styles.loginFormTitle}>Log In</h1>
                        <div className={styles.loginFormContent}>
                            <MTextInput onChange={() => {
                            }} name={'name'} height={48} placeholder={'Name'}/>
                            <MTextInput email={true} onChange={() => {
                            }} name={'email'} height={48} placeholder={'Email'}/>
                            <MButton className={styles.loginFormButton}>Book a Demo</MButton>
                        </div>
                    </div>
                </div>
                <div className={styles.loginFormVectors}>
                    <Image src={vec1} alt={'vec1'}/>
                    <Image className={styles.last} src={vec2} alt={'vec2'}/>
                </div>
            </div>
        </div>
    );
};

export default LoginView;