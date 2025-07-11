import React from 'react'
import { Product } from '../../../type'
import Link from 'next/link'
import Image from 'next/image'
import CardSidebar from './CardSidebar'
import ProductPrice from './ProductPrice'
import AddToCartButton from '../AddToCartButton'


const ProductCard = ({product}:{ product: Product}) => {
   

    
    
  return (
    <div className='border border-gray-400 hover:shadow-lg hover:shadow-black/30 duration-200 rounded-md group overflow-hidden relative '>
      {/* image */}
        <Link href={{
          pathname:`/products/${product?.id}`,
          query:{id:product?.id}
        }} className='cursor-pointer'>
          <Image 
          src={product?.images[0]} 
          alt='product-img'
          width={500}
          height={500}
          priority={true}
          className='w-full h-64 object-contain hover:scale-110 duration-300'
          ></Image>
          <p className='absolute top-2 right-2 bg-primay p-1 text-xs  text-white rounded-md'>{product?.discountPercentage}%</p>
        </Link>
        <CardSidebar product={product} ></CardSidebar>
      {/* description */}
       <div className='border-t-[1px] border-t-gray-300 py-2 px-4 flex flex-col justify-between h-40'>
          <div>
            <p className='text-sm font-medium capitalize text-gray-500'>{product?.category}</p>
            <h2 className='font-semibold text-base line-clamp-2'>{product?.title}</h2>
            <ProductPrice item={product}></ProductPrice>
          </div>
          <AddToCartButton product={product} className=''></AddToCartButton>
       </div>
    </div>
  )
}

export default ProductCard