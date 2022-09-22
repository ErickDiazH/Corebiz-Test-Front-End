import React from 'react'
import ShoppingCartIcon from '@/components/icons/ShoppingCartIcon'
import Badge from '@/components/badges/Badge'
import styled from "styled-components";

const ContainerCart = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

function ShoppingCart({cartItemsCount}) {
  return (
    <ContainerCart>
        <ShoppingCartIcon />
        <Badge text={cartItemsCount}/>
    </ContainerCart>
  )
}

export default ShoppingCart