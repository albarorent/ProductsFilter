import axios from "./axios";

export const filterCategory = () => axios(`list.php?c=list`);

export const searchCategory = (category) => axios(`filter.php?c=${category}`)