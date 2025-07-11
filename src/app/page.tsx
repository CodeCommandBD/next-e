import Banner from '@/Components/Banner'
import ProductList from '@/Components/product/ProductList'
import { getData } from '@/Helpers'
import React from 'react'

const page = async () => {
  const endpoint = 'https://dummyjson.com/products'
  const {products} = await getData(endpoint)
  
  return (
    <main>
      <Banner></Banner>
      <ProductList products={products}></ProductList>
    </main>
  )
}

export default page
