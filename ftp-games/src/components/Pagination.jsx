import React from 'react';

const Pagination = ({ totalPosts, postsPerPage, currentPage, setCurrentpage }) => {
  let pages = [];

  for(let i = 1; i<= Math.ceil(totalPosts/postsPerPage); i++) {
    pages.push(i)
  }
  return (
    <div className='m-10 gap-5'>
      <button onClick={() => setCurrentpage(currentPage-1)}>Prev</button>
      {
        pages.slice(0, 5).map((page, i) => (
          <button className='ml-2 mr-2' key={i} onClick={() => setCurrentpage(page)}>{page}</button>
        ))
      }
      <button onClick={() => setCurrentpage(currentPage+1)}>Next</button>
    </div>
  ) 
}

export default Pagination;