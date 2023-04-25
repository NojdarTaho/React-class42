import Products from "./Products";
import Categories from "./Product-categories";
import allProducts from "../fake-data/all-products";
import { useState } from "react";
const ProductLists = () => {
  const [list, setList] = useState(allProducts);

  const showList = (category) =>
    category === "FAKE: electronics"
      ? setList(
          allProducts.filter((product) => product.category === "electronics")
        )
      : category === "FAKE: jewelery"
      ? setList(
          allProducts.filter((product) => product.category === "jewelery")
        )
      : category === "FAKE: men's clothing"
      ? setList(
          allProducts.filter((product) => product.category === "men's clothing")
        )
      : category === "FAKE: women's clothing"
      ? setList(
          allProducts.filter(
            (product) => product.category === "women's clothing"
          )
        )
      : null;

  return (
    <div>
      <h1>Products</h1>
      <Categories handleClick={showList} />
      <Products products={list} />
    </div>
  );
};

export default ProductLists;
