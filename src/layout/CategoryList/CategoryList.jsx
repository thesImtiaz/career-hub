const CategoryList = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mt-24 space-y-4">
        <h1 className="text-5xl font-extrabold">Job Category List</h1>
        <p className="text-sm font-medium">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        <div className="bg-[#7e90fe0d] shadow-xl rounded-md">
          <div className="card-body">
            <figure className="">
              <img
                src="./src/assets/icons/accounts.png"
                className=""
              />
            </figure>
            <h2 className="text-xl font-semibold">Account & Finance</h2>
            <p className="text-sm font-medium">300 Jobs Available</p>
          </div>
        </div>

        <div className="bg-[#7e90fe0d] shadow-xl rounded-md">
          <div className="card-body">
            <figure className="">
              <img
                src="./src/assets/icons/creative.png"
                className=""
              />
            </figure>
            <h2 className="text-xl font-semibold">Creative Design</h2>
            <p className="text-sm font-medium">100+ Jobs Available</p>
          </div>
        </div>

        <div className="bg-[#7e90fe0d] shadow-xl rounded-md">
          <div className="card-body">
            <figure className="">
              <img
                src="./src/assets/icons/marketing.png"
                className=""
              />
            </figure>
            <h2 className="text-xl font-semibold">Marketing & Sales</h2>
            <p className="text-sm font-medium">150 Jobs Available</p>
          </div>
        </div>

        <div className="bg-[#7e90fe0d] shadow-xl rounded-md">
          <div className="card-body">
            <figure className="">
              <img
                src="./src/assets/icons/chip.png"
                className=""
              />
            </figure>
            <h2 className="text-xl font-semibold">Engineering Job</h2>
            <p className="text-sm font-medium">240 Jobs Available</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
