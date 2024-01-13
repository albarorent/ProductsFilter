import { Link } from "react-router-dom";

function Drinks({ drink, image, id }) {
  return (
    <Link to={`/drink/${id}`}>
      <img className="w-25 rounded-t-lg" src={image} alt={drink} />
      <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">{drink}</p>
    </Link>
  );
}

export default Drinks;
