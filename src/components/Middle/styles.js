import styled from 'styled-components';
import UniversePic from '../../assets/universe 1.png';


export const ProductsContainer = styled.div`
  background: #191717;
  background-position: center;
  background-size: cover;
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  color: #fff;

  @media screen and (min-width: 768px) {
    background: url(${UniversePic})!important;
  }
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const ProductCard = styled.div`
  margin: 0 2rem;
  line-height: 1.5;
  width: 300px;

`;

export const ProductImg = styled.img`
  height: 200px;
  width: 200px;
  display:flex;
  justify-content:center;
  margin: 0 3rem;
`;


export const ProductTitle = styled.h2`
  font-weight: 400;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  text-align: center;
  font-size: 2.5rem;
  font-family: 'Red Hat Display'
`;

export const ProductDesc = styled.p`
  margin-bottom: 1rem;
`;

export const ProductPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 2rem;
`;

export const ProductButton = styled.button`
  font-size: 1rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2 ease-out;

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;
