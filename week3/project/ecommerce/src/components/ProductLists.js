import Products from "./Products";
import Categories from "./Product-categories";
import { useEffect } from "react";
import useFetch from "../hooks/useFetch";

const ProductLists = () => {
  const { data, error, isPending, fetchData } = useFetch();

  useEffect(() => {
    fetchData("https://fakestoreapi.com/products");
  }, []);

  const showList = (category) => {
    const url = `https://fakestoreapi.com/products/category/${category}`;
    fetchData(url);
  };

  let errorMessage = null;
  if (error) {
    errorMessage = <div>{error}</div>;
  }
  let isLoading = null;
  if (isPending) {
    isLoading = <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Products</h1>
      {data && <Categories handleClick={showList} />}
      {isLoading}
      {errorMessage}
      {<Products products={data} error={error} isPending={isPending} />}
    </div>
  );
};

export default ProductLists;
