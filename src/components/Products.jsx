import React, { useState, useEffect } from "react";
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Products = () => {
  const [product, setProduct] = useState([]);

  const URL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail";

  useEffect(() => {
    showData();
  }, []);

  const showData = async () => {
    try {
      const respuesta = await fetch(URL);
      const product = await respuesta.json();
      setProduct(product.drinks);
      console.log(product)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <main className="container">
        <h2>Datos de la API</h2>
        
        <ul className="listado">
          {product.map(drink => (
                <li className="listado__li" key={drink.idDrink}>{drink.strDrink}
                  <div>
                    <img src={drink.strDrinkThumb} alt="100px" width="100px" />
                  </div>
                  <div>
                    <button>
                        <AiOutlineShoppingCart/>
                    </button>
                  </div>
                </li>
          )
          )}
        </ul>
      </main>
    </>
  );
};

export default Products;
