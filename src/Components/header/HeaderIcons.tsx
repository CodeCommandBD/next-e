'use client'
import Link from 'next/link'
import React from 'react'
import { BiShoppingBag } from 'react-icons/bi'
import { MdFavoriteBorder } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { StateType } from '../../../type'

const HeaderIcons = () => {
  const {cart, favorite} = useSelector((state:StateType)=>state?.shopcart)
  console.log(cart);
  
  return (
    <>
    {/* ############# favorite #################*/}
    {/* ############# favorite #################*/}
    {/* ############# favorite #################*/}
        <Link href={'/favorite'} className='relative'>
            <MdFavoriteBorder className='text-3xl text-primay'></MdFavoriteBorder>
            <span className='absolute -top-1 -right-1 bg-red-500 text-white w-4 h-4 rounded-full flex items-center justify-center text-[10px]'>
              {favorite?.length > 0 ? favorite?.length : '0' }
            </span>
        </Link>
    {/* ############# shoping Cart ############### */}
    {/* ############# shoping Cart ############### */}
    {/* ############# shoping Cart ############### */}

        <Link href={'/cart'} className='relative'>
            <BiShoppingBag className='text-3xl text-primay'></BiShoppingBag>
            <span className='absolute -top-1 -right-1 bg-red-500 text-white w-4 h-4 rounded-full flex items-center justify-center text-[10px]'>
              {
                cart?.length > 0 ? cart?.length : "0"
              }
            </span>
        </Link>
    </>
  )
}

export default HeaderIcons