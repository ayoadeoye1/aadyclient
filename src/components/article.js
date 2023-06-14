import React, { useState, useEffect} from 'react';
import axios from 'axios';

const baseUrl = 'https://aadyportfolioapi.cyclic.app/api'
const Article = (props) => {

  const [data, setData] = useState({});
  const [clap, setClap] = useState([]);

  useEffect(() =>{
      axios.get(`${baseUrl}/bloggetone/${props.id}`)
      .then((res) => {
      setData(res.data);
      })
      .catch((err) => {
          console.log(err);
      });
  }, [props, clap])

  
  const Clap = () =>{
    axios.put(`${baseUrl}/blogclap/${props.id}`)
    .then((res) => {
    setClap(res.data)
    })
    .catch((err) => {
        console.log(err);
    });
  }

    
  return (
    <div>    
      <center key={data._id} >
        <div className=' bg-slate-200 m-2 w-[90%] rounded-lg'>
          <h2 className=' uppercase font-medium'>{data.title}</h2><br />
          <img height={250} width={300} src={data.imageUrl} alt='theimg' />
          <article className='p-2'>{data.blogArticle}</article>
          <button onClick={() => Clap()} className=' m-2'><i className=' bg-slate-50 rounded-full shadow-inner font-semibold'>{data.clap}</i> clap👏🏼</button>
        </div>
      </center>
    </div>
  )
}

export default Article
