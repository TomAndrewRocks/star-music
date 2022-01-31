import React from 'react';
import {
  Container,
  Wrapper,
  Card,
  Img,
  Info,
  Desc,
  Text
} from './styles';

const Landing = ({ data }) => {
  return (
    <Container>
      <Wrapper>
        {data.map((landing, index) => {
          return (
            <Card key={index}>
              <Img src={landing.img} />
              <Info>
                <Desc>{landing.desc}</Desc>
                <Text>{landing.text}</Text>
              </Info>
            </Card>
          );
        })}
      </Wrapper>
    </Container>
  );
};

export default Landing;
