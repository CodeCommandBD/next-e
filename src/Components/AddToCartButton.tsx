'use client'
import { twMerge } from 'tailwind-merge'
import { Product, StateType } from '../../type'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, decreaseQuantity, increaseQuantity } from '@/Redux/shopcartSlice'
import toast from 'react-hot-toast'
import { FaMinus, FaPlus } from 'react-icons/fa6'
import { useEffect, useState } from 'react'

const AddToCartButton = ({ product, className }: { product: Product, className: string }) => {

  const { cart } = useSelector((state: StateType) => state?.shopcart)

  const [existingProduct, setExistingProduct] = useState<Product | null>(null)

  useEffect(() => {
    const availableProduct = cart?.find((item) => item?.id === product.id);

    if (availableProduct) {
      setExistingProduct(availableProduct);
    }

  }, [cart, product])

  const dispatch = useDispatch();

  const handleAddcart = () => {
    if (product) {
      dispatch(addToCart(product))
      toast.success(`${product?.title.substring(0, 10)}...added successfully!`)
    }
  }
  return (


    <>
      {existingProduct ?
        <div className='flex gap-2 items-center'>
          <button
            onClick={() => dispatch(decreaseQuantity(product?.id), toast.success('Quantity decreased Successfully!'))}
            disabled={(existingProduct?.quantity ?? 0) <= 1}
            className='bg-[#f7f7f7] text-black p-2 border-[1px] border-gray-200 hover:border-purple-100 rounded-full test-sm hover:bg-purple-50 duration-200 cursor-pointer disabled:text-gray-300 disabled:hover:bg-[#f7f7f7]'><FaMinus></FaMinus></button>
          <p className='text-base font-semibold w-10 text-center'>{existingProduct?.quantity}</p>
          <button
            onClick={() => dispatch(increaseQuantity(product?.id), toast.success('Quantity increased Successfully!'))}
            className='bg-[#f7f7f7] text-black p-2 border-[1px] border-gray-200 hover:border-purple-100 rounded-full test-sm hover:bg-purple-50 duration-200 cursor-pointer disabled:text-gray-300 disabled:hover:bg-[#f7f7f7]'><FaPlus></FaPlus></button>
        </div>

        :
        <button
          onClick={handleAddcart}
          className={twMerge('bg-transparent border border-primay text-primay rounded-2xl py-1.5 hover:bg-purple-500 hover:text-white duration-300 transition-all cursor-pointer my-2', className)}>
          Add to Cart
        </button>
      }
    </>



  )
}

export default AddToCartButton