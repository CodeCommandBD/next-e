import CartProduct from '@/Components/cartPage/CartEmptyProduct'
import Container from '@/Components/containers/Container'
import React from 'react'

const CartPage = () => {
  return (
    <Container className='py-10 px-2'>
        <CartProduct></CartProduct>
    </Container>
  )
}

export default CartPage