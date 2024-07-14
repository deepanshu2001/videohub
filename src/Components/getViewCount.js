import React from 'react'

function getViewCount(view) {
//   console.log(view);
  if(view>=1000000000){
    return (view/1000000000).toFixed(0) + "B views";
  }
  else if(view>=1000000){
    return (view/1000000).toFixed(0) +"M views"
  }
  return (view/1000).toFixed(0) +"K views"
}

export default getViewCount