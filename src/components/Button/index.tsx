import React, {FC, useEffect, useState} from 'react';
import {ButtonProps} from './type'
import styles from './index.module.scss'

const Button: FC<ButtonProps> = ({children, className}) => {
    const [btnStyles, setBtnStyle] = useState<string>('');
    useEffect(() => {
        setBtnStyle(
            [styles.button, className ? className : ''].join(' ')
        );
    }, []);
    return (
        <button className={btnStyles}>
            {children}
        </button>
    );
};

export {Button};