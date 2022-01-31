import React from 'react';
import {
  Container,
  Icon,
  CloseIcon,
  MenuContainer,
  GoTo
} from './styles';
import close from '../../assets/close.png'

const Menu = ({ isOpen, toggle }) => {
  return (
    <Container isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon src={close}/>
      </Icon>
      <MenuContainer>
        <GoTo to='/'>Home</GoTo>
        <GoTo to='/'>Explorer</GoTo>
        <GoTo to='/'>Landing</GoTo>
      </MenuContainer>
    </Container>
  );
};

export default Menu;
