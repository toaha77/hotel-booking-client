import { FaRegCreditCard, FaSwimmingPool, FaWifi } from "react-icons/fa";
import { LuBaggageClaim } from "react-icons/lu";
const Services = () => {
  return (
    <div className="mt-4">
        <h3 className="text-center text-blue-500 salsa">AMENITIES & SERVICES</h3>
      <h1 className="text-5xl salsa text-center">Facilities & Services</h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-5 pt-10">
          <FaRegCreditCard className="text-4xl flex items-center justify-center"></FaRegCreditCard>
        </figure>
        <div className="card-body items-center text-center">
          <h3 className="uppercase text-3xl font-sans text-gray-600 ">
            smart key
          </h3>
        </div>
      </div>
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-5 pt-10">
        <LuBaggageClaim className="text-4xl"></LuBaggageClaim>
        </figure>
        <div className="card-body items-center text-center">
        <h3 className="uppercase text-3xl font-sans text-gray-600">
            Baggage Hold
          </h3>
        </div>
      </div>
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-5 pt-10">
        <FaSwimmingPool className="text-4xl"></FaSwimmingPool>
        </figure>
        <div className="card-body items-center text-center">
        <h3 className="uppercase text-3xl font-sans text-gray-600">
            infinity pool
          </h3>
        </div>
      </div>
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-5 pt-10">
        <FaWifi className="text-4xl"></FaWifi>
        </figure>
        <div className="card-body items-center text-center">
        <h3 className="uppercase text-3xl font-sans text-gray-600">
            Unlimited wifi
          </h3>
        </div>
      </div>
      </div>
    
    </div>
  );
};

export default Services;
