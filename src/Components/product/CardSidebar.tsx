'use client'
import React, { useEffect, useState } from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import { LuEye } from 'react-icons/lu'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { Product, StateType } from '../../../type'
import { addToFavorite } from '@/Redux/shopcartSlice'
import toast from 'react-hot-toast'

const CardSidebar = ({product}:{product: Product}) => {
  const {favorite} = useSelector((state: StateType)=>state?.shopcart);
  const dispatch = useDispatch();
  const [existingProduct, setExistingProduct] = useState<Product | null>(null)


  useEffect(() => {
    const availableProduct = favorite?.find((item) => item?.id === product.id);

    if (availableProduct) {
      setExistingProduct(availableProduct);
    }else{
      setExistingProduct(null)
    }

  }, [favorite, product])


  const handleFavorite =() =>{
    dispatch(addToFavorite(product))
    
    if(existingProduct){
      toast.success("Removed from favorite successfully!")
    }else{
      toast.success('Added to favorite successfully')
    }
    
  }

  return (
    <div className='absolute right-2 top-16 border  flex flex-col text-2xl border-black/30 bg-white rounded-md overflow-hidden transform translate-x-20 group-hover:translate-x-0 transition-all duration-300'>
        <button className='p-2 hover:bg-purple-100 hover:text-purple-600 transition-all duration-200 cursor-pointer' ><FiShoppingCart></FiShoppingCart></button>
        <button className='p-2 hover:bg-purple-100 hover:text-purple-600 transition-all duration-200 border-y border-y-black/30 cursor-pointer' ><LuEye></LuEye></button>
        <button
        onClick={handleFavorite}
        className='p-2 hover:bg-purple-100 hover:text-purple-600 transition-all duration-200 cursor-pointer' >
          {existingProduct ? <MdFavorite className='text-purple-600'></MdFavorite> : <MdFavoriteBorder></MdFavoriteBorder>}
        </button>
    </div>
  )
}

export default CardSidebar