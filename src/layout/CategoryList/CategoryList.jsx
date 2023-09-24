import { useEffect, useState } from "react";

const CategoryList = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch('categories.json')
    .then(res => res.json())
    .then(data => setCategory(data));
  },[])

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mt-24 space-y-4">
        <h1 className="text-5xl font-extrabold">Job Category List: {category.length}</h1>
        <p className="text-sm font-medium">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {category.map(category=>(
          <div className="bg-[#7e90fe0d] shadow-xl rounded-md">
          <div className="card-body">
            <figure>
              <img
                src={category.logo}
              />
            </figure>
            <h2 className="text-xl font-semibold">{category.category_name}</h2>
            <p className="text-sm font-medium">{category.availability}</p>
          </div>
        </div> 
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
