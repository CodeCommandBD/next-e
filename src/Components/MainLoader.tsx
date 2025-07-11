import React from 'react'
import Container from './containers/Container'
import Image from 'next/image'
import { logo } from '@/assets'



const MainLoader = () => {
  return (
    <Container className='w-full  min-h-screen flex  flex-col items-center justify-center absolute bg-white top-0 left-0 z-50'>
      <div className=" w-[150px] p-4 rounded-lg flex  items-center justify-center relative">
        <Image src={logo} alt='logo' priority className='h-auto object-contain'></Image>
      </div>
      <span className='w-14 h-14 flex flex-col borer-8 border-primay rounded-full relative'>
        <span className='w-14 h-14 border-8 border-r-purple-200 border-b-purple-200 border-t-purple-500 border-l-purple-200 rounded-full absolute -top-2 -left-2 animate-spin'>
        </span>
      </span>
        <p className='mt-5 text-lg text-center font-semibold  tracking-wide'>Loading....</p>
    </Container>
  )
}

export default MainLoader