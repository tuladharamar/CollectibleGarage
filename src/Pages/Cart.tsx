import {  useState } from "react";
import { useCart } from "../Context/CartContext";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Cart = () => {
  const [loading, setLoading] = useState(false);
  const {
    cart,
    increaseQty,
    decreaseQty,
    removeFromCart,
    clearCart,
  } = useCart();

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Your Cart is Empty 🛒</h1>
        <Link
          to="/"
          className="bg-blue-500 text-white px-6 py-2 rounded-xl"
        >
          Go Shopping
        </Link>
      </div>
    );
  }
  const checkout = async () => {
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast.success('Order placed Succesfully', {
        duration: 4000,
        position: "bottom-center"
      })
      clearCart();
    } catch {
      toast.error('Checkout Failed')
    } finally {
      setLoading(false);
    }
  }





  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-600 mb-4"></div>
        <h2 className="text-xl font-semibold">Processing your order...</h2>
        <p className="text-gray-500 mt-2">Please wait</p>
      </div>
    )
  }
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid gap-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row items-center gap-6 bg-white shadow rounded-2xl p-4"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-32 h-24 object-cover rounded-xl"
            />

            {/* Details */}
            <div className="flex-1">
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-gray-600">
                Rs. {item.price.toLocaleString()}
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Subtotal: Rs. {(item.price * item.qty).toLocaleString()}
              </p>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => decreaseQty(item.id)}
                className="px-3 py-1 bg-gray-200 rounded-lg"
              >
                -
              </button>

              <span className="font-bold">{item.qty}</span>

              <button
                onClick={() => increaseQty(item.id)}
                className="px-3 py-1 bg-gray-200 rounded-lg"
              >
                +
              </button>
            </div>

            {/* Remove */}
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 font-semibold"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="mt-10 p-6 bg-gray-100 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-4">
        <h2 className="text-xl font-bold">
          Total: Rs. {totalPrice.toLocaleString()}
        </h2>

        <div className="flex gap-4">
          <button
            onClick={clearCart}
            className="bg-red-500 text-white px-6 py-2 rounded-xl"
          >
            Clear Cart
          </button>

          <button className="bg-green-500 text-white px-6 py-2 rounded-xl" onClick={checkout}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;