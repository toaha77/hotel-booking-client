import Banner from "../Banner/Banner";
import Booking from "../Booking/Booking";
import Services from "../Services/Services";
import Slider from "../Slider/Slider";

 
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Booking></Booking>
            <Slider></Slider>
            <Services></Services>
        </div>
    );
};

export default Home;