import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100vh;
  background: linear-gradient(#1026F0, #e66465);
  display: grid;
  align-items: center;
  top: 0;
  transition: 0.85s ease-in-out;
  top: ${({ isOpen }) => (isOpen ? '0' : '-3000px')};

  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;

export const CloseIcon = styled.img`
  color: #dfdfdf;
  height: 2.5rem
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.4rem;
  right: 1.5rem;
  background: transparent;
  border: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const MenuContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(3, 60px);
  }
`;

export const GoTo = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.9rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;
  font-family: 'Saira Condensed'!important;
  font-weight: 500;

  &:hover { 
    opacity: 0.6;
    transition: 0.15s ease-out;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const Route = styled(Link)`
  background: #e31837;
  white-space: nowrap;
  padding: 16px 64px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
