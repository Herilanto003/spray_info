import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Formation from "./components/Formation";
import Formateurs from "./components/Formateurs";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <About />
      <Formation />
      <Formateurs />
      {/* <Hero /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
