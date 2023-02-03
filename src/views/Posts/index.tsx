import React, {useState} from 'react';
import styles from './styles.module.scss'
import {Button, Post} from "@/components";

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
        <div className={styles.postsContainer}>
            <div className={styles.postsText}>
                <h1>Ready to Get started?</h1>
                <p>When pattern is mentioned in interior design, it is easy to asso- ciate it with a geometric patterned
                    wallpaper or colourful prints on interior fabrics.
                </p>
                <Button className={styles.postsButton}>Contact Us</Button>
            </div>
            <div className={styles.posts}>
                {post.map(({title, description, id, isOpen}) => (
                    <Post isOpen={isOpen} key={id} title={title} description={description}/>
                ))}
            </div>
        </div>
    );
};

export default Posts;