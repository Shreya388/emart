import Topbar from "./components/topbar";
import Header from "./components/header";
import Footer from "./components/footer";
import "./App.css";
import CategorySection from "./components/Categories";
import Products from "./components/Products";

function App() {
  return (
    <div className="App">
      <Topbar />
      <Header />
      <CategorySection />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
