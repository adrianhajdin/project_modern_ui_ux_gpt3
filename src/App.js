import React from 'react';
import Footer from './container/footer/Footer';
import './App.css';
import Blog from './container/blog/Blog';
import CTA from './components/cta/CTA';
import Possibility from './container/possibility/Possibility';
import Features from './container/features/Features';

function App() {
  return (
    <div className="App">
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
