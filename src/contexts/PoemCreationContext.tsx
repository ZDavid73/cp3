import React, { createContext, useContext, useState } from 'react';

interface Poem {
  id: string;
  title: string;
  author: string;
  content: string;
}

interface PoemContextType {
  poems: Poem[];
  addPoem: (poem: Poem) => void;
  selectPoem: (id: string) => void;
}

const PoemContext = createContext<PoemContextType | undefined>(undefined);

export const PoemProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [poems, setPoems] = useState<Poem[]>([]);

  const addPoem = (poem: Poem) => setPoems([...poems, poem]);

  const selectPoem = (id: string) => {
    console.log('Selected poem ID:', id);
  };

  return (
    <PoemContext.Provider value={{ poems, addPoem, selectPoem }}>
      {children}
    </PoemContext.Provider>
  );
};

export const usePoemContext = () => {
  const context = useContext(PoemContext);
  if (!context) throw new Error('usePoemContext must be used within a PoemProvider');
  return context;
};
