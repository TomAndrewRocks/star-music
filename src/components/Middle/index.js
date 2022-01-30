import React from 'react';
import { FeatureContainer, FeatureButton, ProductsContainer, ProductsHeading, ProductWrapper, ProductCard, ProductImg, ProductInfo, ProductTitle, ProductDesc } from './FeatureElements';

const Middle = ({ heading, data }) => {
  return (
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductWrapper>
        {data.map((product, index) => {
          return (
            <ProductCard key={index}>
              
              <ProductInfo>
               <ProductImg src={product.img1} alt={product.alt} />
              
              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductWrapper>
    </ProductsContainer>
  );
};

export default Middle;
