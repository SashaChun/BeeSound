'use client'

import { useState } from 'react';
import dots from '../../../asets/dots.png';
import dots1 from '../../../asets/61ETx+hCkWL 1.png';
import dots2 from '../../../asets/Wireless-Headphones-Free-PNG-Image.png';
import Image from "next/image";

const imageArray = [
    { img: dots },
    { img: dots1 },
    { img: dots2 },
    { img: dots },
];

const ImagePiker = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    function handleImageClick(index: number) {
        setActiveIndex(index);
    }

    return (
        <div className="h-[360px] flex flex-row space-x-4">
            <div className="h-full w-[303px] flex items-center justify-center bg-[#F2F5FF]">
                <Image
                    src={imageArray[activeIndex].img}
                    alt={`Main Image ${activeIndex}`}
                    width={250}
                    height={250}
                    className="object-contain"
                />
            </div>

            <div className="grid grid-cols-2 gap-2 w-[303px]">
                {imageArray.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => handleImageClick(index)}
                        className={`flex items-center justify-center bg-[#F2F5FF] ${
                            index === activeIndex ? 'ring-2 ring-[#AF367B]' : ''
                        }`}
                    >
                        <Image
                            src={item.img}
                            alt={`Thumbnail ${index}`}
                            width={100}
                            height={100}
                            className="object-contain"
                        />
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ImagePiker;
