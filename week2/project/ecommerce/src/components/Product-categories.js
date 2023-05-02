import Button from "./Button";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";
const Categories = ({ handleClick }) => {
  const { data, isPending, error, fetchData } = useFetch("");
  useEffect(() => {
    async function fetchCategories() {
      await fetchData("https://fakestoreapi.com/products/categories");
    }

    fetchCategories();
  }, []);

  return (
    <div className="categories">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {data &&
        data.map((category, index) => (
          <Button key={index} category={category} onClick={handleClick} />
        ))}
    </div>
  );
};

export default Categories;
