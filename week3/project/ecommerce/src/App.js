import ProductLists from "./components/ProductLists";
import ProductDetails from "./components/ProductDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Favourites from "./components/Favourites";
import { FavouritesProvider } from "./context/FavouritesContext";

const App = () => {
  return (
    <div>
      <FavouritesProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<ProductLists />} />
            <Route path="products/:id" element={<ProductDetails />} />
            <Route path="/favourites" element={<Favourites />} />
          </Routes>{" "}
        </Router>
      </FavouritesProvider>
    </div>
  );
};

export default App;
