import React from 'react'
import Container from '../containers/Container'
import { logo } from '@/assets'
import Image from 'next/image'
import SearchInput from './SearchInput'
import Link from 'next/link'
import { LiaUser } from 'react-icons/lia'
import HeaderIcons from './HeaderIcons'
import MobileNavigation from './MobileNavigation'

const MiddleHeader = () => {
  return (
    <div className='border-b-[1px] border-b-gray-400'>
      <Container className='py-5 px-2 flex items-center gap-4 md:gap-6 lg:gap-20 justify-between'>
        <Link href='/'>
          <Image className='w-[50px]' src={logo} alt="logo" priority />
        </Link>
        <SearchInput></SearchInput>
        <div className='hidden md:flex items-center gap-4'>
          <Link href='/signin' className='flex items-center justify-center gap-2 leading-5 text-lg'>
            <div className='border-2 border-primay p-1.5 rounded-full text-xl text-primay'>
              <LiaUser></LiaUser>
            </div>

            <div>
              <p className='text-sm'>Hello, Guests</p>
              <p >Login / Register</p>
            </div>

          </Link>
          <HeaderIcons></HeaderIcons>
        </div>
        <div className='md:hidden'>
          <MobileNavigation></MobileNavigation>
        </div>
      </Container>
    </div>
  )
}

export default MiddleHeader