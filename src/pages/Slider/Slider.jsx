import { FaHotel } from "react-icons/fa";
const Slider = () => {
    return (
        <div>
            <div className=" ">
                <div className=" flex items-center justify-center">
                <FaHotel className="text-4xl flex items-center justify-center"></FaHotel>
                </div>
                <h3 className="salsa uppercase text-center mt-2">welcome to henrosa hotel</h3>
            </div>
            <div>
                <h2 className="text-5xl text-center mt-4 uppercase salsa">In the Heart of the Cox's Bazar Sea Beach, <br /> Outstanding Views </h2>
                <p className="text-center salsa">Nestled in the heart of the Pacific resort, on the edge of a tranquil and beautiful Garden Island, <br /> HenRosa is a haven of warmth, tranquility and rejuvenation. Bathed in brilliant sunshine and clear skies, <br /> it offers stunning views of palm-lined beaches and gorgeous coral reefs.</p>
            </div>
        </div>
    );
};

export default Slider;