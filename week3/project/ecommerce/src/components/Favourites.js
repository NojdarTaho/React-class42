import { useContext, useState, useEffect } from "react";
import { FavouritesContext } from "../context/FavouritesContext";
import useFetch from "../hooks/useFetch";
import Products from "./Products";

const Favourites = () => {
  const { data, isPending, error, fetchData } = useFetch("");
  const { items } = useContext(FavouritesContext);
  const [favouriteProducts, setFavouriteProducts] = useState([]);

  useEffect(() => {
    async function fetchProduct() {
      await fetchData("https://fakestoreapi.com/products");
    }
    fetchProduct();
  }, []);

  useEffect(() => {
    if (data && items) {
      const favourites = data.filter((product) => items.includes(product.id));
      setFavouriteProducts(favourites);
    }
  }, [data, items]);
  let errorMessage = null;
  if (error) {
    errorMessage = <div>{error}</div>;
  }
  let isLoading = null;
  if (isPending) {
    isLoading = <div>Loading...</div>;
  }
  return (
    <div className="favourites">
      <h1>Favourites</h1>
      {errorMessage}
      {isLoading}
      {favouriteProducts.length > 0 ? (
        <Products products={favouriteProducts} />
      ) : (
        <div>No favourite products</div>
      )}
    </div>
  );
};

export default Favourites;
