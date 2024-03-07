import { ReactNode } from 'react';
import './index.css'

const GADGETZONE = 'GadgetZone';

const Header = (): ReactNode => {
  return (
    <header className="header">
      <div className='header-container'>
        <div className='header-title'>{GADGETZONE}</div>
      </div>
    </header>
  )
}

export default Header;