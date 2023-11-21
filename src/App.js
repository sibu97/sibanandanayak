import React from 'react';
import Header from './components/Header'

import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import './app.css';
import './css/style.css'
function App() {
  return (
    <div data-spy="scroll"  data-offset="150">

    <Header />
      
    </div>
  );
}

export default App;
