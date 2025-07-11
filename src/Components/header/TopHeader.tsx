import React from 'react'
import Container from '../containers/Container'
import { FaTruckDroplet } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";

const TopHeader = () => {
    return (
        <div className='bg-[#010f1c] text-gray-200'>
            <Container className='p-2'>
                <div className='flex justify-between items-center'>
                    <p className='w-full md:w-auto text-sm flex items-center justify-center md:justify-normal gap-2 y-2'><FaTruckDroplet className='text-2xl'></FaTruckDroplet>Free Express Shipping On Order $570+ </p>
                    <div className='hidden md:flex text-white text-sm'>
                        <p className='headerTopMenu'>English <RiArrowDropDownLine className='text-xl'></RiArrowDropDownLine></p>

                        
                        <p className='headerTopMenu'>USD<RiArrowDropDownLine className='text-xl'></RiArrowDropDownLine></p>

                        
                        <p className='flex items-center gap-1  px-4'>Settings <RiArrowDropDownLine className='text-xl'></RiArrowDropDownLine></p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default TopHeader