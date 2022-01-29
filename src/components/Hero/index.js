import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1
} from './HeroElements';
import FullHeight from "react-full-height";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <FullHeight canExceed={true}>
    <HeroContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContent>
        <HeroItems>
          <HeroH1>FOR THE SOUND</HeroH1>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
    </FullHeight>
  );
};

export default Hero;
