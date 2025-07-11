import React from 'react'
import Container from '../containers/Container'
import ProductCard from './ProductCard'
import type { Product } from '../../../type'

interface Props{
  products: Product[];
}

const ProductList = ({products}:Props) => {
  return (
    <Container className='px-2  py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
        {
            products?.map((item: Product)=>(
                <div key={item.id}>
                    <ProductCard product={item}></ProductCard>
                </div>
            ))
        }
    </Container>
  )
}

export default ProductList