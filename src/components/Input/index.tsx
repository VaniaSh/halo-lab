import React, {FC} from 'react';
import {InputProps} from "@/components/Input/type";
import styles from './styles.module.scss'
import {Button} from "@/components";

const TextInput: FC<InputProps> = ({placeholder, isButton, height}) => {
    return (
        <div className={styles.inputGroup}>
            <input
                style={{height: height}}
                className={styles.input}
                type="text"
                name="input"
                placeholder={placeholder}
            />
            {
                isButton && <Button className={styles.button}>Search</Button>
            }
        </div>
    );
};

export {
    TextInput
};

