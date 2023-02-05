import React, {useState} from 'react';
import styles from './styles.module.scss'
import {MPost} from "@/components/Post";
import {motion} from "framer-motion";
import {PostAnim, TextAnim} from "@/helpers/animations";
import {MButton} from "@/components/Button";

const Posts = () => {
    const [post, setPost] = useState([
        {
            id: 1,
            title: 'What can I do to protect our planet?',
            description: 'Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources',
            isOpen: false,
        },
        {
            id: 2,
            title: 'How to save nature ecology?',
            description: 'Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources',
            isOpen: false,

        },
        {
            id: 3,
            title: 'What is nature conservation?',
            description: 'Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources',
            isOpen: false,

        },
    ])

    return (
        <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{amount: .2, once: true}}
            className={styles.postsContainer}>
            <div className={styles.postsText}>
                <motion.h1 variants={TextAnim}>Ready to Get started?</motion.h1>
                <motion.p variants={TextAnim}>When pattern is mentioned in interior design, it is easy to asso- ciate it
                    with a geometric patterned
                    wallpaper or colourful prints on interior fabrics.
                </motion.p>
                <MButton variants={TextAnim} className={styles.postsButton}>Contact Us</MButton>
            </div>
            <div className={styles.posts}>
                {post.map(({title, description, id, isOpen}, index) => (
                    <MPost variants={PostAnim} custom={index} isOpen={isOpen} key={id} title={title}
                           description={description}/>
                ))}
            </div>
        </motion.div>
    );
};

export default Posts;