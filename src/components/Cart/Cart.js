import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./cart.css";

export default function Cart({ cartItems, handleAddProduct, handleRemoveProduct, removeFromCart, setCartItems }) {
  const totalItems = cartItems.reduce((price, item) => price + item.quantity, 0);
  const totalPrice = cartItems.reduce((price, item) => item.quantity * item.price + price, 0);

  const checkOutButton = () => {
    if (cartItems.length === 0) {
      toast.error("Please add a product first 🛒", {
        position: "top-center",
        autoClose: 2000,
      });
    } else {
      toast.success("Thank you for shopping! 🎉", {
        position: "top-center",
        autoClose: 2000,
      });
      setCartItems([]);
    }
  };

  return (
    <div className="content-cart min-h-screen pt-20">
      <ToastContainer />

      <h1 className="mb-10 text-center text-3xl font-extrabold text-white">
        Your Cart
      </h1>

      {cartItems.length === 0 ? (
        <div className="mx-auto max-w-lg text-center bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-gray-700 font-semibold text-lg">
            No items added yet
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            Browse products and add them to your cart.
          </p>
        </div>
      ) : (
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row gap-6 px-6">
          <div className="flex-1 space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between rounded-lg bg-white p-4 shadow-md hover:shadow-lg transition"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-contain rounded-lg border"
                  />
                  <div>
                    <h2 className="text-gray-900 font-semibold line-clamp-2">
                      {item.title}
                    </h2>
                    <p className="text-sm text-gray-600 font-medium">
                      ${item.price}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center border rounded-lg overflow-hidden">
                    <button
                      className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700"
                      onClick={() => handleRemoveProduct(item)}
                    >
                      -
                    </button>
                    <span className="px-4 py-1 text-gray-800 font-medium">{item.quantity}</span>
                    <button className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700" onClick={() => handleAddProduct(item)}>
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-gray-400 hover:text-red-500 transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="md:w-1/3 bg-white rounded-lg shadow-md p-6 h-fit">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Order Summary
            </h3>

            <div className="flex justify-between text-gray-700 mb-2">
              <span>Total Items</span>
              <span>{totalItems}</span>
            </div>

            <div className="flex justify-between text-lg font-bold text-gray-900 border-t pt-4">
              <span>Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>

            <button
              onClick={checkOutButton}
              className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg font-medium transition"
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
