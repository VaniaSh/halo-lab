import React, {FC, forwardRef, useState} from 'react';
import {InputProps} from "@/components/Input/type";
import styles from './styles.module.scss'
import {motion} from "framer-motion";
import {MButton} from "@/components/Button";
import {TextAnim} from "@/helpers/animations";

const TextInput: FC<InputProps> = forwardRef(({
                                                  email,
                                                  placeholder,
                                                  onChange,
                                                  readOnly,
                                                  value,
                                                  disabled,
                                                  name,
                                                  isButton,
                                                  height
                                              }, ref:any) => {
    // const [error, setError] = useState<string | undefined>(undefined);
    // //email validation
    // const isValidEmail = () => {
    //     let re;
    //     re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //     return re.test(String(value).toLowerCase());
    // };

    // const focusOut = () => {
    //     if (!isValidEmail()) {
    //         setError('Invalid Email');
    //     } else {
    //         setError(undefined);
    //     }
    // };
    return (
        <div className={styles.inputGroup}>
            <input
                ref={ref}
                // onBlur={email ? focusOut : undefined}
                style={{height: height}}
                className={styles.input}
                type="text"
                name={name}
                readOnly={readOnly}
                value={value}
                onChange={e => onChange(e.target.value)}
                disabled={disabled}
                placeholder={placeholder}
            />
            {/*<div className={styles.error}>*/}
            {/*    <div className={styles.parError}>{error}</div>*/}
            {/*</div>*/}
            {
                isButton && <MButton variants={TextAnim} className={styles.button}>Search</MButton>
            }
        </div>
    );
});
export const MTextInput = motion(TextInput);

export {TextInput};

