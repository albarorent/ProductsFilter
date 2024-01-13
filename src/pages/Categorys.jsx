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
      <div className="w-60 flex flex-col items-start p-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <h1 className="font-bold text-xl pb-2">Categories</h1>
        {category.map((category, index) => (
          <Link key={index} to="/">
            <button
              className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600"
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
