import React from 'react';
import Navbar from './component/NavBar';
import Container from '@material-ui/core/Container'
import './App.css';
//import AppRouter from '/component/AppRouter';
import LoginPage from './component/LoginPage';
import TransitionsModal from './component/LoginPage';

function App() {
  return (
    <div>
      <header>
      </header>
      <Navbar/>
      <Container>
        {/*<AppRouter/>*/}
      </Container>
    </div>
  );
}

export default App;
