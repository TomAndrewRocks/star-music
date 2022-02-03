import React from 'react';
import { Container, Wrap, SocialContainer, Logo, Media, MediaWrap, Text } from './styles';


import Rockstar from '../../assets/guitar-player.png'

const Middle = () => {
  return (
    <Container>
      <Wrap>
        <Media>
          <MediaWrap>
           <SocialContainer>
            <Text>
            START NOW YOUR OWN PATH
            </Text>
          </SocialContainer>
          <SocialContainer>
            <Logo src={Rockstar} height={120}/>
          </SocialContainer> 
          <SocialContainer>
            <Text>
            ART WILL SAVE YOU IN THE END
              </Text>
          </SocialContainer>
          </MediaWrap>
        </Media>
      </Wrap>
    </Container>
  );
};

export default Middle;
