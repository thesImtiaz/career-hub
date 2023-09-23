const Banner = () => {
  return (
    <div className="bg-[#7e90fe0d]">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse justify-between">
          <img src="./src/assets/images/user.png" className="w-2/4 h-2/5 " />
          <div>
            <h1 className="text-7xl font-extrabold">
              One Step <br /> Closer To Your <br />{" "}
              <span className="text-[#7E90FE]">Dream Job</span>
            </h1>
            <p className="py-6 text-lg font-medium">
              Explore thousands of job opportunities with all the <br />{" "}
              information you need. Its your future. Come find it. Manage all{" "}
              <br />
              your job application from start to finish.
            </p>
            <button className="btn bg-[#7E90FE] text-white normal-case">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
