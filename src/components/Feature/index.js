import React from 'react';
import { ColumnContainer, ColumnImage, ColumnMedia, ColumnText, Container, FeatureButton, Wrapper } from './styles';

const Feature = () => {
  return (
     <Container> 
      <Wrapper>
       <ColumnContainer>
        <ColumnMedia>
          <ColumnText></ColumnText>
        </ColumnMedia>
        <ColumnMedia>
          <ColumnImage></ColumnImage>
        </ColumnMedia>
        <ColumnMedia>
          <ColumnText></ColumnText>
        </ColumnMedia>
      </ColumnContainer>
      </Wrapper>
     </Container>
  );
};

export default Feature;
