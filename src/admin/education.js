import React, { useState } from 'react'
import axios from 'axios';

const baseUrl = 'https://aadyportfolioapi.cyclic.app/api'

const Edu = () => {
    const token = JSON.parse(localStorage.getItem('token'));

    const [data, setData] = useState({
        institution: '',
        course: '',
        duration: ''
    });
   
    const handleSubmit = () =>{
        
        const fetchData = async() =>{
            try {
                const res = await axios.post(`${baseUrl}/edupost`, {body:  data}, {headers: {Authorization: `Bearer ${token}`}});
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
            <input className=' border-b-4 rounded-lg w-1/3 h-10 m-2 bg-slate-100' type='text' onChange={(e) => setData( data => ({ ...data, institution: e.target.value}))} placeholder='enter institution' />
            <input className=' border-b-4 rounded-lg w-1/3 h-10 m-2 bg-slate-100' type='text' onChange={(e) => setData( data => ({ ...data, course: e.target.value}))} placeholder='enter course' />
            <input className=' border-b-4 rounded-lg w-1/3 h-10 m-2 bg-slate-100' type='text' onChange={(e) => setData( data => ({ ...data, duration: e.target.value}))} placeholder='enter duration' />
           
            <input className=' border-b-4 rounded-lg w-1/3 h-10 m-2 bg-slate-300' type='submit' value='submit' />
        </form>
    </div>
  )
}

export default Edu