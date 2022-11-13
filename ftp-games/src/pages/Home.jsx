import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import GameCard from '../components/GameCard';
// import SelectionGroup from '../components/selectionGroup';
import { useGetSortedGamesQuery } from '../redux/services/ftpDb';
import Logo from '../image/lighted-dj-board-164745.jpg';
import { platforms, categories, sort_by } from '../assets/constants';

const Home = () => {
  const [platform, setPlatform] = useState('browser');
  const [category, setCategory] = useState('action');
  const [sortBy, setSortBy] = useState('release-date')
  const { data, isFetching, error } = useGetSortedGamesQuery({platform: platform, category: category, sort_by: sortBy});
  const [selection, setSelection] = useState('');

  const handleChange = (e) => {
    setSelection({ value: e.target.value })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };


  return (
    <div className='w-full mt-10'>
      <Link to={`game/${data[0]?.id}`}>
        <img 
            // src='https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt9695da32975f3e85/62cc8547719eb73892495716/VALORANT_ANNO22_SHATTERED_16x9_27s0.jpg'
            src={data[0]?.thumbnail}
            className='w-full'
        />
      </Link>
      {/* <SelectionGroup /> */}
      <form onClick={handleSubmit} className='mb-10 bg-stone-300'>
        <label>
          Platform: 
          <select value={selection} onChange={handleChange} className='rounded-lg mr-5 ml-2'>
            {platforms.map((platform) => (
                <option value={platform.value}>{platform.title}</option>
            ))}
          </select>
        </label>
        <label>
          Category: 
          <select value={selection} onChange={handleChange} className='rounded-lg mr-5 ml-2'>
            {categories.map((category) => (
              <option value={category.value}>{category.title}</option>
            ))}
          </select>
        </label>
        <label>
          Sort By: 
          <select value={selection} onChange={handleChange} className='rounded-lg mr-5 ml-2'>
            {sort_by.map((sort) => (
                <option value={sort.value}>{sort.title}</option>
            ))}
          </select>
        </label>
        <button type='submit' className='bg-green-500 rounded-xl'>GO!!</button>
      </form>
      <div className='flex flex-wrap gap-10 justify-center'>
        {/* {data?.slice(0, 40)?.map((game, i) => ( */}
        {data?.slice(1)?.map((game, i) => (
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