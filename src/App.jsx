import React, { useState } from 'react';
import YellowShape from './assets/yellow-shape.png';
import GrayShape from './assets/gray-shape.png';
import StartPage from './components/StartPage';

function App() {
      return (
          <div className="container">
             <img src={ YellowShape } className="yellow-background"/>
             <StartPage />
             <img src={ GrayShape } className="gray-background"/>   
          </div>  
      );  
}

export default App
