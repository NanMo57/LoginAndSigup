import React, { useContext } from 'react'
import {data} from '../App'

function ErrorPage() {
  const {textStyle} = useContext(data)

  return (
    <div className='content d-flex flex-column justify-content-center align-items-center' style={textStyle} >
      <h1 className='ErrorPage'>404</h1>
      <p>Page Not Found Error</p>
    </div>
  )
}

export default ErrorPage
