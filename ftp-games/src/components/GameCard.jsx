import React from 'react';
import { Link } from 'react-router-dom';

const GameCard = ({ title, image, platform, id }) => {
  const handleClick = () => {
    console.log('IT WORKS')
  }
  return (
    <div onClick={handleClick} className='flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer'>
      <Link to={`/game/${id}`}>
        <img 
          src={image} 
          alt={title}
          className='w-25 h-25 rounded-md'
        />
        <h3>Title: {title}</h3>
        <p>Platform: {platform}</p>
      </Link>
    </div>
  )
}

export default GameCard;