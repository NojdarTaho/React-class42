import allCategories from "../fake-data/all-categories";
import Button from "./Button";

const Categories = ({ handleClick }) => {
  return (
    <div className="categories">
      {allCategories.map((category) => (
        <Button key={category} category={category} onClick={handleClick} />
      ))}
    </div>
  );
};

export default Categories;
