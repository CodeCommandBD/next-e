import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa6'
import { twMerge } from 'tailwind-merge'

const linksData = [
    {icon: <FaGithub></FaGithub>, href: 'https://github.com/CodeCommandBD'},
    {icon: <FaFacebook></FaFacebook>, href: 'https://www.facebook.com/CodeCommandBD'},
    {icon: <FaYoutube></FaYoutube>, href: 'https://www.youtube.com/@CodeCommandBD'},
    {icon: <FaLinkedin></FaLinkedin>, href: 'https://www.linkedin.com'},
]

const SocialLink = ({iconstyle}: {className?: string; iconstyle?: string}) => {
  return (
    <div className='text-xl py-2 text-white/50 flex items-center gap-x-2'>
        {
            linksData?.map((item, i)=>(
                <Link 
                 href={item.href} 
                 key={i} 
                 target='_blank'
                 className={twMerge('border border-white/20 flex p-2 rounded-full hover:text-primay hover:border-primay duration-200 cursor-pointer', iconstyle)}
                 >
                  {item?.icon}
                </Link>
            ))
        }
    </div>
  )
}

export default SocialLink