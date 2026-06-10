import { useDispatch, useSelector } from "react-redux";

import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} from "../redux/cartSlice";

function Cart() {
  const dispatch = useDispatch();

  const cartItems =
    useSelector((state) => state.cart.items) || [];

  const subtotal = cartItems.reduce(
    (acc, item) =>
      acc + item.price * (item.quantity || 1),
    0
  );

  const delivery = 99;
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + delivery + tax;

  const handlePlaceOrder = () => {
    const confirmOrder = window.confirm(
      "Are you sure you want to place this order?"
    );

    if (confirmOrder) {
      alert(
        "🎉 Order Placed Successfully!\n\nThank you for shopping with STYLORA.\n\nWe will update you soon regarding delivery details and tracking information."
      );

      dispatch(clearCart());
    }
  };

  return (
    <div className="cart">
      <h2>🛒 My Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="cart-item"
            >
              <h3>{item.name}</h3>

              <p>₹{item.price}</p>

              <div className="qty">
                <button
                  onClick={() =>
                    dispatch(
                      decreaseQuantity(item.id)
                    )
                  }
                >
                  -
                </button>

                <span>
                  {item.quantity || 1}
                </span>

                <button
                  onClick={() =>
                    dispatch(
                      increaseQuantity(item.id)
                    )
                  }
                >
                  +
                </button>
              </div>

              <button
                className="remove-btn"
                onClick={() =>
                  dispatch(
                    removeFromCart(item.id)
                  )
                }
              >
                Remove
              </button>
            </div>
          ))}

          <div className="bill">
            <h3>
              Subtotal: ₹{subtotal}
            </h3>

            <h3>
              Delivery Charge: ₹{delivery}
            </h3>

            <h3>Tax: ₹{tax}</h3>

            <h2>Total: ₹{total}</h2>

            <button
              className="order-btn"
              onClick={handlePlaceOrder}
            >
              Place Order
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;