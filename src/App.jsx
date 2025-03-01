import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import { Routes, Route } from "react-router-dom"


const App = () => {
  return (
    <div>

      <Header />
      <Menu />


      <Routes>
        <Route path="/footer" element={<Footer />} />
      </Routes>

    </div>
  );
};

export default App;
