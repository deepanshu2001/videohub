import React from 'react';
import '../App.css';
import '../index.css';
import { IoHomeOutline } from 'react-icons/io5';
import { SiYoutubeshorts } from 'react-icons/si';
import { MdOutlineSubscriptions } from 'react-icons/md';
import { FaHistory } from 'react-icons/fa';
import { AiOutlineLike } from 'react-icons/ai';
import { MdOutlineWatchLater } from 'react-icons/md';
import { CgPlayListSearch } from "react-icons/cg";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { GrChannel } from "react-icons/gr";
function Sidebar() {
  const mainoptions = [
    {
      icon: <IoHomeOutline />,
      name: 'Home',
    },
    {
      icon: <SiYoutubeshorts />,
      name: 'Shorts',
    },
    {
      icon: <MdOutlineSubscriptions />,
      name: 'Your Subscriptions',
    },
  ];

  const sideoptions = [
    {
        icon:<GrChannel/>,
        name:"Your channel"
    },
    {
      icon: <FaHistory />,
      name: 'History',
    },
    {
      icon:<CgPlayListSearch/>,
      name:"Playlists"
    },
    {
        icon:<MdOutlineOndemandVideo/>,
        name:"Your Videos"
    },
    {
      icon: <MdOutlineWatchLater />,
      name: 'Watch Later',
    },
    {
      icon: <AiOutlineLike />,
      name: 'Liked Videos',
    },
  ];

  return (
    <div className='bg-[#212121] w-64 h-screen text-xl flex flex-col p-4'>
      <div className='mb-4'>
        {mainoptions.map((item, index) => (
          <div
            key={index}
            className='flex items-center p-2 mb-2 hover:bg-gray-700 rounded-lg cursor-pointer'
          >
            <span className='text-white text-2xl mr-4'>{item.icon}</span>
            <span className='text-white'>{item.name}</span>
          </div>
        ))}
      </div>
      <hr className='border-gray-600 my-4' />
      <div>
        {sideoptions.map((item, index) => (
          <div
            key={index}
            className='flex items-center p-2 mb-2 hover:bg-gray-700 rounded-lg cursor-pointer'
          >
            <span className='text-white text-2xl mr-4'>{item.icon}</span>
            <span className='text-white'>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
