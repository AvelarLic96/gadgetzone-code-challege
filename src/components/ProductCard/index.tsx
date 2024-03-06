import { ReactNode } from "react"

import './index.css'
import { Product } from "../../types"

const ProductCard = ({product}: Product): ReactNode => {
  return(
    <>
      <div className="card-container">
        <p className="card-title">{product?.title}</p>
        <p className="card-description">{product?.description}</p>
        <div className="card-rate-price-container">
          <div>rate</div>
          <div className="card-price">{`$ ${product?.price}`}</div>
        </div>
        <button className="card-add-to-cart-button" type="button">{'Add to Cart'}</button>
      </div>
      <div className="card-image-container">
        <img
          alt="Product Image"
          className="card-image"
          height={243}
          src={product?.image}
          width={243}
        />
      </div>
    </>
  )
}

export default ProductCard