import React, { useEffect, useState } from 'react'
import Add from './Add'
import { useNavigate } from 'react-router-dom';
import Update from './Update';

function Dashboard() {
  const  navigate= useNavigate();
  useEffect(()=>{
    const token = localStorage.getItem('token');

    fetch('https://interview-plus.onrender.com/api/protected', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': token
      }
    })
    .then(response => {
      if(response.status === 200) {
   navigate('/dashboard')
      } else {
        navigate('/')
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  },[])
  return (
    <div>
      <Update/>
      <Add/>
    </div>
  )
}

export default Dashboard