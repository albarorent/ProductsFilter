function Ingredients(drink) {
  const ingredients = [];

  for (let i = 1; i <= 15; i++) {
    const ingredientKey = `strIngredient${i}`;
    const ingredient = drink[ingredientKey];

    if (ingredient) {
      ingredients.push(ingredient);
    }
  }

  return ingredients;
}

export default Ingredients;
