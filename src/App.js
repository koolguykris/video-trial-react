import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image1 from './Image1'
import Image2 from './Image2'
import Image3 from './Image3'
import Monsoon3 from './Monsoon3.js'
import Beams from './Beams.js'
import Move2 from './Move2.js'
import css from './index.css'
import css2 from './index2.css'
import css3 from './index3.css'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <div className="first-section">
          <div class="imgbox">
          <Image1 />
          </div>
          <div className="content">
          <Monsoon3 />
             </div>
            </div>
          <div class="second-section">
          <div className="content2">
          <Beams />
          </div>
          <div class="imgbox2">
          <Image2 />
          </div>
         </div>

         <div className="third-section">
         <div class="imgbox3">
         <Image3 />
         </div>
         <div className="content3">
         <Move2 />
            </div>
           </div>
        </header>
      </div>
    );
  }
}

export default App;
