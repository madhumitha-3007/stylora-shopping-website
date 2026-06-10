import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { addToWishlist } from "../redux/wishlistSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
        loading="lazy"
      />

      <h3>{product.name}</h3>

      <p>₹{product.price}</p>

      <div className="product-buttons">
        <button
          className="cart-btn"
          onClick={() =>
            dispatch(addToCart(product))
          }
        >
          Add to Cart
        </button>

        <button
          className="wish-btn"
          onClick={() =>
            dispatch(addToWishlist(product))
          }
        >
          ❤️ Wishlist
        </button>
      </div>
    </div>
  );
}

export default ProductCard;