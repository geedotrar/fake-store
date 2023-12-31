import React, { useState } from "react";
import "./Products.css";
import ProductModal from "../DetailProduct/DetailProduct";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Products({ data, handleAddToCart }) {
  const [display, setDisplay] = useState(false);
  const [id, setId] = useState();

  const detailProduct = (id) => {
    setDisplay(true);
    setId(id);
  };

  return (
    <div className="">
      <div className="product">
        <ToastContainer />
        {display && <ProductModal setDisplay={setDisplay} id={id} data={data} />}

        <div className="text-center pt-10">
          <h1 className="font-bold text-4xl text-white">All Products</h1>
        </div>

        <section id="Projects" className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 p-5 ">
          {data.map((productItem) => {
            return (
              <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <img src={productItem.image} alt="Product" className="card-image" />
                <div className="tes px-4 py-3 w-72">
                  <div className="d-flex h-2 ">
                    <p className="text-xs font-bold text-black  block capitalize">{productItem.title}</p>
                  </div>
                  <div className="flex items-center pt-4">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">${productItem.price}</p>
                    <div className="ml-auto">
                      <button onClick={() => handleAddToCart(productItem)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                          <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="text-center ">
                    <button
                      onClick={() => detailProduct(productItem.id)}
                      type="button"
                      className="text-white bg-gray-800 hover:bg-[#24292A]/90 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                    >
                      Detail
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        <script src="https://storage.ko-fi.com/cdn/scripts/overlay-widget.js"></script>
      </div>
    </div>
  );
}
