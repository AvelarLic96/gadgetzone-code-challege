import { ReactNode, useEffect, useState } from "react";
import { getProducts } from "../../services/products-api";
import { IProducts } from "../../types";

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
    <></>
  )
}

export default Home;