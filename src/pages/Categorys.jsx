import { Link } from "react-router-dom";
import { useCategory } from "../context/categoryContext";
import { useEffect } from "react";

const Categorys = () => {
  const { category, searchData, setSearchString } = useCategory();

  const handleCategoryClick = (categoryName) => {
    searchData(categoryName);
    setSearchString("");
  };

  return (
    <>
      <div className="w-60 flex flex-col items-start bg-yellow-600 p-5 rounded-lg">
        <h1 className="font-bold text-xl pb-2">Categories</h1>
        {category.map((category, index) => (
          <Link key={index} to="/">
            <button
              className="hover:bg-gray-200 rounded-lg p-2 focus:outline-none focus:border-blue-500 focus:ring focus:ring-yellow-500"
              onClick={() => handleCategoryClick(category.strCategory)}
            >
              {category.strCategory}
            </button>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Categorys;
