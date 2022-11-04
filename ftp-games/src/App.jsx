import { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import GameDetails from './pages/GameDetails';

function App() {

  return (
    <div className='w-full'>
      <Link to='/'>
        <h1 className='relative top-0 font-bold'>FTP Games</h1>
      </Link>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/game/:id' element={<GameDetails />} />
      </Routes>
    </div>
  )
}

export default App
