import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './components/Hero';
import Footer from './components/Footer';
import { GlobalStyle } from './styles/globalStyles';
import Landing from './components/Landing';
import { LandingData } from './context/data';
import Explorer from './components/Explorer';
import Middle from './components/Middle';


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Explorer data={LandingData}/>
      <Middle data={LandingData}/>
      <Landing data={LandingData} />
      <Footer />
    </Router>
  );
}

export default App;
