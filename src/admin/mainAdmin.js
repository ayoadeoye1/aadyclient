import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

const baseUrl = 'https://aadyportfolioapi.cyclic.app/api/'
const MainAdmin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await axios.post(`${baseUrl}/sign-in`, { username, password });
      const token = response.data.token;
      localStorage.setItem('token', JSON.stringify(token));
      toast.success('admin logged-in')
      setIsLoading(false);
      setTimeout(() =>{
        navigate('/admin-dashboard');
      }, 1000);
    } catch (error) {
      toast.error(error.message)
      setError('Invalid username or password.');
      setIsLoading(false);
    }
  };

  
  return (
    <div className="flex items-center justify-center h-screen">
      <ToastContainer />
      <form onSubmit={handleLogin} className="p-4 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold mb-4">MainAdmin</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block mb-2" htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border rounded-lg px-4 py-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded-lg px-4 py-2 w-full"
            required
          />
        </div>
        <button
          type="submit"
          className={`bg-blue-500 text-white px-4 py-2 rounded-lg ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={isLoading}
        >
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default MainAdmin;
