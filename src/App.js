import "./App.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
// import Footer from "./components/footer";
// import CategorySection from "./components/Categories";
// import Products from "./components/Products";
// import BestSellers from "./components/BestSellers";
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/contact" element={ <Contact/> } />
      </Routes>
    </div>
  );
}

export default App;
