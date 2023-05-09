import { useState } from "react";
import regularHeart from "../assets/heart-regular.svg";
import solidHeart from "../assets/heart-solid.svg";

const FavouritesButton = ({ onClick, favourited }) => {
  const [isSolid, setIsSolid] = useState(favourited);

  const handleClick = () => {
    setIsSolid((prevIsSolid) => !prevIsSolid);
    onClick(!isSolid);
  };

  return (
    <button className="favourites__button" onClick={handleClick}>
      <img
        src={isSolid ? solidHeart : regularHeart}
        alt="heart"
        className="product__icon"
      />
    </button>
  );
};

export default FavouritesButton;
