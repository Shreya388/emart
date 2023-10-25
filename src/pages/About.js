import OfferNav from "../components/offernav";
import Topbar from "../components/topbar";
import BrandStory from "../components/BrandStory";
import Footer from "../components/footer";
import "./About.css";
import { Container } from "react-bootstrap";


const AboutHead = () => {
    return (
        <div className="about-head text-white">
            <div className="overlay">
            <Container>
                <div className="about-content text-center">
                    <h1 className="">About</h1>
                    <p className="pt-2">Home / About</p>
                </div>
            </Container>
            </div>
        </div>
    )
}

const About = () => {
    return (
        <>
            <OfferNav />
            <Topbar />
            <AboutHead />
            <BrandStory />
            <Footer />
        </>
    );
}

export default About;