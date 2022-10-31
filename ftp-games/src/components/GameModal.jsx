import React from 'react'

const GameModal = ({ image }) => {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
      <img src={image} 
        className='w-1/2'
      />
    </div>
  )
}

export default GameModal;