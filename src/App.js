import Topbar from "./components/topbar";
import Header from "./components/header";
import Footer from "./components/footer";
import "./App.css";
import CategorySection from "./components/Categories";
import Products from "./components/Products";
import BestSellers from "./components/BestSellers";

import OfferNav from './components/offernav';

function App() {
  return (
    <div className="App">
      <OfferNav />
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
