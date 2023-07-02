import React, { useEffect } from 'react'

const Home = (props) => {
  useEffect(()=>{
  props.setProgress(30)
  
  },[props])
 
  
   
  return (
    <div>Home</div>
  )
}

export default Home