import { ReactNode } from "react";
import { ProgressBar } from "react-loader-spinner";

import './index.css'

const Loader = (): ReactNode => {
  return(
    <ProgressBar
      visible={true}
      ariaLabel="hourglass-loading"
      height="100"
      width="100"
      wrapperClass="loader"
      borderColor="#000"
      barColor="#111827"
    />
  )
}

export default Loader;