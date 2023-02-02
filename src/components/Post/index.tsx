import React, {FC, useState} from 'react';
import {PostProps} from "@/components/Post/type";
import styles from './index.module.scss';
import {AiFillMinusCircle, AiFillPlusCircle} from "react-icons/ai";

const Post: FC<PostProps> = ({title, description, isOpen}) => {
    const [open, setIsOpen] = useState(false)
    return (
        <div className={styles.postContainer}>
            <div className={styles.postContainerTitle}>
                <h1>{title}</h1>
                {open ?
                    <AiFillMinusCircle onClick={() => setIsOpen(!open)} size={40} color={'#F2726C'}/>
                    :
                    <AiFillPlusCircle onClick={() => setIsOpen(!open)} size={40} color={'#F2726C'}/>}

            </div>
            {
                <div className={`${styles.postDescription} ${open ? styles.postDescriptionOpen : ''}`}>
                    { description}
                </div>
            }
            <hr/>
        </div>
    );
};

export default Post;
// AiFillPlusCircle
