import React from 'react';
import Footer from './container/footer/Footer';
import Blog from './container/blog/Blog';
import CTA from './components/cta/CTA';
import Possibility from './container/possibility/Possibility';
import Features from './container/features/Features';
import WhatGPT3 from './container/whatGPT3/WhatGPT3';
import Brand from './components/brand/Brand';
import Header from './container/header/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
