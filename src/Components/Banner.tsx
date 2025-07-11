import React from 'react'
import Container from './containers/Container'
import { banner } from '@/constants'
import Image from 'next/image' 
import { GoArrowRight } from 'react-icons/go'
import Button from './Button'

const Banner = () => {
    return (
        <div className='bg-secondary py-20 text-white '>
            <Container className='p-2 flex flex-col md:flex-row md:items-center justify-center'>
                <div className='flex flex-col gap-5'>
                    <p className='text-base font-semibold'>{banner?.priceText}</p>
                    <h1 className='text-5xl font-bold max-w-[500px]'>{banner?.title}</h1>
                    <p className='text-lg font-bold'>{banner?.textOne} <span className='text-yellow-400 mx-1'>{banner?.offerPrice}</span> {banner?.textTwo}</p>
                    <Button href={banner?.buttonLink} className=' flex items-center w-32 px-0 justify-center text-sm font-semibold py-3 border border-transparent hover:border-white/40 transition-all duration-200 rounded-md gap-2'>ShopNow <GoArrowRight className='text-lg'></GoArrowRight>
                    </Button>
                </div>
                <Image src={banner?.image} alt='bannerImage' priority></Image>
            </Container>
        </div>
    )
}

export default Banner