import { ReactNode, useEffect, useState } from "react";

import { IProducts } from "../../types";
import { getProducts } from "../../services/products-api";
import ProductsContainer from "../../components/ProductsContainer";
import Loader from "../../components/Loader";
import ErrorLanding from "../../components/ErrorLanding";

const Home = () : ReactNode  => {
  const [products, setProducts] = useState<IProducts[]>()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)

  const getListOfProducts = async () => {
    try {
      const products = await getProducts()
      const data = await products.json()
      console.log('typeof', typeof data)
      console.log('data', data.length)
      if (data.length) {
        setProducts(data)
        setIsLoading(false)
      } else {
        setIsLoading (false)
        setIsError(true)
      }
    } catch(e) {
      setIsLoading(false)
      setIsError(true)
    }
  }

  useEffect(()=>{
    setIsLoading(true)
    getListOfProducts()
  }, [])

  if (isLoading) {
    return(
      <Loader />
    )
  }

  if (isError) {
    return(
      <ErrorLanding />
    )
  }

  return(
    <ProductsContainer products={products} />
  )
}

export default Home;