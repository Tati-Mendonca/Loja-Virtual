import React from 'react'
import { ProductGrid__Container } from './style'
import ProductCard from '../ProductCard'

const ProductGrid = () => {
  return (
    <ProductGrid__Container>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </ProductGrid__Container>
  )
}

export default ProductGrid
