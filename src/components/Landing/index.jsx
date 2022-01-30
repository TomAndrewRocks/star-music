import React from 'react';
import {
  ProductsContainer,
  ProductWrapper,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductDesc,
  ProductText
} from './styles';

const Landing = ({ data }) => {
  return (
    <ProductsContainer>
      <ProductWrapper>
        {data.map((landing, index) => {
          return (
            <ProductCard key={index}>
              <ProductImg src={landing.img} />
              <ProductInfo>
                <ProductDesc>{landing.desc}</ProductDesc>
                <ProductText>{landing.text}</ProductText>
              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductWrapper>
    </ProductsContainer>
  );
};

export default Landing;
