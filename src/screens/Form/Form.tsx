import React, { useState } from 'react';
import { usePoemContext } from '../../contexts/PoemCreationContext';
import './form.css';

const Form: React.FC = () => {
  const { addPoem } = usePoemContext();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    addPoem({ id: Date.now().toString(), title, author, content });
    window.location.href = '/dashboard';
  };

  return (
    <div className="form">
      <h1>Create a New Poem</h1>
      <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
      <input placeholder="Author" value={author} onChange={e => setAuthor(e.target.value)} />
      <textarea placeholder="Content" value={content} onChange={e => setContent(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Form;
