import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import GameCard from '../components/GameCard';
import Pagination from '../components/Pagination';
import { useGetSortedGamesQuery, useGetAllGamesQuery } from '../redux/services/ftpDb';
import Logo from '../image/lighted-dj-board-164745.jpg';
import { platforms, categories, sort_by } from '../assets/constants';

const Home = () => {
  const [games, setGames] = useState([]);
  const [sort, setSort] = useState({
      platform: '',
      category: '',
      sortBy: ''
  }); 

  const { data, isFetching, error } = useGetSortedGamesQuery({platform: sort.platform, category: sort.category, sort_by: sort.sortBy});
  const { data: allGames, isFetching: fetchingAll, error: errorAll } = useGetAllGamesQuery();

  useEffect(() => {
    setGames(allGames)
  }, [allGames]);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(20);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  console.log(currentPage, lastPostIndex)
  // const currentPost = games.slice(firstPostIndex, lastPostIndex);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSort((prevState) => {
      return {
        ...prevState,
        [name]: value 
      }
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setGames(data);
  };


  return (
    <div className='w-full mt-10'>
      <img 
              src='https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt9695da32975f3e85/62cc8547719eb73892495716/VALORANT_ANNO22_SHATTERED_16x9_27s0.jpg'
              className='w-full'
          />
      <form onSubmit={handleSubmit} className='mb-10 p-2 bg-stone-300'>
        <label>
          Platform: 
          <select name='platform' value={sort.platform} onChange={handleChange} className='rounded-lg mr-5 ml-2'>
            {platforms.map((platform) => (
                <option value={platform.value}>{platform.title}</option>
            ))}
          </select>
        </label>
        <label>
          Category: 
          <select name='category' value={sort.category} onChange={handleChange} className='rounded-lg mr-5 ml-2'>
            {categories.map((category) => (
              <option value={category.value}>{category.title}</option>
            ))}
          </select>
        </label>
        <label>
          Sort By: 
          <select name='sortBy' value={sort.sortBy} onChange={handleChange} className='rounded-lg mr-5 ml-2'>
            {sort_by.map((sort) => (
                <option value={sort.value}>{sort.title}</option>
            ))}
          </select>
        </label>
        <button type='submit' className='bg-green-500 rounded-xl'>GO!!</button>
      </form>
      <div className='flex flex-wrap gap-10 justify-center'>
        {games?.slice(firstPostIndex, lastPostIndex)?.map((game, i) => (
          <GameCard 
            key={i}
            title={game?.title}
            image={game?.thumbnail}
            platform={game?.platform}
            id={game?.id}
          />
        ))}
      </div>
      {games.length > 20 ? (
        <Pagination totalPosts={games.length} postsPerPage={postsPerPage} currentPage={currentPage} setCurrentpage={setCurrentPage} />
      ) : (
        null
      )}
    </div>
  )
}

export default Home