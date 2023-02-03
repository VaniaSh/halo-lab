import styles from './index.module.scss'
import Image from "next/image";
import {FC} from "react";
import {SliderItemProps} from "@/components/SliderElement/type";

const SliderItem: FC<SliderItemProps> = ({title, alt, img, desc, currentImageIndex, anim,aanim}) => {
    return (
        <div className={styles.slideItemContainer}>
            <div
                className={`${styles.slideItemContent} ${!anim && (currentImageIndex === alt - 1) ? styles.active : ''}`}>
                <Image
                    style={{
                        transition: aanim ? 'all 1s' : '',
                        // opacity: currentImageIndex === alt -1 ? '1' : '.2',
                        // transform: currentImageIndex === alt - 1 ? 'scale(1.2)' : 'scale(1)',
                        // width: index == 1 ? '100%' : '100%',
                        objectFit: 'contain',

                    }}

                    className={styles.slideItemContainerImage} alt={`${alt}`} src={img}/>
                <h1>{title}</h1>
                <p>{desc}</p>
            </div>
        </div>
    );
};

export {SliderItem};