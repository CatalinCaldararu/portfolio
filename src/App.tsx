import React from "react";
import "./App.css";

import AboutMe from "./components/sections/about/AboutMe";
import Services from "./components/sections/services/Services";
import Footer from "./components/layout/footer/Footer";

const App: React.FC = () => {
  return (
    <div className="App">
      <main>
        <AboutMe/>
        <Services />
        <Footer/>
      </main>
    </div>
  );
};

export default App;
