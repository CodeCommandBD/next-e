import React from 'react'
import TopHeader from './TopHeader'
import MiddleHeader from './MiddleHeader'
import BottomHeader from './BottomHeader'



const Header = () => {
  return (
    <div className='sticky top-0 bg-white z-10'>
        <TopHeader></TopHeader>
        <MiddleHeader></MiddleHeader>
        <BottomHeader></BottomHeader>
    </div>
  )
}

export default Header