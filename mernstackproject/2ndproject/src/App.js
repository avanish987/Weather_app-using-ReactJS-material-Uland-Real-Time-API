import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Cricktteam from './Components/Cricketteam';
import Allusers from './Components/Allusers';
import Addusers from './Components/Addusers';


function App() {
  return (
    <>
      <Navbar />
      <Cricktteam />
      <Allusers />
      <Addusers />
    </>
  );
}

export default App;
