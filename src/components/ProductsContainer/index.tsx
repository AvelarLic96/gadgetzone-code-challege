import './index.css'
import { Products } from "../../types"
import { ReactNode } from 'react'
import ProductCard from '../ProductCard'

const RenderProducts = ({products}: Products): ReactNode => {
  return products?.map((product) => {
    return <ProductCard key={product.id} product={product} />
  })
}

const ProductsContainer = ({products}: Products): ReactNode => {
  return (
    <div className="products-cards-container">
      <RenderProducts products={products}/>
    </div>
  )
}

export default ProductsContainer