import { ReactNode } from "react";
import './index.css'
import { errorPageTexts } from "../../constants";

type IconProps = {
  className: string,
  [key: string]: string | number | object | Array<string | number | []>
}

const AlertTriangleIcon = (props: IconProps): ReactNode => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  )
}

const ErrorLanding = (): ReactNode => {
  const {title, description, reloadPage} = errorPageTexts
  return(
    <main className="error-container">
      <div className="error-content-container">
        <div className="error-header-container">
          <AlertTriangleIcon className="error-header-icon"  />
          <h1 className="error-header-title">{title}</h1>
        </div>
        <div className="error-body-container">
          <p className="error-body-text">{description}</p>
          <button className="error-body-button" onClick={()=>{location.reload()}}>{reloadPage}</button>
        </div>
      </div>
    </main>
  )
}

export default ErrorLanding;