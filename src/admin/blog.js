import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import baseUrl from '../components/baseurl'

const Blog = () => {
    const token = JSON.parse(localStorage.getItem('token'));

    // const [loading, setLoading] = useState(false)

    const [title, setTitle] = useState('');
    const [imageFile, setImageFile] = useState(null);
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


    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('title', title);
        formData.append('image', imageFile);
        formData.append('article', article);

        const body = Object.fromEntries(formData);

        try {
        const response = await axios.post(`${baseUrl}/blogpost`, body, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${token}`
            }
        });
        console.log(response.data);
        setTitle('');
        setImageFile(null);
        setArticle('');
        } catch (error) {
        console.error(error);
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImageFile(file);
    };


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

        <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Post a Blog</h1>
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">
                Title
            </label>
            <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
            />
            </div>
            <div className="mb-4">
            <label htmlFor="image" className="block text-gray-700 font-semibold mb-2">
                Image
            </label>
            <input
                type="file"
                id="image"
                accept="image/*"
                onChange={handleImageChange}
                className="border-gray-300"
                required
            />
            </div>
            <div className="mb-4">
            <label htmlFor="article" className="block text-gray-700 font-semibold mb-2">
                Article
            </label>
            <textarea
                id="article"
                value={article}
                onChange={(e) => setArticle(e.target.value)}
                className="w-full h-40 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
            ></textarea>
            </div>
            <div className="flex justify-end">
            <button
                type="submit"
                className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
            >
                Submit
            </button>
            </div>
        </form>
        </div>

        {/* <form className='flex flex-col border-4 items-center rounded-md' onSubmit={() => handleSubmit() }>
            <input className='p-2 border-b-4 rounded-lg w-1/3 h-10 m-2 bg-slate-100' type='text' name='skill' onChange={(e) => setTitle(e.target.value)} placeholder='enter blog title' />
            <input className='p-2 border-b-4 rounded-lg w-1/3 h-10 m-2 bg-slate-100' placeholder='select blog image' type='file' accept='image/*' onChange={(e) => setImage(e.target.files[0])} />
            <textarea rows={5} className='p-2 border-b-4 rounded-lg w-1/3 m-2 bg-slate-100' placeholder='compose article' onChange={(e) => setArticle(e.target.value)}>
            </textarea>
            <input className=' border-b-4 rounded-lg w-1/3 h-10 m-2 bg-slate-300' type='submit' value={loading? 'loading...' : 'post blog'} />
        </form> */}

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
