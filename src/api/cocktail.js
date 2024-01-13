import axios from "./axios";

export const filterCocktail = (cocktail = '') => {
    // Verifica si cocktail tiene algún valor
    const searchParam = cocktail ? `search.php?s=${cocktail}` : 'search.php?s';
  
    return axios.get(searchParam);
  };


export const CocktailId = (id) => axios.get(`lookup.php?i=${id}`)