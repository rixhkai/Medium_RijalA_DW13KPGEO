import React from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Typography, Button } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import SearchAppBar from './NavBar';
import ScrollableTabsButtonForce from './Tab';


function App() {
  return (
    <div>
    <div >
      <header >
      </header>
        <SearchAppBar/>
    </div>
    <ScrollableTabsButtonForce position="sticky"/>
    
    </div>
  );
}

export default App;
