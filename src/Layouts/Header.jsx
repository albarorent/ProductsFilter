import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/">
        <h1 className="text-center py-2 font-bold text-3xl dark:text-white">
          Discover our cocktail recipes
        </h1>
      </Link>
    </header>
  );
}

export default Header;
