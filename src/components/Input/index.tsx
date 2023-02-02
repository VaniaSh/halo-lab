import React, {FC} from 'react';
import {InputProps} from "@/components/Input/type";
import styles from './styles.module.scss'
import {Button} from "@/components";

const TextInput: FC<InputProps> = ({placeholder}) => {
    return (
        <div className={styles.inputGroup}>
            <input
                className={styles.input}
                type="text"
                name="input"
                placeholder={placeholder}
            />
            <Button className={styles.button}>Search</Button>
        </div>
    );
};

export {
    TextInput
};

