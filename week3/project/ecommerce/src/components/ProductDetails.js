import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";

const ProductDetails = () => {
  const { id } = useParams();
  const { data, isPending, error, fetchData } = useFetch("");

  useEffect(() => {
    async function fetchProduct() {
      await fetchData(`https://fakestoreapi.com/products/${id}`, "");
    }

    fetchProduct();
  }, []);

  const product = data;
  let errorMessage = null;
  if (error) {
    errorMessage = <div>{error}</div>;
  }
  let isLoading = null;
  if (isPending) {
    isLoading = <div>Loading...</div>;
  }
  return (
    <div className="product-details">
      {isLoading}
      {errorMessage}
      {product && (
        <>
          <h1>{product.title}</h1>
          <img
            src={product.image}
            alt={product.category}
            className="product-details__image"
          />
          <p className="product-details__description">{product.description}</p>
        </>
      )}
    </div>
  );
};

export default ProductDetails;
