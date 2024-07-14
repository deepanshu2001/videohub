import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaYoutube } from 'react-icons/fa';
import { MdOutlineSearch } from 'react-icons/md';
import { FaMicrophone } from 'react-icons/fa';
import { MdVideoCall } from 'react-icons/md';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { useLocation, useNavigate } from "react-router-dom";
import '../index.css';
import getDuration from './getDuration';
import getViewCount from './getViewCount';
import '../App.css';
import { formatDistanceToNow } from 'date-fns';

function Navbar({onSub}) {
  const [searchTerm,setSearch]=useState("");
  const API_KEY=process.env.REACT_APP_API_KEY;
  
  function handleSubmit(e){
   
    e.preventDefault();
    onSub(searchTerm);
  }
  function handleChange(e){
   
    setSearch(e.target.value);
  }
  return (
    <div className='flex items-center justify-between w-full bg-[#212121] py-4 px-6 h-7.6 text-white text-2xl'>
      <div className='flex items-center'>
        <GiHamburgerMenu className='text-2xl mr-6' />
        <div className='flex items-center mr-8'>
          <FaYoutube className='text-red-600 mr-2' />
          <span className='font-bold'>YouTube</span>
        </div>
      </div>
      <div className='flex items-center w-full max-w-lg mx-auto'>
        <form onSubmit={handleSubmit} >
          <input
            className='bg-[#0f0f0f] flex-grow p-2 rounded-l-lg focus:border-5 focus:outline-none focus:border-white'
            type='text'
            placeholder='Search'
            value={searchTerm}
            onChange={(e)=>handleChange(e)}
          />
          <button type='submit' className='p-2 bg-gray-700 rounded-r-lg'>
            <MdOutlineSearch />
          </button>
        </form>
        
        <FaMicrophone className='ml-6 text-2xl' />
      </div>
      <div className='flex items-center text-2xl'>
        <MdVideoCall className='mr-6' />
        <div >
        
          <IoMdNotificationsOutline className='mr-6 relative' />
          <div className='absolute top-7 right- text-xs bg-red-600 rounded-full h-5 w-5 flex items-center justify-center transform translate-x-1/2 -translate-y-1/2'>
            <span className='text-white'>9+</span>
          </div>
        </div>
        <img
          className='w-10 h-10 rounded-full border-2 border-white'
          src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/99f60d20-280c-4f6b-bcc5-00cf863817e3/dfps5jp-87a8180c-f911-4746-8ccf-37d384432b32.jpg/v1/fill/w_1280,h_1280,q_75,strp/ghost_rider_by_exilul3d_dfps5jp-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzk5ZjYwZDIwLTI4MGMtNGY2Yi1iY2M1LTAwY2Y4NjM4MTdlM1wvZGZwczVqcC04N2E4MTgwYy1mOTExLTQ3NDYtOGNjZi0zN2QzODQ0MzJiMzIuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.4U_jQLozuvVm3qJ-nsiLRC5VP5QIzlF7hqzcmM9tmV4'
          alt='Profile'
        />
      </div>
    </div>
  );
}

export default Navbar;
