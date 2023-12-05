import React from 'react'
import { BsJustify } from 'react-icons/bs'

const Header = ({openSidebar}) => {
  return (
    <header className='header'>
        <div className="menu-icon">
            <BsJustify className='icon' onClick={openSidebar} />
        </div>
    </header>
  )
}

export default Header