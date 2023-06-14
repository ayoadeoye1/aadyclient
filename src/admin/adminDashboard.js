import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

const AdminDashboard = () => {
    const width = window.innerWidth;

    const navigate = useNavigate();

    const logoutUser = () =>{
        localStorage.clear();
        navigate('/admin-signin');
    }

  return (
    <div>
        {
            (width<700)?
            <div className=' bg-slate-50 text-gray-700 text-center'>
                <p className=' font-bold font-about text-xl mt-[50%]'>you are not allowed to access this page with mobile phone</p>
            </div>

            :

            <div className=''>
                <header className=' bg-slate-300 shadow-lg w-full pt-0'>
                    <>
                        <h1>Admin Dashboard</h1>
                        <button onClick={() => logoutUser()} className='m-2 float-right'>LogOut</button>
                    </><br />
                    <div>
                        <Link className=' text-blue-400 m-2' to='/admin-dashboard/home'>home</Link>
                        <Link className=' text-blue-400 m-2' to='/admin-dashboard/aboutme'>aboutme</Link>
                        <Link className=' text-blue-400 m-2' to='/admin-dashboard/skill'>skill</Link>
                        <Link className=' text-blue-400 m-2' to='/admin-dashboard/project'>project</Link>
                        <Link className=' text-blue-400 m-2' to='/admin-dashboard/blog'>blog</Link>
                        <Link className=' text-blue-400 m-2' to='/admin-dashboard/edu'>education</Link>
                        <Link className=' text-blue-400 m-2' to='/admin-dashboard/msg'>msg-frm-users</Link>
                    </div>
                </header><br />
            <div className='pt-0'>
                <Outlet />
            </div>
            </div>
        }
    </div>
  )
}

export default AdminDashboard