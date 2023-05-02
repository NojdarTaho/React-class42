import { Link } from "react-router-dom";
const Products = ({ products }) => {
  return (
    <>
      <ul className="products">
        {products &&
          products.map((product) => (
            <li className="products--item" key={product.id}>
              <div className="product">
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
    </>
  );
};
export default Products;
