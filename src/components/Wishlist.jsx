import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function Wishlist() {
  const dispatch = useDispatch();

  const items = useSelector(
    (state) => state.wishlist.items
  );

  return (
    <div className="cart">
      <h2>❤️ Wishlist</h2>

      {items.length === 0 ? (
        <p>No items in wishlist</p>
      ) : (
        items.map((item) => (
          <div key={item.id} className="cart-item">
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>

            <button
              onClick={() =>
                dispatch(addToCart(item))
              }
            >
              Move to Cart
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Wishlist;