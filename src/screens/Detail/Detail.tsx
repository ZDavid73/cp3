import React from 'react';
import { usePoemContext } from '../../contexts/PoemCreationContext';
import { useParams, useNavigate } from 'react-router-dom';
import './detail.css';

const Detail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { poems } = usePoemContext();
  const poem = poems.find(p => p.id === id);

  if (!poem) return <p>Poem not found!</p>;

  return (
    <div className="detail">
      <button onClick={() => navigate('/dashboard')}>&larr; Back</button>
      <h1>{poem.title}</h1>
      <p>By {poem.author}</p>
      <div>{poem.content}</div>
    </div>
  );
};

export default Detail;
