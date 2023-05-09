import Button from "./Button";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";
const Categories = ({ handleClick }) => {
  const { data, isPending, error, fetchData } = useFetch();
  useEffect(() => {
    async function fetchCategories() {
      await fetchData("https://fakestoreapi.com/products/categories");
    }

    fetchCategories();
  }, []);
  let errorMessage = null;
  if (error) {
    errorMessage = <div>{error}</div>;
  }
  let isLoading = null;
  if (isPending) {
    isLoading = <div>Loading...</div>;
  }

  return (
    <div className="categories">
      {errorMessage}
      {isLoading}
      {data &&
        data.map((category, index) => (
          <Button key={index} category={category} onClick={handleClick} />
        ))}
    </div>
  );
};

export default Categories;
