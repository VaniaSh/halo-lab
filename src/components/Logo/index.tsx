import React from 'react';
import Logos from '../../../public/halo-logo.svg'
import Image from 'next/image'


const Logo = () => {
    return (
        <div>
            <Image src={Logos}
                   width={111}
                   height={50}
                   alt={'logo'}
            />
        </div>
    );
};

export {Logo};