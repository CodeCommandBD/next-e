'use client'
import React, { useState } from 'react'
import { RiMenu3Fill } from 'react-icons/ri'
import {  Dialog, DialogPanel } from '@headlessui/react'
import { MdClose } from 'react-icons/md'
import { navigation } from '@/constants'
import Link from 'next/link'
import SocialLink from '../SocialLink'

const MobileNavigation = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggole = () => {
        setIsOpen(true);
    }

    return (
        <div>
            <div onClick={toggole} className='text-2xl text-primay hover:text-purple-900 transition-all duration-200 cursor-pointer'>
                <RiMenu3Fill></RiMenu3Fill>
            </div>
            <Dialog open={isOpen} as="div" className="relative z-50 md:hidden text-white/80" onClose={()=>setIsOpen(false)}>
                <div className="fixed inset-0  w-screen flex items-center justify-center p-4 bg-black/90">
                    <DialogPanel
                        transition
                        className="w-[95%] space-y-4 bg-black max-w-md rounded-md p-6 backdrop-blur-2xl absolute top-0 m-5 data-closed:transform-[scale(95%)] data-closed:opacity-0"
                    >
                        <div className='flex items-center justify-between'>
                            <h2 className='font-semibold text-xl '>Navigation Menu</h2>
                            <button onClick={()=>setIsOpen(false)} className='text-white text-2xl hover:text-primay  border-2 border-white rounded-sm hover:border-primay cursor-pointer'>
                                <MdClose></MdClose>
                            </button>
                        </div>
                        <div className='flex flex-col gap-3 pt-5'>
                            {
                                navigation?.map((navItem)=>(
                                    <>
                                        <Link onClick={()=>setIsOpen(false)} className='hover:text-primay relative group ' href={navItem.href} key={navItem.title}>{navItem.title}</Link>
                                    </>
                                ))
                            }
                        </div>
                        <SocialLink></SocialLink>
                    </DialogPanel>
                </div>
            </Dialog>
        </div>
    )
}

export default MobileNavigation