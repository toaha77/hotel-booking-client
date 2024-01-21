import { useLoaderData } from "react-router-dom";

const RoomsCard = () => {
  const loader = useLoaderData();
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {loader.map((data) => (
          <div key={data._id}>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  src={data.img}
                  alt="rooms"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{data.title}</h2>
                <p>{data.description}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
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
