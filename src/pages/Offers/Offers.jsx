import Package from "../Package/Package";

 
const Offers = () => {
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
            <h1 className="mb-5 text-5xl font-bold salsa">Special Offers</h1>
          </div>
        </div>
      </div>
      <Package></Package>
        </div>
    );
};

export default Offers;