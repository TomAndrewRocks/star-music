import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { MdMenu } from 'react-icons/md';

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: center;
  font-weight: 700;
`;

export const LinkImageDesktop = styled(Link)`
  cursor: pointer;
  position: absolute;
  left: 0;
  margin: 1%;
  height: 140!important;

  @media screen and (min-width: 769px) {
   display:block;
  }

  @media screen and (max-width: 768px) {
   display:none;
  }

`;

export const LinkImageMobile = styled(Link)`
  cursor: pointer;
  position: absolute;
  left: 0;
  margin: 1%;
  height: 140!important;

  @media screen and (min-width: 769px) {
   display:none;
  }

  @media screen and (max-width: 768px) {
   display:block;
  }

`;

export const NavImage = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #fff;
  font-size: 2rem;

`;



export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #fff;
 
  @media screen and (min-width: 769px) {
   display:none;
  }

  @media screen and (max-width: 768px) {
   display:block;
   margin: 4%;
  }
`;

export const Bars = styled(MdMenu)`
  font-size: 3rem;
  transform: translate(-50%, -15%);
`;

export const SidebarMenu = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  margin: 0.7%;
`;

export const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  font-family: 'Saira Condensed'!important;
  cursor: pointer;

  &:hover {
    color: #B83838;
    transition: 0.2s ease-in-out;
  }

  @media screen and (min-width: 769px) {
   display:block;
  }

  @media screen and (max-width: 768px) {
   display:none;
  }
`;
