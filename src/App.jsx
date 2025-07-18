import React from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import HomeApp from "./pages/HomeApp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PortfolioHeriniaina from "./pages/portfolio/PortfolioHeriniaina";
import PortfolioJeanPierre from "./pages/portfolio/PortfolioJeanPierre";
import PortfolioSylvestre from "./pages/portfolio/PortfolioSylvestre";
import PortfolioAras from "./pages/portfolio/PortfolioAras";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomeApp />} />
          <Route path="/portfolio/heriniaina" element={<PortfolioHeriniaina />} />
          <Route
            path="/portfolio/jean-pierre"
            element={<PortfolioJeanPierre />}
          />
          <Route path="/portfolio/sylvestre" element={<PortfolioSylvestre />} />
          <Route path="/portfolio/aras" element={<PortfolioAras />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
