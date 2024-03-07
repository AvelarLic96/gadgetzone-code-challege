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

  // Function in charge of make the products API call
  const getListOfProducts = async () => {
    try {
      // If no issues with the call to the API next code will execute
      const products = await getProducts()
      const data = await products.json()
      // If data has a length it means that is an array, if not it is a different data type
      if (data.length) {
        // If is an array set the products to an state and stop loading
        setProducts(data)
        setIsLoading(false)
      } else {
        // If is not an array stop loading and set the error state.
        setIsLoading (false)
        setIsError(true)
      }
    } catch(e) {
      // Catch any API error and change loading state and set error
      setIsLoading(false)
      setIsError(true)
    }
  }

  useEffect(() => {
    // Set loading state when component mount and call getListOfProducts function
    setIsLoading(true)
    getListOfProducts()
  }, [])

  if (isLoading) {
    // Component renders when products loading
    return(
      <Loader />
    )
  }

  if (isError) {
    // Component renders if catch any error from the API
    return(
      <ErrorLanding />
    )
  }

  return(
    // Renders products components
    <ProductsContainer products={products} />
  )
}

export default Home;