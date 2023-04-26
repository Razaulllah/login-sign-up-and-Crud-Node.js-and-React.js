import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Homepage() {
    const navigate = useNavigate();
  return (
    <div>
      <h1>Homepage</h1>
      <button onClick={() => navigate('/')}>logout</button>
    </div>
  )
}
