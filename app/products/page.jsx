import ProductsGrid from '@/components/products/products-grid';
import { getProducts } from '@/lib/products';
import Link from 'next/link'
import  { Suspense } from 'react'


async function ProductDetails(){
  const products = await getProducts();
  return  <ProductsGrid products = {products}/>


}

export default function AllProducts() {
  



    
  return (
    <div className='container'>
        AllProducts
        <Link href="/products/product1">Product 1</Link>
        <Link href="/products/product2">Product 2</Link>


        <Suspense fallback={<p>Fetching Products.....</p>}>
         <ProductDetails/>
        </Suspense>

        
    </div>
  )
}

// export default AllProducts