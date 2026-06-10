import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Trending from "./components/Trending";
import FeaturedProducts from "./components/FeaturedProducts";
import CategoryGrid from "./components/CategoryGrid";
import ProductGrid from "./components/ProductGrid";
import Cart from "./components/Cart";
import Wishlist from "./components/Wishlist";
import Footer from "./components/Footer";

function App() {
  const [selectedCategory, setSelectedCategory] =
    useState("");

  const [showCart, setShowCart] =
    useState(false);

  const [showWishlist, setShowWishlist] =
    useState(false);

  const [searchTerm, setSearchTerm] =
    useState("");

  return (
    <>
      <Navbar
        setShowCart={setShowCart}
        setShowWishlist={setShowWishlist}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      {showCart ? (
        <Cart />
      ) : showWishlist ? (
        <Wishlist />
      ) : !selectedCategory ? (
        <>
          <Hero />
<Trending
  setSelectedCategory={setSelectedCategory}
/>
          <FeaturedProducts />

          <CategoryGrid
            setSelectedCategory={
              setSelectedCategory
            }
          />

          <Footer />
        </>
      ) : (
        <>
          <div className="back-container">
            <button
              className="back-btn"
              onClick={() =>
                setSelectedCategory("")
              }
            >
              ← Back
            </button>
          </div>

          <h1 className="category-title">
            {selectedCategory}
          </h1>

          <ProductGrid
            selectedCategory={
              selectedCategory
            }
            searchTerm={searchTerm}
          />
        </>
      )}
    </>
  );
}

export default App;