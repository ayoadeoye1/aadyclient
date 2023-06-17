import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import baseUrl from '../components/baseurl'

const Blog = () => {
    const token = JSON.parse(localStorage.getItem('token'));

    const [title, setTitle] = useState('');
    const [image, setImage] = useState();
    const [article, setArticle] = useState('');

    const [blog, setBlog] = useState([]);

    useEffect(() =>{

        const fetchData = async() =>{
            const res = await axios.get(`${baseUrl}/blogget`)
            try {
                setBlog(res.data)
            } catch (error) {
                console.log(error.message)
            }
        }

        fetchData()
    }, [])

    let formData = new FormData();

    formData.append('title',title)
    formData.append('image',image)
    formData.append('blogArticle',article)

    const body = Object.fromEntries(formData);
    
    const handleSubmit = () =>{
        
        const fetchData = async() =>{
            try {
                const res = await axios.post(`${baseUrl}/blogpost`, body, { headers: { 'content-type': 'multipart/form-data', Authorization: `Bearer ${token}`}});
                console.log(res.data)
                toast.success(res.data)
            } catch (error) {
                console.log(error.message);
            }
        }

        fetchData();
    }

    const delBlog = (id) =>{

        const fetchData = async() =>{
            try {
                const res = await axios.delete(`${baseUrl}/blogdel/${id}`, {headers: {Authorization: `Bearer ${token}`}});
                console.log(res.data)
                toast.success('blog deleted');
            } catch (error) {
                console.log(error.message);
            }
        }

        fetchData();
    }

  return (
    <div>
        <ToastContainer />
        <form className='flex flex-col border-4 items-center rounded-md' onSubmit={() => handleSubmit() }>
            <input className='p-2 border-b-4 rounded-lg w-1/3 h-10 m-2 bg-slate-100' type='text' name='skill' onChange={(e) => setTitle(e.target.value)} placeholder='enter blog title' />
            <input className='p-2 border-b-4 rounded-lg w-1/3 h-10 m-2 bg-slate-100' placeholder='select blog image' type='file' accept='image/*' onChange={(e) => setImage(e.target.files[0])} />
            <textarea rows={5} className='p-2 border-b-4 rounded-lg w-1/3 m-2 bg-slate-100' placeholder='compose article' onChange={(e) => setArticle(e.target.value)}>
            </textarea>
            <input className=' border-b-4 rounded-lg w-1/3 h-10 m-2 bg-slate-300' type='submit' value='post blog' />
        </form>

        <div className='shadow-sm'>
            <h1 className='m-2 text-lg text-center uppercase font-semibold'>Blogs</h1><br />
            {
                blog?.map((ele) =>(
                    <center key={ele._id}>
                        <div key={ele._id} className=' overflow-hidden bg-slate-200 m-4 h-[300px] w-[400px] rounded-lg'>
                            <button onClick={() => delBlog(ele._id)} className=' float-right bg-slate-50 text-red-500 font-bold text-lg'>Delete Blog</button><br />
                            <h2 className=' uppercase font-medium'><p className=' uppercase font-lead'>title:</p>{ele.title}</h2>
                            <img height={150} width={150} src={ele.imageUrl} alt='theimg' />
                            <article className='p-2 truncate'><p className=' uppercase font-lead'>article:</p>{ele.blogArticle}</article>
                        </div>
                    </center>
                ))
            }
        </div>
    </div>
  )
}

export default Blog