import React from 'react'
import './productsPage.css'
import { getProducts } from '@/lib/products'
 
export default async function ProductsPage(params) {

    const products = await getProducts();
    
    return (
        <div>ProductsPage</div>
    )
}

