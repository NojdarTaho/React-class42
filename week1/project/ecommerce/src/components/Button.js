const Button = ({ category, setKey, onClick }) => {
  return (
    <button
      key={setKey}
      className="categories--item"
      onClick={() => onClick(category)}
    >
      {category}
    </button>
  );
};

export default Button;
