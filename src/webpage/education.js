import React, { useState, useEffect} from 'react'
import axios from 'axios'

import baseUrl from '../components/baseurl'

const Education = () => {

  const [data, setData] = useState([]);

  useEffect(() =>{
      axios.get(`${baseUrl}/eduget`)
      .then((res) => {
      setData(res.data);
      })
      .catch((err) => {
          console.log(err);
      });
  }, [])

  return (
    <div className='shadow-sm'>
        <h1 className='m-2 text-lg text-center uppercase font-semibold'>Education</h1><br />
        <center>
        <table className=' w-[90%]'>
          <tbody>
          <tr className=''>
            <th className=' w-1/3 border-2'>Instituion</th>
            <th className=' w-1/3 border-2'>Course</th>
            <th className=' w-1/3 border-2'>Duration</th>
          </tr>
          </tbody>
        </table>
        
        {
          data?.map((x) =>(
            <table key={x._id} className=' w-[90%]'>
              <tbody>
              <tr>
                <td className=' w-1/3 border-2'>{x.institution}</td>
                <td className=' w-1/3 border-2'>{x.course}</td>
                <td className=' w-1/3 border-2'>{x.duration}</td>
              </tr>
              </tbody>
            </table>
          ))
        }

        </center>
    </div>
  )
}

export default Education