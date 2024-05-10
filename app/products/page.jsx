import Link from 'next/link'
import React from 'react'

const AllProducts = () => {
  return (
    <div>AllProducts
        <Link href="/products/product1">Product 1</Link>
        <Link href="/products/product2">Product 2</Link>
    </div>
  )
}

export default AllProducts