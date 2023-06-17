import React,{ useState, useEffect} from 'react'
import Rating from '../components/rating'
import axios from 'axios'

import baseUrl from '../components/baseurl'

const Skills = () => {

    const [data, setData] = useState([]);

    useEffect(() =>{
        axios.get(`${baseUrl}/skillsget`)
        .then((res) => {
        setData(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, [])

    
  return (
    <div className=' shadow-sm'>
        <h1 className=' m-2 text-lg text-center uppercase font-semibold'>Skills Section</h1>

        <div className='m-4 '>
            <h2 className=' text-lg font-semibold m-4 underline'>Web Development</h2>
            {
                data?.map(x =>(
                    (x.category === 'web development') &&
                        <table key={x._id} className='ml-10 font-txt sm:text-xl'>
                            <tbody>
                                <tr>
                                    <td>{x.skill}</td>
                                    <td><Rating rate={x.rank} /></td>
                                </tr>
                            </tbody>
                        </table>
                ))
            }
            
        </div>

        <div className='m-4'>
            <h2 className=' text-lg font-semibold m-4 underline'>Software Development</h2>
            {
                data?.map(x =>(
                    (x.category === 'software development') &&
                        <table key={x._id} className='ml-10 font-txt sm:text-xl'>
                            <tbody>
                                <tr>
                                    <td>{x.skill}</td>
                                    <td><Rating rate={x.rank} /></td>
                                </tr>
                            </tbody>
                        </table>
                ))
            }
        </div>

        <div className='m-4'>
            <h2 className=' text-lg font-semibold m-4 underline'>Version Control</h2>
            {
                data?.map(x =>(
                    (x.category === 'version control') &&
                        <table key={x._id} className='ml-10 font-txt sm:text-xl'>
                            <tbody>
                                <tr>
                                    <td>{x.skill}</td>
                                    <td><Rating rate={x.rank} /></td>
                                </tr>
                            </tbody>
                        </table>
                ))
            }
        </div>

        <div className='m-4'>
            <h2 className=' text-lg font-semibold m-4 underline'>Cloud Operation</h2>
            {
                data?.map(x =>(
                    (x.category === 'cloud operation') &&
                        <table key={x._id} className='ml-10 font-txt sm:text-xl'>
                            <tbody>
                                <tr>
                                    <td>{x.skill}</td>
                                    <td><Rating rate={x.rank} /></td>
                                </tr>
                            </tbody>
                        </table>
                ))
            }
        </div>

    </div>
  )
}

export default Skills