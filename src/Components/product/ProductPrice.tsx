'use client'
import React, { useEffect, useState } from 'react'
import { Product, StateType } from '../../../type';
import PriceFormate from './PriceFormate';
import { useSelector } from 'react-redux';

const ProductPrice = ({ item }: { item: Product }) => {

  const { cart } = useSelector((state: StateType) => state?.shopcart)

  const [existingProduct, setExistingProduct] = useState<Product | null>(null)

  useEffect(() => {
    const availableProduct = cart?.find((cartItem) => cartItem?.id === item.id);

    if (availableProduct) {
      setExistingProduct(availableProduct);

    } else {
      setExistingProduct(null);
    }

  }, [cart, item])

  const regularPrice = item?.price;
  const DiscountedPrice = item?.price + item?.discountPercentage / 100;
  return (
    <div className='flex gap-3'>
      <PriceFormate amount={existingProduct ? DiscountedPrice * existingProduct.quantity! : DiscountedPrice} className='text-gray-400 line-through'></PriceFormate>
      <PriceFormate amount={existingProduct ? regularPrice * existingProduct.quantity! : regularPrice} className='text-purple-500' ></PriceFormate>
    </div>
  )
}

export default ProductPrice