'use client'
import Image from 'next/image';
import React, { useState } from 'react'

interface Props {
    productimage: string[];
}


const ProductImages = ({ productimage }: Props) => {
    const [currentImage, setCurrentImage] = useState(productimage?.[0]);
    return (
        <div className='flex '>
            <div>
                {
                    productimage?.map((item,i)=>(
                        <Image 
                        src={item} 
                        alt='singleImage' 
                        key={i} 
                        width={200} 
                        height={200} 
                        className={`w-24 h-24 object-contain cursor-pointer opacity-80  transition-all duration-300 mb-2 p-1 ${currentImage === item && ' border border-gray-500 opacity-100 rounded-sm'}`}
                        onClick={()=>setCurrentImage(item)}
                        ></Image>
                    ))
                }

            </div>

            <div className='bg-purple-100 rounded-md ml-5 w-full max-h-[550px]'>
                <Image width={500} height={500} src={currentImage} alt='singleImage' className='w-full h-full object-contain'></Image>
            </div>
        </div>
    )
}

export default ProductImages