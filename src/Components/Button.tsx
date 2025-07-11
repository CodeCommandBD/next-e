import Link from 'next/link';
import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () =>  void  
}

const Button = ({ children, className, href , onClick }: ButtonProps) => {
  return (
    <>
      {
        href ?
          <Link href='/product'
            className={twMerge(
              'bg-red-500 text-white px-6 py-2 cursor-pointer hover:bg-secondary',
              className
            )}
          >
            {children}
          </Link>
          :
          <button
            onClick={onClick}
            className={twMerge(
              'bg-red-500 text-white px-6 py-2 cursor-pointer hover:bg-secondary',
              className
            )}
          >
            {children}
          </button>
      }

    </>
  );
};

export default Button;