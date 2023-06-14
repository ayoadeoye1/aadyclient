import React, { useEffect, useState } from 'react'
import axios from 'axios'

const baseUrl = 'https://aadyportfolioapi.cyclic.app/api/'


const Msg = () => {
    const token = JSON.parse(localStorage.getItem('token'));

    const [msg, setMsg] = useState([]);

    useEffect(() =>{
        const fetchData = async() =>{
            try {
                const res = await axios.get(`${baseUrl}/msgget`, {headers: {Authorization: `Bearer ${token}`}});
                setMsg(res.data);
            } catch (error) {
                console.log(error.message);
            }
        }

        fetchData()
    }, [token]);

    const handleDelete = (id) =>{

        const fetchData = async() =>{
            try {
                const res = await axios.delete(`${baseUrl}/msgdel/${id}`, {headers: {Authorization: `Bearer ${token}`}});
                console.log(res.data)
            } catch (error) {
                console.log(error.message);
            }
        }

        fetchData();
    }

    const dat = new Date().getTime();
  return (
    <div>
        {
            msg?.map((ele) =>(
                <div key={ele._id} className=' text-left m-4 border-4 border-emerald-400 w-80 underline'>
                    <div className=''>
                        {
                            (new Date(ele.datePosted).getTime()+1000*60*60*24 <= dat )? '' : <p className=' m-2 text-green-500 float-left'>new message</p>
                        }
                        <button onClick={() => handleDelete(ele.id) } className=' m-3 bg-slate-500 rounded-lg text-red-500 float-right'>delete</button><br />
                    </div><br />
                    <h2 className=' text-center uppercase '>message from: {ele.name}</h2>
                    <p className=' text-center '>email: <i>{ele.email}</i></p>
                    <div>
                        message: {ele.message}
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Msg