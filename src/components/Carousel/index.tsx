import React, {useState} from 'react';
import Carousel from "react-elastic-carousel";
import Item from "@/components/Carousel/Item";
import img1 from '../.././../public/slider/slider1.png'
import img2 from '../.././../public/slider/slider2.png'
import img3 from '../.././../public/slider/slider3.png'
import img4 from '../.././../public/slider/slider4.png'
import img5 from '../.././../public/slider/slider5.png'

const breakPoints = [
    {width: 1, itemsToShow: 1},
    {width: 550, itemsToShow: 2},
    {width: 768, itemsToShow: 3},
    {width: 1200, itemsToShow: 3},
];
const SliderItems = [
    {
        imageUrl: img1,
        alt: '',
        title: 'Avoid plastic',
        desc: 'Plastic is a non-biodegradable material that can take hundreds of years to break down in the environment'
    },
    {
        imageUrl: img2,
        alt: '',
        title: 'Choose organic',
        desc: 'Organic products are free from harmful chemicals and pesticides, which can have negative effects on human health'
    },
    {
        imageUrl: img3,
        alt: '',
        title: 'Plant trees',
        desc: 'Trees have been shown to improve mental health and reduce stress, as well as provide shade and cooling, making outdoor spaces more enjoyable and livable.'
    },
    {
        imageUrl: img4,
        alt: '',
        title: 'Save watter',
        desc: 'Taking on the issue of ensuring access to safe water requires worldwide effort.'
    },
    {
        imageUrl: img5,
        alt: '',
        title: 'Save energy',
        desc: 'Energy production is a major contributor to greenhouse gas emissions, which are linked to global warming and climate change. '
    },
]
const SliderRs = () => {
    const [currentItem, setCurrentItem] = useState(0);
    const onCurrentChange = (current: any) => {
        setCurrentItem(current.index)
    }
    console.log(currentItem)
    return (
        <div id='places' style={{ marginTop: 192, height: '655px', backgroundColor: '#FFBD9E'}}>
            {/*// @ts-ignore*/}
            <Carousel autoTabIndexVisiblItems
                      onNextEnd={onCurrentChange}
                      onPrevEnd={onCurrentChange}
                      initialFirstItem={4}
                      infinite={true}
                      pagination={true}
                      showArrows={true}
                      breakPoints={breakPoints}
                      isRTL>
                {SliderItems.map(({imageUrl, desc,title, alt}, i) => {
                    const className = currentItem === i ? "active" : "";
                    return (
                        <Item title={title} desc={desc} imageSrc={imageUrl} alt={alt} key={i} className={className}/>
                    );
                })}
            </Carousel>
        </div>
    );
};

export {SliderRs};