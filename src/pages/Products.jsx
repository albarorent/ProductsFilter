import React, { useEffect, useState } from "react";
import { useCategory } from "../context/categoryContext";
import Drinks from "../components/Drinks";

function Products() {
  const { producto, searchDrink, searchString, loading } = useCategory();

  const handleOnchange = (e) => {
    searchDrink(e.target.value);
  };

  useEffect(() => {
    if (producto.length === 0) {
      searchDrink();
    }
  }, []);

  return (
    <>
      {loading && <p className="text-teal-500">Cargando...</p>}
      {!loading && (
        <div className="w-2/3">
          <input
            className="bg-slate-100 w-full relative m-0 block min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-300 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-500 dark:placeholder:text-neutral-500 dark:focus:border-primary"
            type="search"
            name="drink"
            value={searchString}
            placeholder="Search Drink"
            onChange={handleOnchange}
          />{" "}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2 p-2 overflow-auto w-full">
            {producto !== null ? (
              producto.length > 0 ? (
                <>
                  {producto.slice(0, 9).map((drink, index) => (
                    <div
                      className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                      key={index}
                    >
                      <Drinks
                        drink={drink.strDrink}
                        image={drink.strDrinkThumb}
                        id={drink.idDrink}
                      />
                    </div>
                  ))}
                </>
              ) : (
                <>
                  <p className="text-teal-500">No se encontraron productos.</p>
                </>
              )
            ) : (
              <p className="text-teal-500">No se encontraron...</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Products;
