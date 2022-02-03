import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  width: 100%;

  @media screen and (max-width: 820px) {
    background: linear-gradient(to left,#000, #dfdfdf);
  }
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

export const Media = styled.section`
  max-width: 1300px;
  width: 100%;
`;

export const MediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: -96px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }

`;

export const Logo = styled.img`

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

export const Text = styled.div`
 
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
