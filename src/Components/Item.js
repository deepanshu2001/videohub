import React from 'react';

import {Link}  from 'react-router-dom';
function Item({ item }) {
  return (
    <div className='text-white mb-6 w-80 p-2 cursor pointer'>
      <div className='relative'>
      <Link to={{ pathname: `/watch/${item.videoId}`, state: { item } }}>
        <img className='w-full h-44 object-cover cursor-pointer' src={item.image} alt={item.title} />
        </Link>
        
        <div className='absolute bottom-0 right-0 bg-black bg-opacity-75 text-white text-xs p-1 m-2 rounded'>
          {item.duration}
        </div>
      </div>
      <div className='mt-2'>
        <div className='text-white font-bold text-sm'>
          {item.title}
        </div>
        <div className='text-gray-400 text-xs'>
          {item.channelName}
        </div>
        <div className='text-gray-400 text-xs'>
          {item.views} • {item.time}
        </div>
      </div>
    </div>
  );
}

export default Item;
