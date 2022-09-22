import React from 'react'
import ShoppingCart from '@/assets/icons/shopping-cart.svg'
import SvgIcon from './SvgIcon'
function ShoppingCartIcon({width, height}) {
  return (
    <SvgIcon src={ShoppingCart} width={width} height={height} alt="SVG as an image"/>
  )
}

export default ShoppingCartIcon