import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #E4E4E4;
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
  margin: 16px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }

`;

export const SocialLogo = styled.img`

  display: flex;
  justify-content:center;
  height: 50rem;
  top: 16px;
  position:relative;
`;

export const SocialContainer = styled.div`
   
   @media screen and (max-width: 820px) {
    flex-direction: column;
    margin: 0.8rem 0;
  }

`;

export const SocialText = styled.text`
 
  font-family: 'Red Hat Display';
  font-size: 25px
`;
