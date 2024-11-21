import React, { createContext, useState, useContext } from "react";

interface Poem {
  id: string;
  title: string;
  author: string;
  lines: string[];
  category?: string;
}

interface PoemContextType {
  poems: Poem[];
  addPoem: (poem: Poem) => void;
  selectPoem: (id: string) => void;
  selectedPoem?: Poem;
}

const PoemContext = createContext<PoemContextType | undefined>(undefined);

export const PoemProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [poems, setPoems] = useState<Poem[]>([]);
  const [selectedPoem, setSelectedPoem] = useState<Poem | undefined>(undefined);

  const addPoem = (poem: Poem) => {
    setPoems([...poems, { ...poem, id: `${poems.length + 1}` }]);
  };

  const selectPoem = (id: string) => {
    setSelectedPoem(poems.find(poem => poem.id === id));
  };

  return (
    <PoemContext.Provider value={{ poems, addPoem, selectPoem, selectedPoem }}>
      {children}
    </PoemContext.Provider>
  );
};

export const usePoemContext = () => {
  const context = useContext(PoemContext);
  if (!context) {
    throw new Error("usePoemContext must be used within a PoemProvider");
  }
  return context;
};
