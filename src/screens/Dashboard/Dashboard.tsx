import React from 'react';
import { usePoemContext } from '../../contexts/PoemCreationContext';
import './dashboard.css';

const Dashboard: React.FC = () => {
  const { poems, selectPoem } = usePoemContext();

  return (
    <div className="dashboard">
      <h1>Poetry Dashboard</h1>
      <button onClick={() => (window.location.href = '/form')}>Create New Poem</button>
      <ul>
        {poems.map(poem => (
          <li key={poem.id} onClick={() => selectPoem(poem.id)}>
            <h2>{poem.title}</h2>
            <p>Author: {poem.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
