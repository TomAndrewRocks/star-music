import React from 'react';
import { Container, Wrap, SocialContainer, SocialContainerImage, SocialContainerText, SocialLogo, SocialMedia, SocialMediaWrap, SocialText } from './styles'

import guitar from '../../assets/guitar.png'
import mic from '../../assets/mic 1.png'
import drums from '../../assets/drums 1.png'

const Explorer = () => {
  return (
    <Container>
      <Wrap>
        <SocialMedia>
          <SocialMediaWrap>
           <SocialContainerText>
            <SocialText>
            "Ancient was the time when flints and mosses were everything."
            </SocialText>
            <SocialText>
            "Ancient was the time when flints and mosses were everything."
            </SocialText>
            <SocialText>
            "Ancient was the time when flints and mosses were everything."
            </SocialText>
          </SocialContainerText>
          <SocialContainerImage>
          <SocialLogo to='/'><img src={guitar} height={300}/></SocialLogo>
          <SocialLogo to='/'><img src={mic} height={120}/></SocialLogo>
          <SocialLogo to='/'><img src={drums} height={300}/></SocialLogo>
          </SocialContainerImage>
          <SocialContainer>
            <SocialText>
            "The universe started out from a long-forgotten dream."
              </SocialText>
              <SocialText>
            "The universe started out from a long-forgotten dream."
              </SocialText>
              <SocialText>
            "The universe started out from a long-forgotten dream."
              </SocialText>
          </SocialContainer>
          </SocialMediaWrap>
          
        </SocialMedia>
      </Wrap>
    </Container>
  );
};

export default Explorer;
