import { useSelector } from "react-redux";

function Navbar({
  setShowCart,
  setShowWishlist,
  searchTerm,
  setSearchTerm,
}) {
  const cartItems =
    useSelector((state) => state.cart.items) || [];

  const wishlistItems =
    useSelector((state) => state.wishlist.items) || [];

  return (
    <nav className="navbar">
      <h2>STYLORA</h2>

      <input
        type="text"
        placeholder="Search products..."
        className="search-bar"
        value={searchTerm}
        onChange={(e) =>
          setSearchTerm(e.target.value)
        }
      />

      <div className="nav-links">
        <span onClick={() => setShowCart(true)}>
          🛒 Cart ({cartItems.length})
        </span>

        <span
          onClick={() =>
            setShowWishlist(true)
          }
        >
          ❤️ Wishlist ({wishlistItems.length})
        </span>
      </div>
    </nav>
  );
}

export default Navbar;