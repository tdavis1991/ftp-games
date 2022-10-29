import React from 'react';

const GameCard = ({ title, image, platform }) => {
  const handleClick = () => {
    console.log('IT WORKS')
  }
  return (
    <div onClick={handleClick} className='flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer'>
      <img 
        src={image} 
        alt={title}
        className='w-25 h-25 rounded-md'
      />
      <h3>Title: {title}</h3>
      <p>Platform: {platform}</p>
    </div>
  )
}

export default GameCard;