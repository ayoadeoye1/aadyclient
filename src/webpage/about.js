import React, { useState, useEffect } from 'react'
import axios from 'axios';
import YouTube from 'react-youtube'

const baseUrl = 'https://aadyportfolioapi.cyclic.app/api/'

const About = () => {

  const [data, setData] = useState([]);

  useEffect(() =>{
    axios.get(`${baseUrl}/aboutmeget/648706cfb93cba72f3b1bfe2`)
    .then((res) => {
      setData(res.data);
    })
    .catch((err) => {
        console.log(err);
    });
  }, [])


  return (
    <div>
      <div key={data._id}>
        <div className='leading-8 sm:leading-10 p-6 font-lead'>{data && data.about}</div>
        <center className=' w-full'>
          <h2>About Video</h2>
          <YouTube videoId={data.vidUrl?.split('/')[3]} opts={{ height: '250px', width: '300px'}}  />
        </center>
      </div>
    </div>
  )
}

export default About

// Hello, I am Ayobami Isaac Adeoye, experienced javascript developer, i have been doing javascript programming since the past 4 years, 
//         i have worked with various javascript libraries, frameworks and runtime, but my major focus is on backend (rest API) 
//         development with nodejs, and minor reactjs frontend development. i'll make a well secured MERN stack application for your 
//         you/bussiness, same origin or cross origin at affordable rate, 
//         come-on, let's take your bussiness to the next level. Hit the Contact Button Above!.