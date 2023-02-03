import React, {useState} from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';
import styles from './index.module.scss'
import img1 from '../../../public/slider/slider1.png'
import img4 from '../../../public/slider/slider4.png'
import img2 from '../../../public/slider/slider2.png'
import img3 from '../../../public/slider/slider3.png'
import img5 from '../../../public/slider/slider5.png'
import {SliderItem} from "@/components/SliderElement";

// const handleDragStart = ({e}: any) => e.preventDefault();
//
// const items = [
//     <Image alt={'sds'} src={img1} onDragStart={handleDragStart} role="presentation"/>,
//     <Image alt={'sds'} src={img2} onDragStart={handleDragStart} role="presentation"/>,
//     <Image alt={'sds'} src={img3} onDragStart={handleDragStart} role="presentation"/>,
//     <Image alt={'sds'} src={img4} onDragStart={handleDragStart} role="presentation"/>,
//     <Image alt={'sds'} src={img5} onDragStart={handleDragStart} role="presentation"/>,
//
//
// ];
//
// const CustomSlider = () => {
//     return (
//         <div className={styles.slider}>
//             <AliceCarousel responsive={{
//                 0: {
//                     items: 1,
//                 },
//                 1024: {
//                     items: 3,
//                     itemsFit: 'contain',
//                 }
//             }} mouseTracking activeIndex={3} items={items}/>
//         </div>
//     );
// }
// export {CustomSlider}
const images = [
    {src: img1, alt: 1},
    {src: img2, alt: 2},
    {src: img3, alt: 3},
    {src: img4, alt: 4},
    {src: img5, alt: 5},
];

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const CustomSlider = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(1);
    const [activeImages, setActiveImages] = useState(images.slice(0, 3))
    const [shift, setShift] = useState('0')
    const [first, setFirst] = useState(true)
    const [anim, setAnim] = useState(false)
    const [aanim, setAanim] = useState(false)


    const handlePrevClick = () => {
        setAnim(true)
        setAanim(true)
        setFirst(false)
        let nexIDX = (currentImageIndex + images.length - 1) % images.length
        let tmp = [images[(nexIDX + images.length - 1) % images.length], ...activeImages].slice(0, 4)
        setActiveImages(tmp)

        sleep(300).then(() => setShift('-45%'))
        console.info(tmp)
        sleep(1000).then(() => setAnim(false))

        sleep(2000).then(() => {
            tmp.pop()
            setActiveImages(tmp)
            setCurrentImageIndex(nexIDX);
            setShift('0')
            setFirst(true)
            setAanim(false)


        })
    };

    const handleNextClick = () => {
        setAnim(true)
        setAanim(true)

        let nexIDX = (currentImageIndex + 1) % images.length
        let tmp = [...activeImages, images[(nexIDX + 1) % images.length]].slice(0, 4)
        setActiveImages(tmp)
        setCurrentImageIndex(nexIDX);

        sleep(300).then(() => setShift('-42%'))
        console.info(tmp)
        sleep(1000).then(() => setAnim(false))
        sleep(2000).then(() => {
            tmp.shift()
            setActiveImages(tmp)
            setShift('0')
            setAanim(false)

        })

    };

    return (
        <>
            <div className={styles.slider}>
                <div className={styles.sliderContent} style={{
                    ...(shift !== '0' ? {
                        transition: 'all 1s',
                        transitionDelay: '.2s',
                        ...(first ? {marginLeft: shift} : {marginRight: shift})
                    } : {})
                }}>
                    {first ? <div></div> : null}
                    {[...activeImages].map((image, index) => (
                        <div style={{
                            height: '35vh',
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 auto'
                        }}>
                            <SliderItem anim={anim}
                                        aanim={aanim}
                                        currentImageIndex={currentImageIndex}
                                        title={'test'}
                                        desc={'test'}
                                        alt={image.alt}
                                        img={image.src}/>
                            {/*<Image*/}
                            {/*    style={{*/}
                            {/*        transition: anim ? 'all 1s' : '',*/}
                            {/*        opacity: currentImageIndex === image.alt -1 ? '1' : '.2',*/}
                            {/*        transform: currentImageIndex === image.alt - 1 ? 'scale(1.2)' : 'scale(1)',*/}
                            {/*        // width: index == 1 ? '100%' : '100%',*/}
                            {/*        objectFit: 'contain',*/}

                            {/*    }}*/}
                            {/*    src={image.src} alt={`${image.alt}`}/>*/}
                        </div>
                    ))}
                </div>
            </div>
            <button onClick={handlePrevClick}>Prev</button>
            <button onClick={handleNextClick}>Next</button>

        </>
    );
};

export {CustomSlider};





