import React, { useState } from 'react';

import GameModal from './GameModal';


const Screenshot = ({ image }) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen, 'MODAL')

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div onClick={handleClick} className='hover:cursor-pointer'>
      <img
        src={image}
        className='w-[150px] h-[150px]'
      />
      {isOpen ? <GameModal image={image} /> : null}
    </div>
  )
}

export default Screenshot;