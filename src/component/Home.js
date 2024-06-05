import React, { useContext, useEffect } from 'react'
import {data} from '../App'

function Home() {
 const {textStyle,Login,usenavigation} = useContext(data)
 
 useEffect(()=>{
    if(!Login){
        usenavigation('/LoginAndSigup')
    }
 },[Login])
  return (
    <div className='content d-flex justify-content-center align-items-center'>
      <h1 className='fs-1' style={textStyle}>Welcom To E-Shopping Website</h1>
    </div>
  )
}

export default Home
