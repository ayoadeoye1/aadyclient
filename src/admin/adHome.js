import React, { useEffect, useState } from 'react'
import axios from 'axios'

const baseUrl = 'https://aadyportfolioapi.cyclic.app/api/'

const AHome = () => {

  const [traffic, setTraffic] = useState([]);

  const token = JSON.parse(localStorage.getItem('token'));

  useEffect(() =>{
    axios.get(`${baseUrl}/ipdataget`, {headers: {Authorization: `Bearer ${token}`}})
    .then((res) => {
      setTraffic(res.data);
    })
    .catch((err) => {
        console.log(err);
    });
  }, [token])

  const dat = new Date().getTime();
  return (
    <div className=' text-center'>
        <h2>admin home page</h2>
        <p>website traffic below</p>
        <div>
          {
            traffic.map((x) =>(
              <div key={x._id} className=' text-left border-4 m-4 border-neutral-950'>
                {
                  (new Date(x.datePosted).getTime()+1000*60*60*24 <= dat )? '' : <p className=' m-2 text-green-500 float-right'>recent visitor</p>
                }
                <h2>visitor ip:{x.ip }</h2>
                <p>city: {x.city }</p>
                <p>region: {x.region }</p>
                <p>country_name: {x.country_name }</p>
                <p>emoji_flag: {x.emoji_flag }</p>
                <p>currency: {x.currency }</p>
                <p>time_zone & time: {x.time_zone }</p>
                <p>threat: {x.threat }</p>
                <p>posted on: {x.datePosted }</p>
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default AHome