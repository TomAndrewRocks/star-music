import React from 'react';
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink,
  SocialContainer,
  SocialText
} from './styles';
import phone from '../../assets/phone.png'
import mail from '../../assets/mail.png'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
           <SocialContainer>
            <SocialLogo to='/'><img src={phone} height={30}/></SocialLogo>
            <SocialText>
            xxxxx-xxxxx
            </SocialText>
          </SocialContainer>
         
          <SocialContainer>
            <SocialLogo to='/'><img src={mail} height={30}/></SocialLogo>
            <SocialText>
            mail@gmail.com
              </SocialText>
          </SocialContainer>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
