import React, { useEffect, useState } from 'react'
import axios from 'axios'

import baseUrl from '../components/baseurl'

const ProjectsSep = () => {

    const [data, setData] = useState([]);

    useEffect(() =>{
        axios.get(`${baseUrl}/projectsget`)
        .then((res) => {
        setData(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, [])

  return (
    <div className='shadow-sm'>
        <h1 className='m-2 text-lg text-center'>AADY Projects</h1>
        {
          data?.map(x =>(
            <center key={x._id} >
              <div key={x._id} className=' bg-slate-200 m-2 w-[300px] rounded-lg'>
                <iframe className=' h-[200px] w-[60%] p-2 rounded-lg' src={x.url? x.url: x.repo} title='project frame' />
                <p>COMMENT: {x.comment}</p>
                <p>STACK: {x.stack}</p>
                <a className=' text-blue-600' href={x.url? x.url: '#'} target='_blank' rel='noreferrer'>visit website</a><br />
                <a className=' text-blue-600' href={x.repo} target='_blank' rel='noreferrer'>visit github repo</a>
              </div>
            </center>
          ))
        }
    </div>
  )
}

export default ProjectsSep