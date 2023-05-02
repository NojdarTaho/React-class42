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

  return (
    <div className="product-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
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
