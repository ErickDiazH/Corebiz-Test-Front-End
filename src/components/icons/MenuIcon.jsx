import React from 'react'
import Menu from '@/assets/icons/menu.svg'
import SvgIcon from './SvgIcon'
function MenuICon({width, height}) {
  return (
    <SvgIcon src={Menu} width={width} height={height} alt="SVG as an image"/>
  )
}

export default MenuICon