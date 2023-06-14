import React from 'react'

const Aboutweb = () => {
  return (
    <div>
        <h1 className='text-center font-bold m-2'>About Website</h1>
        <div className=' font-lead leading-10 m-6'>
            This website is built with reactjs, tailwindcss, nodejs & typescript, and mongoDB majorly, and it has a lot of features, even apart from what you can access 
            such as: admin dashboard where over 90% of data on the page are being controlled and manipulated, you can navigate to '/admin-dashboard' to see the login, users ip scrapper(using 
            ipify & ipdata packages), post blog, delete blog, bunch of CRUD operations, amidst others.
        </div>
    </div>
  )
}

export default Aboutweb