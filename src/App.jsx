import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData } from './components/Products/data';
import Middle from './components/Middle';
import { MiddleData } from './components/Middle/data';
import Feature from './components/Feature';
import Footer from './components/Footer';
import { GlobalStyle } from './styles/globalStyles';


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Feature />
      <Middle data={MiddleData}/>
      <Products data={productData} />
     
      <Footer />
    </Router>
  );
}

export default App;
