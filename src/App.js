import React from 'react';
import Navbar from './components/Navbar/Navbar.js'
import Slider from './components/Slider/Slider.js'
import Footer from './components/Footer/Footer.js'
import Own_card from './components/UI/Own_card.js';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch);

const App = () => {
  return (
    <div>
      <Navbar/>
      <Slider/>
      <Own_card/>
      <Footer/>
    </div>
  );
}

export default App;
