import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';

const Aboutme = () => {

  const baseUrl = 'https://aadyportfolioapi.cyclic.app/api'

    const [text, setText] = useState('');
    const [video, setVideo] = useState('');

    const token = JSON.parse(localStorage.getItem('token'));

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const vidChange = (e) => {
        setVideo(e.target.value);
    };

    const handleSubmit = () => {
        
      const fetchData = async() =>{
        const res = axios.patch(`${baseUrl}/aboutmepatch/648706cfb93cba72f3b1bfe2`, {abouttext: text, vid: video}, {headers: {Authorization: `Bearer ${token}`}});

        try {
          toast.success(res.data);
        } catch (error) {
          console.log(error.message);
        }
      }

      fetchData();
    };

    useEffect(() =>{
      axios.get(`${baseUrl}/aboutmeget/648706cfb93cba72f3b1bfe2`)
      .then((res) => {
        setText(res.data.about);
        setVideo(res.data.vidUrl)
      })
      .catch((err) => {
          console.log(err);
      });
    }, [])
    
  return (
    <div className="flex flex-col items-center mt-16">
       <form onSubmit={() => handleSubmit()}>
         <textarea
           onChange={handleChange}
           value={text}
           className="w-full h-20 p-4 bg-gray-200 border border-gray-400">
        </textarea>
        <input className="w-full h-8 p-4 bg-gray-200 border border-gray-400" type='text' value={video} onChange={vidChange} />
        <input type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" value='Submit' />
       </form>
    </div>
  )
}

export default Aboutme