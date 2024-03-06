import { ReactNode } from 'react'

import './index.css'
import ProductCard from '../ProductCard'
import { Products } from "../../types"

const RenderProducts = ({products}: Products): ReactNode => {
  return products?.map((product) => {
    return <ProductCard key={product.id} product={product} />
  })
}

const ProductsContainer = ({products}: Products): ReactNode => {
  return (
    <div className="products-cards-container">
      <RenderProducts products={products} />
    </div>
  )
}

export default ProductsContainer