import React from 'react';
import './App.css';

import { Routes, Route, Navigate, useParams, useLocation } from 'react-router-dom';

import MainPage from './webpage/mainPage';
import MainAdmin from './admin/mainAdmin';

import BlogSep from './webpage/blogSep';
import ProjectsSep from './webpage/projectsSep';
import Article from './components/article';
import AdminDashboard from './admin/adminDashboard';

import AHome from './admin/adHome';
import Aboutme from './admin/aboutme';
import Skills from './admin/skills';
import Project from './admin/project'
import Blog from './admin/blog';
import Edu from './admin/education';
import Msg from './admin/msg';
import Aboutweb from './webpage/aboutweb';

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


const App = () => {

  const token = JSON.parse(localStorage.getItem('token'));
  
  const { id, title } = useParams();

  const location = useLocation().pathname.split('/');
  
  const backUrl = `/blogpost/:${id}/:${title}`
  
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigate to = '/home' />} />

        <Route path='/admin-dashboard' element={<Navigate to = '/admin-dashboard/home' />} />

        <Route path='/home' element={ <MainPage /> } />

        <Route path='/blog' element={ <BlogSep />} />
        
        <Route path='/about-web' element={ <Aboutweb />} />
          

        <Route path={backUrl} element={ <Article id={location[2]} title={location[3]} /> } />

        <Route path='/projects' element={ <ProjectsSep />} />

        <Route path='/admin-signin' element={ <MainAdmin /> } />

        <Route path='/admin-dashboard/*' element={token? <AdminDashboard /> : <h2 className=' text-center font-light text-2xl text-red-500'>admin authentication is required, you cannot access this page!</h2> }>
          <Route path='home' element={ <AHome /> } />
          <Route path='aboutme' element={ <Aboutme /> } />
          <Route path='skill' element={ <Skills /> } />
          <Route path='project' element={ <Project /> } />
          <Route path='blog' element={ <Blog /> } />
          <Route path='edu' element={ <Edu /> } />
          <Route path='msg' element={ <Msg /> } />
        </Route>

      </Routes>
    </div>
  );
}

export default App;
