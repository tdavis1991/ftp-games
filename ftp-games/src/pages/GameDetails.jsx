import React from 'react';
import { useParams } from 'react-router-dom';
import { IoGameControllerOutline, IoCalendarOutline, IoGridOutline } from 'react-icons/io5';

import { useGetGameDetailsQuery } from '../redux/services/ftpDb';
import GameModal from '../components/GameModal';
import Screenshot from '../components/Screenshot';
import Logo from '../image/lighted-dj-board-164745.jpg';

const GameDetails = () => {
  const { id } = useParams();
  const { data, isFetching, error } = useGetGameDetailsQuery({ id });

  return (
    <div className='flex-col'>
      <div className='justify-center items-center'>
        <h1 className='mb-10'>{data?.title}</h1>
        <div className='w-full'>
          <img 
            src={data?.thumbnail}
            alt='game.title'
            className='w-full'
          />
        </div>
      </div>
      <div className='flex mt-10 gap-10 justify-center items-center bg-black/5 bg-opacity-80 backdrop-blur-sm rounded-md p-5'>
        <div className='w-1/2 justify-start'>
          <h3 className='border-b-4 pb-5'><IoGameControllerOutline size={40} style={{ display: 'inline' }} /> Platforms: {data?.platform}</h3>
          <h3 className='mb-5 border-b-4 py-5'><IoCalendarOutline size={40} style={{ display: 'inline' }} /> Release Date: {data?.release_date}</h3>
          <h3 className='mb-5 border-b-4 pb-5'><IoGridOutline size={40} style={{ display: 'inline' }} /> Genre: {data?.genre}</h3>
        </div>
        <div className='w-1/2'>
          <p>{data?.description}</p>
        </div>
      </div>
      <div className='flex justify-center mt-10 gap-10'>
        <a href={`${data?.game_url}`}>
          <button className='bg-blue-400'>Go to Website</button>
        </a>
        {data?.minimum_system_requirements ? (
          <select className='rounded-md'>
            <option>OS: {data?.minimum_system_requirements?.os}</option>
            <option> Processor: {data?.minimum_system_requirements?.processor}</option>
            <option>Memory: {data?.minimum_system_requirements?.memory}</option>
            <option>Graphics: {data?.minimum_system_requirements?.graphics}</option>
            <option>Storage: {data?.minimum_system_requirements?.storage}</option>
          </select>
        ) : (
          null
        )}
      </div>
      {data?.screenshots.length ? (
        <div className='mt-10'>
          <h3 className='mb-8'>Screenshots</h3>
          <div className='flex gap-5'>
            {data?.screenshots?.map((image) => (
              <Screenshot image={image?.image} />
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

{/* <div className='flex-col'>
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
        <Screenshot image={image?.image} />
      ))}
    </div>
  </div>
) : (
  null
)}

</div> */}