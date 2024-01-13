import { createContext, useContext, useEffect, useState } from "react";
import { filterCategory, searchCategory } from "../api/category";
import { filterCocktail, CocktailId } from "../api/cocktail";
const categoryContext = createContext();

export const useCategory = () => {
  const context = useContext(categoryContext);
  if (!context) {
    throw new Error("UseCategory must be used within an CategoryProvider");
  }
  return context;
};

export function CategoryProvider({ children }) {
  const [category, setCategory] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [producto, setProducto] = useState([]);
  const [loading, setLoading] = useState(true);

  const searchData = async (data) => {
    try {
      setLoading(true);
      const res = await searchCategory(data);
      setProducto(res.data.drinks);
      setLoading(false);

    } catch (error) {
      console.log(error);
    }
  };

  const searchDrink = async (data) => {
    try {
      const res = await filterCocktail(data);
      setSearchString(data || "");
      setProducto(res.data.drinks);
    } catch (error) {
      console.log(error);
    }
  };

  const DrinkId = async (id) => {
    try {
      const res = await CocktailId(id);
      return res.data.drinks;
    } catch (error) {
      console.log(error);
    }
  };

  const showData = async () => {
    try {
      setLoading(true);
      const res = await filterCategory();
      setCategory(res.data.drinks);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    showData();
  }, []);

  return (
    <categoryContext.Provider
      value={{
        category,
        searchData,
        producto,
        searchDrink,
        DrinkId,
        searchString,
        setSearchString,
        loading
      }}
    >
      {(
        <>{children}</>
      )}
    </categoryContext.Provider>
  );
}
