import React, { useState } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const baseUrl = 'https://aadyportfolioapi.cyclic.app/api/'

const Message = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mess, setMess] = useState('');

    let formData = new FormData();

    formData.append('name',name)
    formData.append('email',email)
    formData.append('message',mess)

    const body = Object.fromEntries(formData);

    const handleSubmit = () =>{
        
        const fetchData = async() =>{
            try {
                const res = await axios.post(`${baseUrl}/msgpost`, body);
                console.log(res.data)
                toast.success('message sent!')
            } catch (error) {
                console.log(error.message);
                toast.error(error.message)
            }
        }

        fetchData();
    }

  return (
    <div>
        <ToastContainer />
        <form className='flex flex-col border-4 items-center rounded-md' onSubmit={() => handleSubmit() }>
            <h1 className='m-4 text-lg text-center uppercase font-semibold'>Message Developer</h1><br />
            <input className='p-2 border-b-4 rounded-lg w-60 h-10 m-2 bg-slate-100' type='text' onChange={(e) => setName(e.target.value)} placeholder='enter your name' required/>
            <input className='p-2 border-b-4 rounded-lg w-60 h-10 m-2 bg-slate-100' type='email' onChange={(e) => setEmail(e.target.value)} placeholder='enter your email' required/>
            <textarea rows={5} className='p-2 border-b-4 rounded-lg w-60 m-2 bg-slate-100' placeholder='type your message/requirements' onChange={(e) => setMess(e.target.value)} required>
            </textarea>
            <input className=' border-b-4 rounded-lg w-60 h-10 m-2 bg-slate-300' type='submit' value='send message' />
        </form>
    </div>
  )
}

export default Message