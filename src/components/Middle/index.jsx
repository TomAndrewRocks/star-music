import React from 'react';
import { FooterContainer, FooterWrap, SocialContainer, SocialLogo, SocialMedia, SocialMediaWrap, SocialText } from './styles';


import Rockstar from '../../assets/guitar-player.png'

const Middle = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
           <SocialContainer>
            <SocialText>
            START NOW YOUR OWN PATH
            </SocialText>
          </SocialContainer>
          <SocialContainer>
            <SocialLogo src={Rockstar} height={120}/>
          </SocialContainer> 
          <SocialContainer>
            <SocialText>
            ART WILL SAVE YOU IN THE END
              </SocialText>
          </SocialContainer>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Middle;
