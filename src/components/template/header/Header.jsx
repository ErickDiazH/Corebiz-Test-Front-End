import React, { useContext } from 'react'
import "./header.css"
import CInputIcon from '@/components/inputs/CInputIcon.jsx'
import MenuICon from '@/components/icons/MenuIcon.jsx'
import ShoppingCart from '@/components/shoppingCart/ShoppingCart.jsx'
import { AiOutlineUser } from 'react-icons/ai';
import { CartContext }  from '@/context/CartContext'

function Header() {
  const { cartItemsCount } = useContext(CartContext);
  return (
    <header className="header-container">
      <div className="header-top-icon header-toggle">
        <MenuICon />
      </div>
      <h1 className="header-title">corebiz</h1>
      <div className="header-top-icon header-top-right">
        <div className="header-user-account">
          <AiOutlineUser />
          Mi cuenta
        </div>
        <ShoppingCart cartItemsCount={cartItemsCount}/>
      </div>
      <div className="header-search">
        <CInputIcon placeholder="¿Qué estás buscando?"></CInputIcon>
      </div>
    </header>
  )
}

export default Header