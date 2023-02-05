import React, {FC, forwardRef, useEffect, useState} from 'react';
import {ButtonProps} from './type'
import styles from './index.module.scss'
import {motion} from "framer-motion";

const Button: FC<ButtonProps> = forwardRef (({children, disabled, onClick, className},ref:any) => {
    const [btnStyles, setBtnStyle] = useState<string>('');
    useEffect(() => {
        setBtnStyle(
            [styles.button, className ? className : ''].join(' ')
        );
    }, []);
    return (
        <button
            ref={ref}
            disabled={disabled}
            onClick={onClick}
            className={btnStyles}
        >
            {children}
        </button>
    );
});
export const MButton = motion(Button)
export {Button};