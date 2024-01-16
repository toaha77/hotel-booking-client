import { FaHotel } from "react-icons/fa";
import SliderCard  from "./SliderCard";
const Slider = () => {
    return (
        <div>
            <div className=" mt-4">
                <div className=" flex items-center justify-center">
                <FaHotel className="text-4xl flex items-center justify-center"></FaHotel>
                </div>
                <h3 className="salsa uppercase text-blue-500 text-center mt-2">welcome to LONG BEACH HOTEL hotel</h3>
            </div>
            <div className="mt-2 mb-6">
                <h2 className="text-5xl text-center mt-4 uppercase salsa">In the Heart of the <span className="text-blue-500">Cox's Bazar Sea Beach,</span> <br /> Outstanding Views </h2>
                <p className="text-center salsa">Nestled in the heart of the Pacific resort, on the edge of a tranquil and beautiful Garden Island, <br /> HenRosa is a haven of warmth, tranquility and rejuvenation. Bathed in brilliant sunshine and clear skies, <br /> it offers stunning views of palm-lined beaches and gorgeous coral reefs.</p>
            </div>

            <SliderCard></SliderCard>
        </div>
    );
};

export default Slider;