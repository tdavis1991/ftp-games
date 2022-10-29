import React from 'react';
import { useParams } from 'react-router-dom';

import { useGetGameDetailsQuery } from '../redux/services/ftpDb';
import GameModal from '../components/GameModal';
import Logo from '../image/lighted-dj-board-164745.jpg';

const GameDetails = () => {
  const { id } = useParams();
  const { data, isFetching, error } = useGetGameDetailsQuery({ id });
  console.log(data?.screenshots)

  return (
    <div className='flex-col'>
      <div className='flex justify-center items-center'>
        <div className='w-full'>
          <img 
            src={data?.thumbnail}
            alt='game.title'
            className='w-full'
          />
        </div>
        <div className='flex-col w-5/6 ml-10'>
          <h1 className='mb-10'>{data?.title}</h1>
          <h3 className='font-bold mb-5'>Release Date: {data?.release_date}</h3>
          <p>{data?.description}</p>
        </div>
      </div>
      {data?.screenshots.length ? (
        <div className='mt-10'>
          <h3 className='mb-8'>Screenshots</h3>
          <div className='flex gap-5'>
            {data?.screenshots?.map((image) => (
              <img 
                src={image.image}
                className='w-[150px] h-[150px]'
              />
            ))}
          </div>
        </div>
      ) : (
        null
      )}
      
    </div>
  )
}

export default GameDetails;