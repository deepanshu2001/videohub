import React,{useState,useEffect} from 'react'
import axios from 'axios'

import { useLocation, useParams } from 'react-router-dom'
function Watch() {
  const location=useLocation();
  const {videoId}=useParams();
  const [item,setItem]=useState("");
  useEffect(()=>{
      if(location.state?.item){
        setItem(location.state.item);
      }
  },[location,item])
  
  return (
    <div className='bg-[#212121] min-h-screen text-white p-4'>
    <div className='max-w-4xl mx-auto'>
      <iframe
        width="100%"
        height="500"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube video player"
      ></iframe>
      <h1 className='text-2xl font-bold mt-4'>{item.title}</h1>
      <p className='text-gray-400'>{item.channelName}</p>
      <p className='text-gray-400'>{item.views} • {item.time}</p>
    </div>
  </div>
  )
}

export default Watch