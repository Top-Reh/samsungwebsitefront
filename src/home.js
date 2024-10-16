import React from 'react';
import Navbar from './navbar.js';
import Firstads from './firstads.js';
import Second from './second.js';
import Thirddiv from './thirddiv.js';
import Fourthdiv from './fourthdiv.js';
import Fifthdiv from './fifthdiv.js';
import Sisthdiv from './sisthdiv.js';
import Seventhdiv from './seventhdiv.js';
import Footer from './footer.js';

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <Firstads/>
      <Second/>
      <Thirddiv/>
      <Fourthdiv/>
      <Fifthdiv/>
      <Sisthdiv/>
      <Seventhdiv/>
      <Footer/>
    </div>
  )
}

export default Home
