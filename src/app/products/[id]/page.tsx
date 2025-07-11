import Container from '@/Components/containers/Container'
import ProductImages from '@/Components/ProductImages';
import { getData } from '@/Helpers';
import React from 'react'
import { Product } from '../../../../type';
import ProductPrice from '@/Components/product/ProductPrice';

import Rating from '@/Components/Rating';
import { FaRegEye } from 'react-icons/fa6';
import PriceFormate from '@/Components/product/PriceFormate';
import AddToCartButton from '@/Components/AddToCartButton';

interface Props {
  params: {
    id: string;
  }
}


const SingleProductpage = async ({ params }: Props) => {
  const { id } = params;

  const endpoint = `https://dummyjson.com/products/${id}`
  const product: Product = await getData(endpoint)





  return (
    <Container className='py-4 px-2 gap-6 grid grid-cols-1 md:grid-cols-2'>
      {/* image */}
      <ProductImages productimage={product?.images}></ProductImages>
      {/* details */}
      <div className='flex flex-col gap-4'>
        <h2 className='text-3xl font-bold'>{product?.title}</h2>
        <div className='flex justify-between'>
          <ProductPrice item={product}></ProductPrice>
          <div className='flex items-center gap-1'>
            <div className=''>
              <Rating rating={product.rating}></Rating>
            </div>
            <div>
              <p className='font-bold'>({product?.rating.toFixed(1)} Reviews)</p>
            </div>
          </div>
        </div>
        <div>
          <p className='flex items-center gap-1'><FaRegEye></FaRegEye> 250+ <span>people are viewing this right now</span></p>
          <p>You are saving: <PriceFormate className='font-semibold text-green-600 text-base' amount={(product?.price * product.discountPercentage) / 100}></PriceFormate> upon purchase</p>
        </div>
        <div>
          <p className='text-sm tracking-wide'>{product?.description}</p>
          <p className='text-base'>{product?.warrantyInformation}</p>
        </div>
        <p className='text-sm'>Brand : <span className='text-md font-medium capitalize'>{product?.brand}</span> </p>
        <p className='text-sm'>Category : <span  className='text-md font-medium capitalize'>{product?.category}</span> </p>
        <p className='text-sm'> Tags :
          {
            product?.tags.map((tag,i)=>(
              <span className='text-md font-medium capitalize' key={i}> {tag}{i < product.tags.length-1 && ' ,' } </span>
            ))
          }
        </p>
        <AddToCartButton className="rounded-md uppercase font-semibold" product={product}></AddToCartButton>
        
      </div>
      {/* review */}
      <div className='p-10 bg-purple-100 md:col-span-2 flex items-center gap-10'>
          {
            product?.reviews?.map((item,i)=>(
              <div key={i} className='bg-white/80 p-5 border-[1px] border-primay rounded-md hover:border-purple-800 hover:bg-white duration-200 flex flex-col gap-1'>
                  <p className='text-base font-semibold'>{item.comment}</p>
                  <p className='text-xs'>{item.reviewerName}</p>
                  <p className='text-sm'>{item.reviewerEmail}</p>
                  <Rating rating={item.rating}></Rating>
              </div>
            
            ))
          }
      </div>
    </Container>
  )
}

export default SingleProductpage