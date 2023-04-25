const Button = ({ category, key, onClick }) => {
  return (
    <button
      key={key}
      className="categories--item"
      onClick={() => onClick(category)}
    >
      {category}
    </button>
  );
};

export default Button;
