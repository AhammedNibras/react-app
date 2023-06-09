import React from 'react'
import './heroimg.css'
// import introimg from '../assets/pexels-annam-w-1120162.jpg'
import { Link } from 'react-router-dom'

function Heroimg() {
  return (
    <div className='hero'>
    <div className='mask'>
      <img className='into-img' src='https://plus.unsplash.com/premium_photo-1673137880762-46320e8b8e16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29kaW5nJTIwd2FsbHBhcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60' alt="" srcset="" />
      </div>
      <div className="content">
        <p>hello! </p>
        <h3>I am Ahammed Nibras</h3>
        <h1>Web Developer</h1>
        <div>
            <Link to={'/project'} className='btn'>Projects
            </Link>
            <Link to={'/contact'} className='btn btn-light'>Contact
            </Link>
        </div>
      </div>
    
    </div>
  )
}

export default Heroimg
