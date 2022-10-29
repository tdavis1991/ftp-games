import { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import GameDetails from './pages/GameDetails';
import { useGetAllGamesQuery } from './redux/services/ftpDb';

function App() {
  // const { data, isFetching, error } = useGetAllGamesQuery();

  // console.log(data, 'DATA')

  return (
    <div className='w-full'>
      <Link to='/'>
        <h1>FTP Games</h1>
      </Link>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/game/:id' element={<GameDetails />} />
      </Routes>
    </div>
  )
}

export default App
