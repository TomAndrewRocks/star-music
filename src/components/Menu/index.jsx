import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap
} from './styles';
import close from '../../assets/close.png'

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon src={close}/>
      </Icon>
      <SidebarMenu>
        <SidebarLink to='/'>Home</SidebarLink>
        <SidebarLink to='/'>Explorer</SidebarLink>
        <SidebarLink to='/'>Landing</SidebarLink>
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default Sidebar;
