import { useLoaderData } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
const RoomsCard = () => {
  const loader = useLoaderData();
  return (
    <div className="mt-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {loader.map((data) => (
          <div key={data._id}>
            <div className="card rounded-none card-compact  bg-base-100 shadow-xl">
              <figure>
                <img
                  src={data.img}
                  alt="rooms"
                  className="lg:w-96 h-64"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{data.title}</h2>
                <div className="flex items-center justify-center gap-1">
                  <CgProfile className="text-2xl"></CgProfile>
                  <p className="uppercase text-justify">{data.short_description}</p>
                </div>
                <p>{data.description}</p>
                <div className="card-actions justify-center">
                  <button className="btn bg-blue-500 text-white hover:bg-blue-500 text-white">Book Now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomsCard;
