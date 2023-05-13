import React from 'react'
import {AiFillGithub} from 'react-icons/ai'
import {  FaHome, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa'
import './footer.css'
function Footer() {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
            <div className="location">
                <FaHome size={20} style={{color:'#fff'}}/>
                </div>    
                <div >
                   <p>Muhaisnah 4, Dubai</p>
                   <br></br>
                   <p></p>

                </div>
                <div className='phone'>
                <h4><FaPhone size={20} style={{color:"#fff",marginRight:'2rem'}}/>
                +971 50 356 6408</h4>
                </div>
                <div className='mail'>
                <h4><FaMailBulk size={20} style={{color:"#fff",marginRight:'2rem'}}/>
               ahammednibras@gmail.com</h4>
                </div>
                
           
        
      </div>
      <div className="right">
        <h4>This is me Ahammed</h4>
        <p>I enjoy doing coding,Looking forward to do more projects</p>
      
      <div className="social">

       <a href='https://github.com/AhammedNibras'><AiFillGithub size={30} style={{color:'#fff',marginRight:'1rem'}}/></a> 
       <a href='www.linkedin.com/in/ahammed-nibras-33478924b' ><FaLinkedin size={30} style={{color:'#fff',marginRight:'1rem'}}/>

</a> 
      
 
        </div>
      </div>
      </div>
    </div>
  )
}

export default Footer
