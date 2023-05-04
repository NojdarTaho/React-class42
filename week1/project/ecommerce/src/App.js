import { useState } from "react";
import allProducts from "./fake-data/all-products";
import Categories from "./components/Product-categories";
import Products from "./components/Products";
const App = () => {
  const [list, setList] = useState(allProducts);

  const showList = (category) => {
    setList(
      allProducts.filter((product) => {
        return category === `FAKE: ${product.category}`;
      })
    );
  };
  return (
    <div>
      <h1>Products</h1>
      <Categories handleClick={showList} />
      <Products products={list} />
    </div>
  );
};

export default App;
