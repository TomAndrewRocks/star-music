import React from 'react';
import { Container, Wrap, SocialContainer, ContainerImage, ContainerText, Logo, Media, MediaWrap, Text } from './styles'

import guitar from '../../../assets/guitar.png'
import mic from '../../../assets/mic 1.png'
import drums from '../../../assets/drums 1.png'

const ExplorerDesktop = () => {
  return (
    <Container>
      <Wrap>
        <Media>
          <MediaWrap>
           <ContainerText>
            <Text>
            "Ancient was the time when flints and mosses were everything."
            </Text>
            <Text>
            "Ancient was the time when flints and mosses were everything."
            </Text>
            <Text>
            "Ancient was the time when flints and mosses were everything."
            </Text>
          </ContainerText>
          <ContainerImage>
          <Logo to='/'><img src={guitar} height={300}/></Logo>
          <Logo to='/'><img src={mic} height={120}/></Logo>
          <Logo to='/'><img src={drums} height={300}/></Logo>
          </ContainerImage>
          <SocialContainer>
            <Text>
            "The universe started out from a long-forgotten dream."
              </Text>
              <Text>
            "The universe started out from a long-forgotten dream."
              </Text>
              <Text>
            "The universe started out from a long-forgotten dream."
              </Text>
          </SocialContainer>
          </MediaWrap>
          
        </Media>
      </Wrap>
    </Container>
  );
};

export default ExplorerDesktop;
