import Topbar from "./components/topbar";
import Header from "./components/header";
import Footer from "./components/footer";
import "./App.css";
import CategorySection from "./components/Categories";
import Products from "./components/Products";
import BestSellers from "./components/BestSellers";

function App() {
  return (
    <div className="App">
      <Topbar />
      <Header />
      <CategorySection />
      <Products />
      <BestSellers />
      <Footer />
    </div>
  );
}

export default App;
