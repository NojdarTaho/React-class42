import Products from "./Products";
import Categories from "./Product-categories";
import { useEffect } from "react";
import useFetch from "../hooks/useFetch";

const categoryMap = {
  electronics: "electronics",
  jewelery: "jewelery",
  "men's clothing": "men's clothing",
  "women's clothing": "women's clothing",
};

const ProductLists = () => {
  const { data, error, isPending, fetchData } = useFetch();

  useEffect(() => {
    fetchData("https://fakestoreapi.com/products");
  }, []);

  const showList = (category) => {
    const selectedCategory = categoryMap[category];
    if (selectedCategory) {
      const url = `https://fakestoreapi.com/products/category/${selectedCategory}`;
      fetchData(url);
    } else {
      console.log("Invalid category selected");
    }
  };

  return (
    <div>
      <h1>Products</h1>

      {data && <Categories handleClick={showList} />}
      {isPending && <div>Loading...</div>}

      {error && <div>{error}</div>}

      {data && <Products products={data} error={error} isPending={isPending} />}
    </div>
  );
};

export default ProductLists;
