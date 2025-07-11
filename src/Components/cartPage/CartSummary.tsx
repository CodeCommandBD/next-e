''
import React, { useEffect, useState } from 'react'
import Title from '../Title'
import PriceFormate from '../product/PriceFormate'
import { Product } from '../../../type'
import Button from '../Button'
import toast from 'react-hot-toast'

const CartSummary = ({cart}:{cart:Product[]}) => {

  const [ totalAm, setTotalAm] = useState(0)
  const [discountAm, setDiscountAm] = useState(0)

  useEffect(()=>{
    let amt = 0;
    let discount = 0;
    cart?.map((item)=>{
      amt += item?.price * item.quantity!
      discount += ((item?.price * item.quantity!)/100 * item.quantity!)
    })
    setTotalAm(amt)
    setDiscountAm(discount)
  },[cart])

  const handleCheckout = () => {
    toast.success('checkout is coming soon!')
  }

  return (
    <div className='bg-purple-50 rounded-md px-4 py-6 sm:p-10 lg:col-span-5 mt-10 lg:mt-0'>
      <Title>Cart Summary</Title>
      <div className='mt-5 flex flex-col gap-3'>
        <div className='flex items-center justify-between'>
          <Title className='text-lg font-medium'>Sub Total</Title>
          <PriceFormate amount={totalAm}></PriceFormate>
        </div>
        <div className='flex items-center justify-between'>
          <Title className='text-lg font-medium'>Discount</Title>
          <PriceFormate amount={discountAm}></PriceFormate>
        </div>
        <div className='flex items-center justify-between'>
          <Title className='text-lg font-bold'>Payable Amount</Title>
          <PriceFormate className='text-lg font-bold' amount={totalAm - discountAm}></PriceFormate>
        </div>
        <Button 
          onClick={handleCheckout}
        >Checkout</Button>
      </div>
    </div>
  )
}

export default CartSummary