import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BagPage from "./pages/BagPage";
import WishlistPage from "./pages/WishlistPage";
import AccountPage from "./pages/AccountPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Catalog" element={<CatalogPage />} />
          <Route path="/Bag" element={<BagPage />} />
          <Route path="/WishList" element={<WishlistPage />} />
          <Route path="/Account" element={<AccountPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
