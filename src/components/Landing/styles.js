import styled from 'styled-components';
import UniversePic from '../../assets/universe 1.png';
import ImgBgDesktop from '../../assets/hero-desktop.png';

export const ProductsContainer = styled.div`
  background: #191717;
  background-position: center;
  background-size: cover;
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  color: #fff;

  @media screen and (max-width: 768px) {

    background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${ImgBgDesktop});

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
  

  @media screen and (max-width: 1094px) {
    width: 450px;
  }

  @media screen and (max-width: 768px) {
    width: 300px;
  }

`;

export const ProductImg = styled.img`
  height: 150px;
  width: 150px;
  display:flex;
  justify-content:center;
  margin: 3rem 4.5rem;

  @media screen and (min-width: 768px) {
    display:block;
  }

  @media screen and (max-width: 1100px) {
    margin: 3rem 9.5rem;
  }

  @media screen and (max-width: 768px) {
    display:none;
  }
`;


export const ProductTitle = styled.h2`
  font-weight: 400;
`;

export const ProductInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 5rem;
  text-align: center;
  font-size: 1.5rem;
  font-family: 'Red Hat Display';
`;

export const ProductDesc = styled.p`
  margin-bottom: 1rem;

  @media screen and (min-width: 768px) {
    display:block;
  }

  @media screen and (max-width: 768px) {
    display:none;
  }
`;

export const ProductText = styled.p`
  margin-top: -1.4rem;

  @media screen and (min-width: 768px) {
    display:none;
    ;
  }
 
`;
