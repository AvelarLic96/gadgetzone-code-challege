import { ReactNode } from "react"
import { Rating } from "react-simple-star-rating"

import './index.css'
import { Product } from "../../types"

const ProductCard = ({product}: Product): ReactNode => {
  // Destructure products object
  const {title, description, rating, price, image } = product || {};
  // Formate price to add 2 decimals
  const priceFormatted = price?.toFixed(2);
  // Renders product card
  return(
    <>
      <div className="card-info-container">
        <p className="card-title">{title}</p>
        <p className="card-description">{description}</p>
        <div className="card-rate-price-container">
          <div className="card-rate-starts-container">
            <Rating
              readonly
              allowFraction
              initialValue={rating?.rate}
              size={25}
              fillColor="#111827"
            />
          </div>
          <div className="card-price">{`$ ${priceFormatted}`}</div>
        </div>
        <button className="card-add-to-cart-button" type="button">{'Add to Cart'}</button>
      </div>
      <div className="card-image-container">
        <img
          alt="Product Image"
          className="card-image"
          height={262.5}
          src={image}
          width={262.5}
        />
      </div>
    </>
  )
}

export default ProductCard