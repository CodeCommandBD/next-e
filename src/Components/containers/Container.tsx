// this is a custom container for all component make with data props

import React from 'react'
import { twMerge } from 'tailwind-merge'

interface Props {
    children: React.ReactNode;
    className?: string; 
    
}

const Container = ({children, className}: Props) => {
  return (
    <div className={twMerge('container', className)}>
        {children}
    </div>
  )
}

export default Container