"use client"
import { getData } from '@/Helpers';
import React, { useEffect, useRef, useState } from 'react'
import { RiCloseLine, RiSearchLine } from 'react-icons/ri';
import { Product } from '../../../type';
import Link from 'next/link';
import { CiSearch } from 'react-icons/ci';

const SearchInput = () => {
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [isInputFocused, setIsInputFocused] = useState(false)
  const searchContainerRef = useRef(null)


  useEffect(() => {
    const getProducts = async () => {
      const endpoint = 'https://dummyjson.com/products'
      try {
        const data = await getData(endpoint)
        setProducts(data?.products)
      } catch (error) {
        console.error('Error fetching data', error)
      }

    }
    getProducts()
  })

  useEffect(() => {
    const filter = products.filter((item: Product) =>
      item?.title.toLowerCase().includes(search.toLowerCase())
    )
    setFilteredProducts(filter)



  }, [products, search])

  useEffect(()=>{
    const handleClickOutside = (e:MouseEvent) =>{
      if(searchContainerRef && 
        // @ts-expect-error: current may be null here 
        !searchContainerRef.current.contains(e.target)){
          setIsInputFocused(false)
        }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return()=>{
      document.removeEventListener('mousedown', handleClickOutside)
    }
  },[])

  return (
    <div ref={searchContainerRef} className='hidden md:flex flex-1  relative'>
      <input 
      type="text" 
      placeholder='Search Product Here....' 
      className='w-full h-full border-[2px] border-secondary p-2  outline-0' 
      onChange={(e) => setSearch(e.target.value)} 
      value={search}
      onFocus={()=>setIsInputFocused(true)}
      />
      {search && <RiCloseLine onClick={() => setSearch('')} className='text-xl absolute top-3 right-12 text-gray-600 hover:text-primay cursor-pointer duration-200'></RiCloseLine>


      }
      <span className='absolute right-0 top-0  w-10 h-10 bg-primay flex items-center justify-center text-white cursor-pointer hover:bg-purple-500 transition-all'>
        <RiSearchLine></RiSearchLine>
      </span>
      {
        isInputFocused && search && (
          <div className='absolute left-0 top-12 w-full mx-auto h-auto max-h-96 bg-white rounded-md overflow-y-scroll cursor-pointer text-black p-2'>
            {filteredProducts?.length > 0 ?
              <div>
                {filteredProducts?.map((item: Product) => (
                  <Link
                    onClick={() => setSearch('')}
                    className='flex items-center gap-3'
                    href={{
                      pathname: `/products/${item?.id}`,
                      query: { id: item?.id },
                    }}
                    key={item?.id}>
                    <CiSearch className='text-lg'></CiSearch>{item?.title}</Link>
                ))}
              </div> 
              : 
              <div className='py-10 px-5'>
                <p className='text-base'>
                  Nothing matched with{' '}
                  <span className='font-semibold underline underline-offset-2 decoration-[1px]'>
                    {search}
                  </span>{' '}
                  please try again.
                </p>
              </div>
            }
          </div>
        )
      }
    </div>
  )
}

export default SearchInput