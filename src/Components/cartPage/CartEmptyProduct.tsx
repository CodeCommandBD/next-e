'use client'
import React from 'react'
import { useSelector } from 'react-redux'
import { Product, StateType } from '../../../type'

import Button from '../Button'
import CartProduct from './CartProduct'
import CartSummary from './CartSummary'

const CartEmptyProduct = () => {
    const { cart } = useSelector((state: StateType) => state?.shopcart)
  return (
    <div className=''>
        {
          cart ? 
          <div>
            <h1 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>Shopping Cart</h1>
            <div className='mt-10 lg:grid lg:grid-cols-12 lg:items-start lg:gap-12'>
              <section className='lg:col-span-7'>
                <div className='divide-y divide-gray-200 border-b border-t border-gray-200'>
                  {cart?.map((product: Product)=> (
                    <CartProduct key={product?.id} product={product}></CartProduct>
                  ))}
                </div>
              </section>
              <CartSummary cart={cart}></CartSummary>
            </div>
          </div> 
          : 
          <div className='bg-purple-50 h-96 my-10 flex flex-col gap-4 items-center justify-center py-5 rounded-lg border border-gray-200 drop-shadow-2xl'>
            <h1 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>Shopping Cart</h1>
            <p className='text-base max-w-[700px] text-center text-gray-600 leading-6'>
                Your cart is empty...........
            </p>
            <Button href='/product' className='bg-primay text-white px-8 py-4 rounded-md uppercase text-sm font-semibold tracking-wide'>Go to shopping</Button>
           
        </div>
        }
    </div>
  )
}

export default CartEmptyProduct