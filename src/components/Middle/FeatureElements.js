import styled from 'styled-components';


export const ProductsContainer = styled.div`
  background: #fff;
  height: 65vh;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: row!important;
  justify-content: center;
  margin: 0 auto;
`;

export const ProductCard = styled.div`
  line-height: 2;
  width: 300px;
`;

export const ProductImg = styled.img`
  height: 800px;
  min-width: 879px;
  max-width: 100%;
  position: absolute;
  top: 175.8%;
`;

export const ProductsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
  font-size: 2.5rem;
  font-family: 'Red Hat Display'
`;

export const ProductDesc = styled.p`
  margin-bottom: 1rem;
`;


