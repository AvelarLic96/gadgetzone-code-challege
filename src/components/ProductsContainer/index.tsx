import { ReactNode } from 'react'

import './index.css'
import ProductCard from '../ProductCard'
import { Products } from "../../types"

const RenderProducts = ({products}: Products): ReactNode => {
  // Component renders products cards
  return products?.map((product) => {
    return <ProductCard key={product.id} product={product} />
  })
}

const ProductsContainer = ({products}: Products): ReactNode => {
  // call RenderProducts component to make the code cleaner and easy to read
  return (
    <div className="products-cards-container">
      <RenderProducts products={products} />
    </div>
  )
}

export default ProductsContainer