import React from 'react';
import styles from './styles.module.scss'
import {Button, TextInput} from "@/components";

const LoginView = () => {
    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginContent}>
                <div className={styles.loginText}>
                    <h1>
                        Get started today!
                    </h1>
                    <p>
                        Learn more about how you can save our planet's nature. From smart consumption to switching to
                        renewable energy, each of us can do our part to save the planet.
                    </p>
                </div>
                <div className={styles.loginForm}>
                    <div>
                        <h1 className={styles.loginFormTitle}>Log In</h1>
                        <div className={styles.loginFormContent}>
                            <TextInput height={48} placeholder={'Name'}/>
                            <TextInput height={48} placeholder={'Email'}/>
                            <Button className={styles.loginFormButton}>Book a Demo</Button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginView;