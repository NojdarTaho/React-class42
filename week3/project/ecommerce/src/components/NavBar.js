import { Link } from "react-router-dom";
import { useContext } from "react";
import { FavouritesContext } from "../context/FavouritesContext";
const NavBar = () => {
  const { items } = useContext(FavouritesContext);
  return (
    <nav>
      <Link to={"/"}>
        <h2>Home</h2>
      </Link>
      <Link to={"/favourites"}>
        <h2>Favourites {items.length}</h2>
      </Link>
    </nav>
  );
};

export default NavBar;
