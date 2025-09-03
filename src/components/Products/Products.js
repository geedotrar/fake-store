import React, { useState } from "react";
import "./Products.css";
import ProductModal from "../DetailProduct/DetailProduct";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Products({ data, handleAddToCart }) {
  const [display, setDisplay] = useState(false);
  const [id, setId] = useState();

  const detailProduct = (id) => {
    setDisplay(true);
    setId(id);
  };

  const addToCart = (product) => {
    handleAddToCart(product);
    toast.success(`${product.title} added to cart 🛒`, {
      position: "bottom-right",
      autoClose: 2000,
    });
  };

  return (
    <div>
      <div className="product">
        <ToastContainer />
        {display && <ProductModal setDisplay={setDisplay} id={id} data={data} handleAddToCart={handleAddToCart}  />}

        <div className="text-center pt-10">
          <h1 className="font-extrabold text-4xl text-white dark:text-white tracking-wide">
            All Products
          </h1>
        </div>

        <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 p-5">
          {data.map((productItem) => (
            <div
              key={productItem.id}
              className="w-72 bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={productItem.image}
                alt={productItem.title}
                className="h-56 w-full object-contain bg-gray-50 p-4"
              />

              <div className="px-4 py-3">
                <p
                  className="text-sm font-semibold text-gray-800 dark:text-white line-clamp-2 h-10"
                  title={productItem.title}
                >
                  {productItem.title}
                </p>

                <div className="flex items-center justify-between mt-4">
                  <span className="text-lg font-bold text-gray-900 dark:text-gray-200">
                    ${productItem.price}
                  </span>

                  <button
                    onClick={() => addToCart(productItem)}
                    className="p-2 rounded-full bg-green-600 text-white hover:bg-green-700 transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 
                          0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 
                          1 .5-.5z"
                      />
                      <path d="M8 1a2.5 2.5 0 0 1 2.5 
                        2.5V4h-5v-.5A2.5 2.5 0 
                        1 1 8 1zm3.5 3v-.5a3.5 3.5 0 
                        1 0-7 0V4H1v10a2 2 0 0 0 
                        2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 
                        5h12v9a1 1 0 0 1-1 
                        1H3a1 1 0 0 1-1-1V5z"
                      />
                    </svg>
                  </button>
                </div>

                <div className="mt-6 text-center">
                  <button
                    onClick={() => detailProduct(productItem.id)}
                    type="button"
                    className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 transition"
                  >
                    Detail
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
