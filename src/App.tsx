import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Search from "./components/search/Search";

function App() {

  return (
    <div className="min-h-screen bg-gray-200 antialiased">
      <Router>
        <Navbar />
        <Search />
        <Routes>
          <Route
            key='1'
            path='/'
            element={<Home />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
