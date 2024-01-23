const Events = () => {
  return (
    <div>
      <div
        className="hero h-[60vh]"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/7VksbNj/banner.jpg)",
        }}
      >
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold salsa">Events</h1>
          </div>
        </div>
      </div>
      <div className="mt-10 md:w-[1100px] py-16 mx-auto hover:shadow-2xl"> 
       <p className="text-4xl salsa px-4  md:justify-center items-center flex">
        Stay with US, We are coming with some <br /> exciting events soon!!!
       </p>
      </div>
    </div>
  );
};

export default Events;
