import React from 'react'
import './workcard.css'

// import { Link } from 'react-router-dom'
import { Button, Card } from 'react-bootstrap'

function Workcard() {
const  details = [{content:"NetflixForMe",img:"https://images.unsplash.com/photo-1627873649417-c67f701f1949?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG5ldGZsaXh8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",links:"https://netflixforme.netlify.app",source:'https://github.com/AhammedNibras/netflix'},
{content:"Weather App",img:"https://cdn.jim-nielsen.com/ios/512/weather-2021-12-07.png",links:"https://weatherfortoday-app.netlify.app",source:'https://github.com/AhammedNibras/Weather-App.git'},
{content:"Bike Travel",img:"https://cdn.jim-nielsen.com/ios/512/weather-2021-12-07.png",links:"https://bike-travel.netlify.app",source:'https://github.com/AhammedNibras/Bike-Travel.git'},
{content:"Drum kit",img:"https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njl8fHByb2plY3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",links:"https://my-drumkit-app.netlify.app",source:'https://github.com/AhammedNibras/Drum-Kit'},
{content:"Amazon Prime",img:"https://cdn.jim-nielsen.com/ios/512/weather-2021-12-07.png",links:"https://amazonprimeforyou.netlify.app",source:'https://github.com/AhammedNibras/AmazonPrime.git'},

]


  return (
    <div className='work-container' >
        <h1 className='project-heading'>Projects</h1>
        <div className='project-container'>
      {
        details.map((val)=>{
            return (
<Card style={{ width: '18rem',margin:"3rem",border:"1px solid #fff",padding:"0.2rem" }}>
      <Card.Img  variant="top" src={val.img} className="cards" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text style={{padding:"10px"}}>
         {val.content}
        </Card.Text>
        <a href={val.links}><Button style={{margin:"10px"}} variant="primary" >View</Button> </a>
       
       <a href={val.source}> <Button style={{}} variant="primary" > source</Button></a>
      </Card.Body>
    </Card>
            )
        })
      }
      </div>
    </div>
  )
}

export default Workcard
