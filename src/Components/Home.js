import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import '../index.css';
import '../App.css';
import Sidebar from './Sidebar'
import Content from '../Content';
function Home() {
  const [searchTerm,setSearch]=useState("");
  let searchItem="";
  function handleSubmit(val){
    
    setSearch(val);
   
  }
  useEffect(()=>{
     searchItem=searchTerm
     
  },[searchTerm])
  return (
    <div className="bg-[#212121] h-screen overflow-hidden flex flex-col">
    <Navbar onSub={handleSubmit} />
    <div className="flex flex-1 overflow-hidden">
      <Sidebar className="w-64 flex-shrink-0" />
      <div className="flex-1 overflow-hidden">
        <Content searchItem={searchTerm} />
      </div>
    </div>
  </div>
  );
}

export default Home;
