import React from 'react'
import Headphones from '@/assets/icons/Headphones.svg'
import SvgIcon from './SvgIcon'
function HeadphonesICon({width, height}) {
  return (
    <SvgIcon src={Headphones} width={width} height={height} alt="SVG as an image"/>
  )
}

export default HeadphonesICon