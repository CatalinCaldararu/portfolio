import React from "react";
import "./App.css";
import Services from "./components/services/Services";
import Footer from "./components/footer/Footer";
import AboutMe from "./components/about/AboutMe";
import Navigation from "./components/navigation/Navigation";

const App: React.FC = () => {
  return (
    <div className="App">
      <main>
        <Navigation/>
        <AboutMe/>
        <Services />
        <Footer/>
      </main>
    </div>
  );
};

export default App;
