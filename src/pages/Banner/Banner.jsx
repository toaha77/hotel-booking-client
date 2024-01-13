const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/H4fRd99/sasha-kaunas-x-Ea-Aoiz-NFV8-unsplash.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 salsa font-bold text-4xl uppercase lg:text-7xl">
              Enjoy a luxury <br /> experience
            </h1>
            <p className="mb-4 salsa">
              The seaside haven of warmth, tranquility and restoration
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
