import Banner from "../Banner/Banner";
import Booking from "../Booking/Booking";
import Package from "../Package/Package";
import Reception from "../Reception/Reception";
import Services from "../Services/Services";
import Slider from "../Slider/Slider";

 
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Booking></Booking>
            <Slider></Slider>
            <Services></Services>
            <Reception></Reception>
            <Package></Package>
        </div>
    );
};

export default Home;