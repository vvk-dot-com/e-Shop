import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Checkout from './Checkout';

function App() {
  return (
    <div>
      <Router>
          
        <Routes>
          <Route path="/checkout" element={  <Checkout />} />
                
          <Route path="/">
                <Header />
                <Home />
          </Route>

        </Routes>
      </Router>  
       
    </div>
   
  )
}

export default App;
