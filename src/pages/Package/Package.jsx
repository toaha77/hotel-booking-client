const Package = () => {
  return (
    <div>
      <div
        className=" bg-center bg-cover h-[70vh]"
        style={{
          backgroundImage: "url(https://i.ibb.co/7KNqh2H/h.jpg)",
        }}
      >
        <div className="flex items-center justify-center px-10 py-16">
          <div className="w-1/2"></div>
          <div className="w-1/2 bg-[#f5d1d1] p-8">
            <div className="text-center">
            <p className=" text-3xl uppercase">Enjoy</p>
            <p className="text-9xl  font-semibold text-rose-400">
              20<span className="text-4xl text-justify">% OFF</span>
            </p>
            <p className="uppercase pt-1 salsa">with our honeymoon package</p>
            <div className="mt-3">
                <button className="btn bg-blue-500 text-white hover:bg-blue-500 text-white">SEE OFFERS</button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Package;
