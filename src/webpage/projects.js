import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const baseUrl = 'https://aadyportfolioapi.cyclic.app/api'
const Projects = () => {

  const [data, setData] = useState([]);

    useEffect(() =>{
        axios.get(`${baseUrl}/projectsget`)
        .then((res) => {
        setData(res.data.slice(0, 3));
        })
        .catch((err) => {
            console.log(err);
        });
    }, [])

  return (
    <div className=' shadow-sm'>
      <h1 className='m-2 text-lg text-center uppercase font-semibold'>Projects</h1><br />
      {
        data?.map(x =>(
          <center key={x._id} >
            <div className=' bg-slate-200 m-2 w-[300px] rounded-lg'>
              <iframe className=' h-[200px] w-[60%] p-2 rounded-lg' src={x.url? x.url: x.repo} title='project frame' />
              <p>COMMENT: {x.comment}</p>
              <p>STACK: {x.stack}</p>
              <a className=' text-blue-600' href={x.url? x.url: '#'} target='_blank' rel='noreferrer'>visit website</a><br />
              <a className=' text-blue-600' href={x.repo} target='_blank' rel='noreferrer'>visit github repo</a>
            </div>
          </center>
        ))
      }
      <button className='text-center'><Link className=' font-medium text-blue-600' to='/projects'>view all projects...</Link></button>
    </div>
  )
}

export default Projects