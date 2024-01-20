import { FaStar } from "react-icons/fa";

const Reception = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 mt-4 gap-4">
      <div>
        <div className="text-center bg-blue-400 text-white px-10 py-12">
          <h2 className="text-2xl uppercase">Hotel address</h2>
          <p>Kolatoli Beach, Cox's Bazar, Bangladesh</p>
          <p>Ph. +880 1880025266</p>
        </div>
        <div className="bg-gray-800 text-white text-center mt-1 shadow-xl px-10 py-8">
          <h2>RECEPTION TIMING</h2>
          <p> At your service - 24/7 </p>
        </div>
      </div>
      <div>
        <div
          className=" bg-center bg-cover h-72"
          style={{
            backgroundImage: "url(https://i.ibb.co/FBGmNSg/IMG-1169-2-scaled.jpg)",
          }}
        >
            <div className="flex items-center justify-center">
                <FaStar className="text-center text-5xl mt-20 text-white "></FaStar>
            </div>
                <p className="text-center text-5xl text-white uppercase">suites</p>
        </div>
      </div>
      <div>
      <div
        className=" bg-center bg-cover h-72"
        style={{
          backgroundImage: "url(https://i.ibb.co/p0qrwhr/Screenshot-2023-12-18-at-8-30-24-PM.png)",
        }}
      >
           <div className="flex items-center justify-center">
                <FaStar className="text-center text-5xl mt-20 text-white "></FaStar>
            </div>
                <p className="text-center text-5xl text-white uppercase">Offers</p>
        </div>
      </div>
    </div>
  );
};

export default Reception;
