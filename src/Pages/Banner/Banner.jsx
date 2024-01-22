import "./Banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="bannerContainer">
            <div className="banner_content">
                <h1>Find Your Best Dream House for <br /> <span>Rental, Buy & Sell..</span></h1>
                <p>"House Hunter" is a delightful platform that simplifies the house rental process. It serves as a connecting bridge between house owners, who wish to rent out their properties, and house renters, who are seeking their dream homes</p>
                <Link>Explore </Link>
            </div>
        </div>
    );
};

export default Banner;