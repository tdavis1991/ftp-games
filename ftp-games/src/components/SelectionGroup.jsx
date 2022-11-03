import React, { useState, useEffect } from 'react';

import { platforms, categories, sortBy } from '../assets/constants';

const SelectionGroup = () => {
  const [selection, setSelection] = useState('');

  const handleChange = (e) => {
    setSelection({ value: e.target.value })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
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
          {sortBy.map((sort) => (
              <option value={sort.value}>{sort.title}</option>
          ))}
        </select>
      </label>
      <button type='submit' className='bg-green-500 rounded-xl'>GO!!</button>
    </form>
  )
}

export default SelectionGroup;