import React, {FC, useState} from 'react';
import {InputProps} from "@/components/Input/type";
import styles from './styles.module.scss'
import {Button} from "@/components";

const TextInput: FC<InputProps> = ({
                                       email,
                                       placeholder,
                                       onChange,
                                       readOnly,
                                       value, disabled,
                                       name,
                                       isButton,
                                       height
                                   }) => {
    const [error, setError] = useState<string | undefined>('');

    const isValidEmail = () => {
        let re;
        re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(value).toLowerCase());
    };

    const focusOut = () => {
        if (!isValidEmail()) {
            setError('Invalid Email');
        } else {
            setError(undefined);
        }
    };
    return (
        <div className={styles.inputGroup}>
            <input
                onBlur={email ? focusOut : undefined}
                style={{height: height}}
                className={`${error ? styles.error : ''} ${styles.input}`}
                type="text"
                name={name}
                readOnly={readOnly}
                value={value}
                onChange={e => onChange(e.target.value)}
                disabled={disabled}
                placeholder={placeholder}
            />
            <div className={styles.error}>
                <div className={styles.parError}>{error}</div>
            </div>
            {
                isButton && <Button className={styles.button}>Search</Button>
            }
        </div>
    );
};

export {TextInput};

