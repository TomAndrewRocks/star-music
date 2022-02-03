import React from 'react';
import { Container, Wrap, ContainerImage, ContainerText, Logo, Media, MediaWrap, Text, SocialContainer } from './styles'

import guitar from '../../../assets/rotate-guitar.png'
import mic from '../../../assets/mic 1.png'
import drums from '../../../assets/drums 1.png'

const ExplorerMobile = () => {
  return (
    <Container>
      <Wrap>
        <Media>
          <MediaWrap>
          <ContainerImage>
          <Logo to='/'><img src={guitar} height={250}/></Logo>
          </ContainerImage>
           <ContainerText>
            <Text>
            "Ancient was the time when flints and mosses were everything."
            </Text>
          </ContainerText>
          <ContainerImage>
          <Logo to='/'><img src={mic} height={130} style={{ transform: [{ rotate: '90deg'}]}}/></Logo>
          </ContainerImage>
           <ContainerText>
            <Text>
            "The universe started out from a long-forgotten dream."
            </Text>
          </ContainerText>
          <ContainerImage>
          <Logo to='/'><img src={drums} height={300}/></Logo>
          </ContainerImage>
           <ContainerText>
            <Text>
            "Ancient was the time when flints and mosses were everything."
            </Text>
          </ContainerText>
          </MediaWrap>   
        </Media>
      </Wrap>
    </Container>
  );
};

export default ExplorerMobile;
