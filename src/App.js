import React from 'react';
import Footer from './container/footer/Footer';
import './App.css';
import Blog from './container/blog/Blog';
import CTA from './components/cta/CTA';

function App() {
  return (
    <div className="App">
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
