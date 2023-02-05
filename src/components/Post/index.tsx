import React, {FC, forwardRef, useState} from 'react';
import {PostProps} from "@/components/Post/type";
import styles from './index.module.scss';
import {AiFillMinusCircle, AiFillPlusCircle} from "react-icons/ai";
import {motion} from "framer-motion";

const Post: FC<PostProps> = forwardRef(({title, description, isOpen}, ref: any) => {
    const [open, setIsOpen] = useState(false)
    return (
        <div className={styles.postContainer} ref={ref}>
            <div className={styles.postContainerTitle}>
                <h1>{title}</h1>
                {open ?
                    <AiFillMinusCircle onClick={() => setIsOpen(!open)} size={40} color={'#F2726C'}/>
                    :
                    <AiFillPlusCircle onClick={() => setIsOpen(!open)} size={40} color={'#F2726C'}/>}

            </div>

            <div className={`${styles.postDescription} ${open ? styles.postDescriptionOpen : ''}`}>
                {description}
            </div>

            <hr/>
        </div>
    );
});

export const MPost = motion(Post)
export {Post};
// AiFillPlusCircle
