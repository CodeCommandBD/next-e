import React from 'react'
import Container from './containers/Container'
import Link from 'next/link'
import { logo } from '@/assets'
import Image from 'next/image'
import SocialLink from './SocialLink'
import Title from './Title'
import { navigation } from '@/constants'
import { BsEnvelopeAt } from 'react-icons/bs'
import { GrLocation } from 'react-icons/gr'

const Footer = () => {
  return (
    <div className='bg-white/50 w-full py-10 lg:py-20'>
      <Container className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-2' >
        <div className='flex flex-col gap-4'>
          <Link href={'/'}>
            <Image className='w-[60px]' src={logo} alt='logo'>
            </Image>
          </Link>
          <p className=''>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, voluptatibus?
          </p>
          <SocialLink iconstyle='bg-white text-primay border border-primay shadow-md p-3 text-lg cursor-pointer rounded-md hover:bg-purple-100'></SocialLink>
        </div>
        <div>
          <Title>My Account</Title>
          <div className='flex flex-col items-start py-3  gap-4 text-xs md:text-sm font-medium md:font-semibold'>
            {
              navigation?.map((navItem) => (
                <Link className='hover:text-primay transition-all duration-200' href={navItem?.href} key={navItem.title}>{navItem?.title}</Link>
              ))
            }
           
          </div>
        </div>
        <div>
          <Title>My Account</Title>
          <div className='flex flex-col items-start py-3  gap-4 text-xs md:text-sm font-medium md:font-semibold'>
            {
              navigation?.map((navItem) => (
                <Link className='hover:text-primay transition-all duration-200' href={navItem?.href} key={navItem.title}>{navItem?.title}</Link>
              ))
            }
           
          </div>
        </div>
        <div>
          <Title>Talk to us</Title>
          <div className='mt-3'>
            <div>
              <p className='text-sm'>Got Question? call us</p>
              <Title>+425578542</Title>
            </div>
            <div className='mt-3'>
              <p className='text-base flex items-center gap-x-3 text-gray-600'>
                <BsEnvelopeAt></BsEnvelopeAt>
                codeCommand.com
              </p>
              <p className='text-base flex items-center gap-x-3 text-gray-600'>
                <GrLocation></GrLocation>
                Dhaka, Bangladesh
              </p>
              
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Footer