// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Intro from "./screens/Intro/Intro";
import Dashboard from "./screens/Dashboard/Dashboard";
import Detail from "./screens/Detail/Detail";
import Form from "./screens/Form/Form";
import { PoemProvider } from "./contexts/PoemContext";

const App: React.FC = () => {
  return (
    <PoemProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/form" element={<Form />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </Router>
    </PoemProvider>
  );
};

export default App;
