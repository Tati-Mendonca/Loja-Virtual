import React from 'react'
import Button from '../Button'
import { ProductCard__Container } from './style'
import { motion } from "framer-motion";



const handleUpdateItem = () => {
  alert("Adicionar produto ao carrinho")


}

const parent = {
  variantA:{ scale:1 },
  variantB:{ scale: 1.10},
}

const ProductCard = () => {
  return (
    <ProductCard__Container as={motion.div} variants={parent} initial="variantA" whileHover="variantB">
      <img src="" alt="ProductCard" />
      <div>
        <ol>
          <li>Titulo</li>
          <li>R$000</li>
          <li>Descrição</li>
        </ol>
        </div>
        <Button Text="COMPRAR" onClick={handleUpdateItem} />
      {/* <h1>Titulo</h1>
      <span>R$000</span>
      <p>Descrição</p> */}
   
    </ProductCard__Container>
  )
}

export default ProductCard
