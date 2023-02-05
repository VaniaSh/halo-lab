import React, {useState} from 'react';
import Logos from '../../../public/halo-logo.svg'
import Image from 'next/image'


const Logo = () => {
    const [toggleA, setToggleA] = useState(false)
    return (
        <div onClick={() => {
            setToggleA(!toggleA)
        }}>
            <Image src={Logos}
                   style={!toggleA ?{opacity: 1, transition: '2s'} : {transform: 'rotate(0.5turn)', opacity: 0, transition: '2s'}}
                   width={111}
                   height={50}
                   alt={'logo'}
            />
        </div>
    );
};

export {Logo};