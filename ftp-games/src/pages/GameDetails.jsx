import React from 'react';
import { useParams } from 'react-router-dom';

import { useGetGameDetailsQuery } from '../redux/services/ftpDb';
import Logo from '../image/lighted-dj-board-164745.jpg';

const GameDetails = () => {
  const { id } = useParams();
  const { data, isFetching, error } = useGetGameDetailsQuery(id);

  return (
    <div className='flex'>
      <div className='w-full'>
        <img 
          src={Logo}
          alt='game.title'
        />
      </div>
      <div className='flex-col w-full items-start'>
        <h1>Fortnite</h1>
        <h3>10-21-2017</h3>
        <h3>Genre: Shooter</h3>
        <h3>Platform: PC</h3>
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
      </div>
    </div>
  )
}

export default GameDetails