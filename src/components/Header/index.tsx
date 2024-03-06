import { ReactNode } from 'react';
import './index.css'

const Header = (): ReactNode => {
  return (
    <header className="header">
      <div className='header-container'>
        <div className='header-title'>GadgetZone</div>
      </div>
    </header>
  )
}

export default Header;