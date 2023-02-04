import React from 'react';
import styles from './styles.module.scss'
import text from '../../../public/text.svg'
import {Header, Parrot, TextInput} from "@/components";
import Image from "next/image";

const GreetingView = () => {
    return (
        <div className={styles.greetingContainer}>
            <Header/>
            <div className={styles.greetingContent}>
                <div className={styles.images}>
                    <Image className={styles.textImg} src={text} alt={'some text'}/>
                    <div className={styles.underImgContent}>
                        <p>The scale of the challenges facing our planet can seem daunting, but we can all do
                            something.</p>
                        <TextInput
                            isButton
                            placeholder={'Find the place to help'}
                            name={'simple'}
                            onChange={() => {
                            }}/>
                    </div>

                </div>
                <Parrot/>

            </div>
        </div>
    );
};

export default GreetingView;