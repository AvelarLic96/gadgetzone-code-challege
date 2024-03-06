import { ReactNode, useEffect, useState } from "react";
import { getProducts } from "../../services/products-api";
import { IProducts } from "../../types";
import ProductsContainer from "../../components/ProductsContainer";

const Home = () : ReactNode  => {
  const [products, setProducts] = useState<IProducts[]>()

  const getListOfProducts = async () => {
    const products = await getProducts()
    const data = await products.json()
    setProducts(data)
  }

  useEffect(()=>{
    getListOfProducts()
  }, [])

  return(
    <ProductsContainer products={products} />
  )
}

export default Home;