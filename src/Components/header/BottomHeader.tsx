import { navigation } from '@/constants'
import React from 'react'
import Container from '../containers/Container'
import Link from 'next/link'

const BottomHeader = () => {
    return (
        <div className='border-b-[1px] border-gray-400 '>
            <Container className='p-2 flex items-center justify-between'>
                <div className='flex items-center  gap-4 text-xs md:text-sm font-medium md:font-semibold'>
                    {
                        navigation?.map((navItem) => (
                            <Link className='hover:text-primay transition-all duration-200' href={navItem?.href} key={navItem.title}>{navItem?.title}</Link>
                        ))
                    }
                    <Link className='hover:text-primay transition-all duration-200' href={'/signin'}>Please signin to view your cart</Link>
                </div>
                <p className='text-sm text-gray-500 font-medium hidden md:flex'>
                    Hotline:<span className='text-black tex-md font-medium'>
                    +0164758642</span>
                </p>
            </Container>
        </div>
    )
}

export default BottomHeader