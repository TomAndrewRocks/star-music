import React from 'react';
import { Nav, NavLink, NavIcon, Bars, SidebarMenu, SidebarLink, LinkImageDesktop, LinkImageMobile } from './styles';
import logo from '../../assets/logo.png'

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <LinkImageDesktop to='/'>
        <img src={logo} alt="Logo" height={130}/></LinkImageDesktop>
        <LinkImageMobile to='/'>
        <img src={logo} alt="Logo" height={70}/></LinkImageMobile>
        <SidebarMenu>
        <SidebarLink to='/'>Home |</SidebarLink>
        <SidebarLink to='/'>Explorer |</SidebarLink>
        <SidebarLink to='/'>Landing</SidebarLink>
      </SidebarMenu>
      <NavIcon onClick={toggle}>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
