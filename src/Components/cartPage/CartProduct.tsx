import React from 'react'
import { Product } from '../../../type'
import Link from 'next/link'
import Image from 'next/image'
import PriceFormate from '../product/PriceFormate'
import AddToCartButton from '../AddToCartButton'
import { IoClose } from 'react-icons/io5'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '@/Redux/shopcartSlice'
import toast from 'react-hot-toast'
import { FaCheck } from 'react-icons/fa6'

const CartProduct = ({ product }: { product: Product }) => {

  const dispatch = useDispatch()
  const handleRemove = () =>{
    dispatch(removeFromCart(product?.id))
    toast.success(`${product?.title.substring(0,20)}deleted successfully!`)
  }
  return (
    <div className='flex py-4 sm:py-10'>
      <Link href={{
        pathname: `/products/${product?.id}`,
        query: { id: product?.id }
      }} className='cursor-pointer h-24 w-24 sm:h-48 sm:w-48 border border-purple-50 overflow-hidden flex items-center justify-center rounded-md'>
        <Image
          src={product?.images[0]}
          alt='product-img'
          width={200}
          height={200}
          priority={true}
          className='bg-purple-50 object-contain hover:scale-105  duration-300 p-2 '
        ></Image>
      </Link>
      {/* Details */}
      <div className='ml-4 sm:ml-6 flex flex-1 flex-col justify-between'>
        <div className='relative pr-9 sm:grid sm:grid-cols-4 sm:pr-0'>
          <div className='flex flex-col gap-1 col-span-5'>
            <h3 className='text-base font-semibold w-full '>{product?.title.substring(0, 80)}</h3>
            <p className='text-xs'>{product?.brand}</p>
            <p className='text-xs'> Category: <span className='font-medium'>{product?.category}</span></p>
          </div>
          <div className='flex items-center gap-6 mt-4'>
            <PriceFormate amount={product?.price *( product?.quantity ?? 1)}className='font-bold text-base'></PriceFormate>
            <AddToCartButton product={product} className='mt-2'></AddToCartButton>
          </div>
          <div className='absolute top-0 right-0 py-1 px-2 text-gray-600 bg-gray-100 hover:text-purple-500 cursor-pointer'>
            <button
            onClick={handleRemove}
            className='cursor-pointer'
            ><IoClose></IoClose></button>
          </div>
        </div>
          <div>
            {product?.availabilityStatus && (
              <p className='flex items-center gap-3 text-sm text-gray-700'><FaCheck className='text-lg text-purple-500'></FaCheck> <span>In Stock</span></p>
            ) }
            <p>You are saving <PriceFormate className='text-purple-500' amount={product?.price * (product?.discountPercentage /100) *(product?.quantity ?? 1)}></PriceFormate></p>
          </div>

      </div>
    </div>
  )
}

export default CartProduct