import React, { useContext } from "react";
import Button from "@/components/buttons/Button";
import styled from "styled-components";
import { FaRegStar, FaStar } from 'react-icons/fa';
import { CartContext }  from '@/context/CartContext'

const CardContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 768px) {
    width: 200px;
    height: 100%;
  }
`;

const CardInfo = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 5px;
`;

function ProductCard({ product }) {
  const { addProductToCart } = useContext(CartContext);
  return (
    <CardContainer>
      <img
        src={product.imageUrl}
        alt={`imagen del producto ${product.productName}`}
      />
      <CardInfo>
        <p className="products-carousel-item-title">{product.productName}</p>
        <p className="products-carousel-item-stars">
          {
            [...Array(5)].map((_, index) => {
              return (index+1) <= product.stars 
              ? <FaStar key={index}/>
              : <FaRegStar key={index}/>
            })
          }
        </p>
        {product.listPrice && (
          <p className="products-carousel-item-listPrice">
            De ${product.listPrice}
          </p>
        )}
        <p className="products-carousel-item-price">Por ${product.price}</p>
        {product.installments.length > 0 && (
          <p className="products-carousel-item-installments">
            O en {product.installments[0]?.quantity}x cuotas de $
            {product.installments[0]?.value}
          </p>
        )}
        <Button onClick={() => addProductToCart()} width="100%" text="COMPRAR"></Button>
      </CardInfo>
    </CardContainer>
  );
}

export default ProductCard;
