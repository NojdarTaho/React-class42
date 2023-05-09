import { Link } from "react-router-dom";
import FavouritesButton from "./FavouritesButton";
import { useContext } from "react";
import { FavouritesContext } from "../context/FavouritesContext";

const Products = ({ products }) => {
  const { items, addToFavourites } = useContext(FavouritesContext);

  return (
    <ul className="products">
      {products &&
        products.map((product) => (
          <li className="products--item" key={product.id}>
            <div className="product">
              <FavouritesButton
                onClick={() => addToFavourites(product)}
                favourited={items.includes(product.id)}
              />

              <Link to={`/products/${product.id}`}>
                <img
                  className="product--image"
                  src={product.image}
                  alt={product.title}
                />
                <span className="product--title">{product.title}</span>
              </Link>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default Products;
