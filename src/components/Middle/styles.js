import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #fff;
  width: 100%;

  @media screen and (max-width: 820px) {
    background: linear-gradient(to left,#000, #dfdfdf);
  }
`;

export const FooterWrap = styled.div`
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
  margin: -96px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }

`;

export const SocialLogo = styled.img`

  display: flex;
  justify-content:center;
  width: 100%;
  height: auto;
  top: 16px;
  position:relative;

  @media screen and (max-width: 820px) {
    margin-bottom: -39px;
  }

`;

export const SocialContainer = styled.div`
   
   @media screen and (max-width: 820px) {
    flex-direction: column;
    margin: 0.8rem 0;
  }

`;

export const SocialText = styled.div`
 
 font-family: 'Red Hat Display';
  font-size: 35px;
  width: 3rem;
  text-align: center;  
  margin: 6rem 9rem 0 9rem;

  @media screen and (max-width: 820px) {
    display:none;
  }

  @media screen and (max-width: 1102px) {
    font-size: 22px;
  }
`;
