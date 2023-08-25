import React from "react";
import { ToastContainer } from "react-toastify";
import "./cart.css";

export default function Cart({ cartItems, handleAddProduct, handleRemoveProduct, removeFromCart }) {
  const totalItems = cartItems.reduce((price, item) => price + item.quantity, 0);
  const totalPrice = cartItems.reduce((price, item) => item.quantity * item.price + price, 0);

  return (
    <div className="content-cart">
      <ToastContainer />
      <div className="h-screen pt-20">
        <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
        {cartItems.length === 0 && (
          <div>
            <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
              <div className="rounded-lg md:w-2/3">
                <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                  <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <h1 className="text-black">No items Added</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div>
          <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
            <div className="rounded-lg md:w-2/3">
              {cartItems.map((item) => {
                return (
                  <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                    <img src={item.image} className="w-ful rounded-lg sm:w-20" />
                    <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                      <div className="mt-5 sm:mt-0">
                        <h2 className="text-sm text-left font-bold text-gray-900">{item.title}</h2>
                      </div>
                      <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                        <div className="flex items-center border-gray-100">
                          <button className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={() => handleRemoveProduct(item)}>
                            -
                          </button>
                          <span className="pt-2 h-8 w-8 border bg-white text-center text-xs outline-none">{item.quantity}</span>
                          <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={() => handleAddProduct(item)}>
                            +
                          </span>
                        </div>
                        <div className="flex items-center space-x-4">
                          <p className="text-sm">{item.price}</p>
                          <svg
                            onClick={() => removeFromCart(item.id)}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                          >
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* <!-- Sub total --> */}
            <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
              <div className="mb-2 flex justify-between">
                <p className="text-gray-700">Total Item</p>
                <p className="text-gray-700">{totalItems}</p>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between">
                <p className="text-lg font-bold">Total</p>
                <div className="mb-1 text-lg font-bold">$ {totalPrice.toFixed(1)}</div>
              </div>
              <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
