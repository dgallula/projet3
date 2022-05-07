import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import CharAdmin from './comp/CharAdmin';
import Header from './comp/Header';
import Main from './comp/Main';

export default function App() {
  return (
    <div>
      <Router>
          <Header />
          <Main />
          <CharAdmin/>
          
      </Router>
    </div>
  )
}
