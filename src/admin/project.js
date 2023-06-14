import React, { useState } from 'react'
import axios from 'axios';

const baseUrl = 'https://aadyportfolioapi.cyclic.app/api'

const Project = () => {
    const token = JSON.parse(localStorage.getItem('token'));

    const [body, setBody] = useState({
        url: '',
        repo: '',
        stack: '',
        comment: ''
    });
   
    const handleSubmit = () =>{
        
        const fetchData = async() =>{
            try {
                const res = await axios.post(`${baseUrl}/projectspost`, body, {headers: {Authorization: `Bearer ${token}`}});
                console.log(res.data)
            } catch (error) {
                console.log(error.message);
            }
        }

        fetchData();
    }
    

  return (
    <div className=''>
        <form className='flex flex-col border-4 items-center rounded-md' onSubmit={() => handleSubmit() }>
            <input className=' border-b-4 rounded-lg w-1/3 h-10 m-2 bg-slate-100' type='text' onChange={(e) => setBody(body => ({ ...body, url: e.target.value}))} placeholder='enter url' />
            <input className=' border-b-4 rounded-lg w-1/3 h-10 m-2 bg-slate-100' type='text' onChange={(e) => setBody(body => ({ ...body, repo: e.target.value}))} placeholder='enter repo url' />
            <input className=' border-b-4 rounded-lg w-1/3 h-10 m-2 bg-slate-100' type='text' onChange={(e) => setBody(body => ({ ...body, stack: e.target.value}))} placeholder='enter stack type' />
            <input className=' border-b-4 rounded-lg w-1/3 h-10 m-2 bg-slate-100' type='text' onChange={(e) => setBody(body => ({ ...body, comment: e.target.value}))} placeholder='enter coment' />

            <input className=' border-b-4 rounded-lg w-1/3 h-10 m-2 bg-slate-300' type='submit' value='submit' />
        </form>
    </div>
  )
}

export default Project