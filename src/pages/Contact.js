import OfferNav from "../components/offernav";
import Topbar from "../components/topbar";
import BrandStory from "../components/BrandStory";
import Footer from "../components/footer";
import "./Contact.css";
import { Container } from "react-bootstrap";


const ContactHead = () => {
    return (
        <div className="contact-head text-white">
            <div className="overlay">
            <Container>
                <div className="contact-content text-center">
                    <h1 className="">Contact</h1>
                    <p className="pt-2">Home / Contact</p>
                </div>
            </Container>
            </div>
        </div>
    )
}

const Contact = () => {
    return (
        <>
            <OfferNav />
            <Topbar />
            <ContactHead />
            <BrandStory />
            <Footer />
        </>
    );
}

export default Contact;