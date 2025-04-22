'use client'

import { useState } from 'react';
import Image from "next/image";

const ImagePiker = ({ imageArray }: { imageArray: string[] }) => {


    if (!imageArray || imageArray.length === 0) return null;

    const [activeIndex, setActiveIndex] = useState(0);

    function handleImageClick(index: number) {
        setActiveIndex(index);
    }

    return (
        <div className="h-[360px] flex flex-row space-x-4">
            <div className="h-full w-[303px] flex items-center justify-center bg-[#F2F5FF]">
                <Image
                    src={imageArray[activeIndex]}
                    alt={`Main Image ${activeIndex}`}
                    width={250}
                    height={250}
                    className="object-contain"
                />
            </div>

            <div className="grid grid-cols-2 gap-2 w-[303px]">
                {imageArray.length !== 1  ? imageArray.map((imgUrl, index) => (
                    <button
                        key={index}
                        onClick={() => handleImageClick(index)}
                        className={`flex items-center justify-center bg-[#F2F5FF] ${
                            index === activeIndex ? 'ring-2 ring-[#AF367B]' : ''
                        }`}
                    >
                        <Image
                            src={imgUrl}
                            alt={`Thumbnail ${index}`}
                            width={100}
                            height={100}
                            className="object-contain"
                        />
                    </button>
                )) : null }
            </div>
        </div>
    );
};

export default ImagePiker;
