import React, { useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';

const baseUrl = 'https://aadyportfolioapi.cyclic.app/api'
const Skills = () => {
    const token = JSON.parse(localStorage.getItem('token'));

    const [category, setCategory] = useState();
    const [skill, setSkill] = useState();
    const [rank, setRank] = useState();
    

    const handleSubmit = () =>{
        
        const fetchData = async() =>{
            try {
                const res = await axios.post(`${baseUrl}/skillspost`, {category, skill, rank}, {headers: {Authorization: `Bearer ${token}`}});
                console.log(res.data)
                toast(res.data)
            } catch (error) {
                console.log(error.message);
            }
        }

        fetchData();
    }


  return (
    <div className=''>
        <form className='flex flex-col border-4 items-center rounded-md' onSubmit={() => handleSubmit() }>
            <select className=' border-b-4 rounded-lg w-1/3 h-10 m-2 bg-slate-300' id='category' onChange={(e) => setCategory(e.target.value)}>
                <option defaultValue=''>select category</option>
                <option value='web development'>web development</option>
                <option value='software development'>software development</option>
                <option value='version control'>version control</option>
                <option value='cloud operation'>cloud operation</option>
            </select>

            <input className=' border-b-4 rounded-lg w-1/3 h-10 m-2 bg-slate-300' type='text' name='skill' onChange={(e) => setSkill(e.target.value)} placeholder='name your skill' />

            <select className=' border-b-4 rounded-lg w-1/3 h-10 m-2 bg-slate-300' id='rank' onChange={(e) => setRank(e.target.value)}>
                <option defaultValue='' >select rank</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
            </select>

            <input className=' border-b-4 rounded-lg w-1/3 h-10 m-2 bg-slate-300' type='submit' value='submit' />
        </form>
    </div>
  )
}

export default Skills