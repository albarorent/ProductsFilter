import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCategory } from "../context/categoryContext";
import Ingredients from "../components/Ingredients";

function DrinkInfo() {
  const { id } = useParams();
  const { DrinkId, producto, productoCat } = useCategory();
  const [drink, setDrink] = useState(null);
  const [loading, setLoading] = useState(true);

  async function loadDrink() {
    try {
      if (id) {
        const drinkId = await DrinkId(id);
        setDrink(drinkId[0]);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error loading drink:", error);
    }
  }

  useEffect(() => {
    loadDrink();
  }, [id, DrinkId]);

  const currentIndex = drink
    ? producto.findIndex((item) => item.idDrink === drink.idDrink)
    : -1;
  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < producto?.length - 1;
  const previousProduct = hasPrevious ? producto[currentIndex - 1] : null;
  const nextProduct = hasNext ? producto[currentIndex + 1] : null;

  return (
    <>
      {" "}
      {loading && <p className="text-teal-500">Cargando...</p>}
      {!loading && drink && (
        <div className="flex flex-col gap-0 p-0 md:gap-10 md:p-10 w-full ">
          <div className="flex flex-col md:flex-row gap-5 pt-2 items-center md:items-start justify-center md:justify-normal">
            <div className="w-full md:w-2/4">
              <img
                className="w-96"
                src={drink.strDrinkThumb}
                alt={drink.strDrink}
              />
            </div>
            <div className="w-full md:w-2/4 px-5">
              <div className="group border border-slate-800 hover:bg-slate-800 hover:shadow-lg hover:border-transparent mb-4 p-4">
                <h1 className="text-2xl font-bold text-teal-500">
                  {drink.strDrink}
                </h1>
                <p className="text-teal-500">{drink.strCategory}</p>
                <p className="text-teal-500">{drink.strAlcoholic}</p>
              </div>
              <p className="group border border-slate-800 hover:bg-slate-800 hover:shadow-lg hover:border-transparent mb-4 p-4 text-teal-500 ">
                <span className="font-bold">
                  Ingredients: <br />
                </span>
                {Ingredients(drink).map((ingredient, index) => (
                  <React.Fragment key={index}>
                    {ingredient} <br />
                  </React.Fragment>
                ))}
              </p>

              <p className=" text-teal-500 group border border-slate-800 hover:bg-slate-800 hover:shadow-lg hover:border-transparent mb-4 p-4">
                <span className="font-bold">
                  Instruccions: <br />
                </span>
                {drink.strInstructions}
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-5">
            {hasPrevious && (
              <Link
                className="bg-slate-800 p-2 rounded-lg text-teal-500"
                to={`/drink/${previousProduct.idDrink}`}
              >
                Anterior: {previousProduct.strDrink}
              </Link>
            )}
            {hasNext && (
              <Link
                className="bg-slate-800 p-2 rounded-lg text-teal-500"
                to={`/drink/${nextProduct.idDrink}`}
              >
                Siguiente: {nextProduct.strDrink}
              </Link>
            )}
          </div>
        </div>
      )}
      {!loading && !drink && <p>No se encontró la bebida.</p>}
    </>
  );
}

export default DrinkInfo;
