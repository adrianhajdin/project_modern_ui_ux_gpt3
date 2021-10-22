import React from 'react';
import Footer from './container/footer/Footer';
import './App.css';
import Blog from './container/blog/Blog';
import CTA from './components/cta/CTA';
import Possibility from './container/possibility/Possibility';
import Features from './container/features/Features';
import WhatGPT3 from './container/whatGPT3/WhatGPT3';

function App() {
  return (
    <div className="App">
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
