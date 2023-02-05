import React from 'react';
import styles from './styles.module.scss'
import text from '../../../public/text.svg'
import {Header, Parrot} from "@/components";
import Image from "next/image";
import {motion} from "framer-motion";
import {MTextInput} from "@/components/Input";
import {TextAnim} from "@/helpers/animations";


const GreetingView = () => {
    return (
        <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{amount: 0.2, once: true}}
            className={styles.greetingContainer}>
            <Header/>
            <div className={styles.greetingContent}>
                <div className={styles.images}>
                    <Image className={styles.textImg} src={text} alt={'some text'}/>
                    <div className={styles.underImgContent}>
                        <motion.p variants={TextAnim}
                        >The scale of the challenges facing our planet can seem daunting, but we can all do
                            something.
                        </motion.p>
                        <MTextInput
                            variants={TextAnim}
                            isButton
                            placeholder={'Find the place to help'}
                            name={'simple'}
                            onChange={() => {
                            }}/>
                    </div>

                </div>
                <Parrot/>

            </div>
        </motion.div>
    );
};

export default GreetingView;