import { PageNotFound } from '@/assets'
import Container from '@/Components/containers/Container'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
    return (
        <Container className='flex items-center justify-center flex-col gap-2 py-10'>
            <Image src={PageNotFound} alt='not-found'>

            </Image>
            <div className="h-screen">
                <div className="container flex flex-col items-center  justify-center gap-10">

                    <div className="font-pop flex justify-center items-center w-full flex-col gap-4">
                        <p className="font-extrabold  text-2xl"> Oh snap!</p>
                        <p className="font-semibold text-gray-500 text-sm"> We couldnot find the page you are looking for.</p>
                        <Link href={'/'} className="bg-primay text-white text-md font-semibold py-2 px-4 md:py-3 md:px-6 rounded-lg transition duration-300">Back To Home</Link>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default NotFound 