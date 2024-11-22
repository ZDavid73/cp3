import React from 'react';
import { useNavigate } from 'react-router-dom';
import './intro.css';

const Intro: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="intro">
      <h1>Welcome to PoetryCraft</h1>
      <p>Discover, read, and share beautiful poems from around the world. Let
      your imagination flow like verses of poetry.</p>
      <button onClick={() => navigate('./Dashboard')}>Get Started</button>
    </div>
  );
};

export default Intro;
