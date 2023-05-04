const Products = ({ products }) => {
  return (
    <ul className="products">
      {products.map((product) => (
        <li className="products--item" key={product.id}>
          <div className="product">
            <img
              className="product--image"
              src={product.image}
              alt={product.title}
            />
            <span className="product--title">{product.title}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};
export default Products;
