import styled from 'styled-components';
import { Link } from 'react-router-dom';

import ImgBgDesktop from '../../assets/bg-intro.png';

export const Container = styled.footer`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${ImgBgDesktop}) no-repeat center center fixed;
    background-position: center center;
    background-size: cover;
    color: #fff;
`;

export const Wrap = styled.div`
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
`;

export const SocialMedia = styled.section`
  max-width: 1300px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 46px auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }

`;

export const SocialLogo = styled(Link)`

  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  justify-content:center;
  margin-bottom: 45%;
  font-weight: bold;

`;

export const SocialText = styled.div`
 
  font-family: 'Red Hat Display';
  font-size: 25px;
  width: 13rem;
  margin-bottom: 90%;
  text-align: center;  
`;

export const SocialContainer = styled.div`

   margin: 1rem 0;
   
   @media screen and (max-width: 820px) {
    flex-direction: column;
    margin: 0.8rem 0;
  }

`;

export const SocialContainerText = styled.div`

   margin: 1rem 0;
   
   @media screen and (max-width: 820px) {
    flex-direction: column;
    margin: 0.8rem 0;
  }

`;

export const SocialContainerImage = styled.div`

   margin: 1rem 0;
   
   @media screen and (max-width: 820px) {
    flex-direction: column;
    margin: 0.8rem 0;
  }

`;

