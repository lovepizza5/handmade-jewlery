// src/pages/Dashboard.jsx

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem('access_token');  // Retrieve the token

    if (!accessToken) {
      navigate('/login');  // If no token, redirect to login
      return;
    }

    // Make GET request to backend with Authorization header
    axios.get('http://localhost:8000/api/auth/user/', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
    .then(res => {
      setUser(res.data);  // Set the user data on successful response
    })
    .catch(err => {
      console.error(err);
      navigate('/login');  // Redirect to login if token is invalid or expired
    });
  }, [navigate]);

  return (
    <div>
      {user ? (
        <h1>Welcome, {user.username}!</h1>  // Display user info
      ) : (
        <p>Loading...</p>  // Show loading message while user data is being fetched
      )}
    </div>
  );
};

export default Dashboard;
