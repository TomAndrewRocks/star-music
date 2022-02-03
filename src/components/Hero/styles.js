import styled from 'styled-components';
import ImgBgDesktop from '../../assets/hero-desktop.png';

export const HeroContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${ImgBgDesktop});
  height: 100vh;
  background-position: center;
  background-size: cover;

  @media screen and (max-width: 600px) {
    height: 95vh;
  }

`;

export const HeroContent = styled.div`
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
`;

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const HeroH1 = styled.h1`
  font-size: clamp(2.5rem, 10vw, 25rem);
  letter-spacing: 3px;
  font-family: 'Saira Condensed';
  text-align: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  &:hover {
    transition: 0.2s ease-out;
    color: #DFDFDF;
  }

  @media screen and (max-width: 600px) {
    width: 120px;
    display:flex;
    justify-content:center!important;
    position: absolute;
    left: 35%;
    top: 18%;
    line-height: 8.8rem;
    font-size: 5rem;

  }
`;

