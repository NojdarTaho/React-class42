import { createContext, useState } from "react";
export const FavouritesContext = createContext();

export function FavouritesProvider({ children }) {
  const [items, setItems] = useState([]);
  const [favourites, setFavourites] = useState(false);

  const addToFavourites = (product) => {
    if (!items.includes(product.id)) {
      setItems([...items, product.id]);
      setFavourites(true);
    } else {
      setItems(items.filter((id) => id !== product.id));
      setFavourites(false);
    }
  };

  return (
    <FavouritesContext.Provider value={{ items, addToFavourites, favourites }}>
      {children}
    </FavouritesContext.Provider>
  );
}
