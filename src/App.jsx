import { Routes, Route, BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./components/Home";
import Bible from "./components/Bible";
import Verses from "./components/Verses";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/biblia" element={<Bible />} />
          <Route path="/versete" element={<Verses />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
