import React from 'react';


import GameCard from '../components/GameCard';
import SelectionGroup from '../components/selectionGroup';
import { useGetAllGamesQuery } from '../redux/services/ftpDb';
import Logo from '../image/lighted-dj-board-164745.jpg';

const Home = () => {
  const { data, isFetching, error } = useGetAllGamesQuery();


  return (
    <div className='w-full mt-10'>
      <img 
          src='https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt9695da32975f3e85/62cc8547719eb73892495716/VALORANT_ANNO22_SHATTERED_16x9_27s0.jpg'
          className='w-full'
      />
      <SelectionGroup />
      <div className='flex flex-wrap gap-10 justify-center'>
        {/* {data?.slice(0, 40)?.map((game, i) => ( */}
        {data?.map((game, i) => (
          <GameCard 
            key={i}
            title={game?.title}
            image={game?.thumbnail}
            platform={game?.platform}
            id={game?.id}
          />
        ))}
      </div>
    </div>
  )
}

export default Home