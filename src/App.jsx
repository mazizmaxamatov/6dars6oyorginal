import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Routes, Route} from "react-router-dom"


const App = () => {
  return (
    <div>

      <Header/>

      
      <Routes>
                <Route path="/footer" element={<Footer />} />
            </Routes>

    </div>
  );
};

export default App;
