import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Menu';
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1
} from './styles';

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (

    <HeroContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContent>
        <HeroItems>
          <HeroH1>FOR THE SOUND</HeroH1>
        </HeroItems>
      </HeroContent>
    </HeroContainer>

  );
};

export default Hero;
