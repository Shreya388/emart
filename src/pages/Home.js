import OfferNav from "../components/offernav";
import Topbar from "../components/topbar";
import Header from "../components/header";
import CategorySection from "../components/Categories";
import Products from "../components/Products";
import BestSellers from "../components/BestSellers";
import Footer from "../components/footer";

const Home = () => {
    return (
        <>
            <OfferNav />
            <Topbar />
            <Header />
            <CategorySection />
            <Products />
            <BestSellers />
            <Footer />
        </>
    );
}

export default Home;