import React from 'react'

function getDuration(time) {
   return time.replace('P','').replace('T','').replace('H',":").replace('M',":").replace("S","")
}

export default getDuration