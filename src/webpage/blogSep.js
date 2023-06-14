import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const baseUrl = 'https://aadyportfolioapi.cyclic.app/api'
const BlogSep = () => {

  const [data, setData] = useState([]);

  useEffect(() =>{
      axios.get(`${baseUrl}/blogget`)
      .then((res) => {
      setData(res.data);
      })
      .catch((err) => {
          console.log(err);
      });
  }, [])


  return (
    <div className='shadow-sm'>
      <h1 className='m-2 text-lg text-center uppercase font-semibold'>AADY Blogs</h1><br />
      {
        data.map((x) =>(
          <center key={x._id} >
            <div className=' overflow-hidden bg-slate-200 m-2 h-[200px] w-[300px] rounded-lg'>
              <h2 className=' uppercase font-medium'><p className=' uppercase font-lead'>title:</p>{x.title}</h2>
              <article className='p-2 truncate'><p className=' uppercase font-lead'>article:</p>{x.blogArticle}</article>
              <Link className=' text-blue-500' to={`/blogpost/${x._id}/${x.title?.split(' ').join('-')}`}>read more...</Link>
            </div>
          </center>
        ))
      }
    </div>
  )
}

export default BlogSep