import React from 'react';
import { FooterContainer, FooterWrap, SocialContainer, SocialLogo, SocialMedia, SocialMediaWrap, SocialText } from './styles'

import phone from '../../assets/phone.png'
import mail from '../../assets/mail.png'

const Explorer = ({ data }) => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
        {data.map((explorer, index) => {
          return (
          <SocialMediaWrap key={index}>
           <SocialContainer>
            <SocialText>
            "Ancient was the time when flints and mosses were everything."
            </SocialText>
          </SocialContainer>
          <SocialContainer>
          <SocialLogo to='/'><img src={phone} height={30}/></SocialLogo>
          </SocialContainer>
          <SocialContainer>
            <SocialText>
            "The universe started out from a long-forgotten dream."
              </SocialText>
          </SocialContainer>
          </SocialMediaWrap>
          );
        })}
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Explorer;
