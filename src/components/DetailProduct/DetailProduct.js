import { useEffect } from "react";
import { toast } from "react-toastify";

export default function ProductModal({ data, id, setDisplay, handleAddToCart }) {
  const product = data[id - 1];

  const addToCart = () => {
    handleAddToCart(product);
    toast.success(`${product.title} added to cart 🛒`, {
      position: "bottom-right",
      autoClose: 2000,
    });
    setDisplay(false);
  };

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        setDisplay(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [setDisplay]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={() => setDisplay(false)}
      ></div>

      <div className="relative bg-white rounded-xl shadow-2xl max-w-3xl w-full mx-4 overflow-hidden animate-fadeIn">
        <div className="flex items-center justify-between border-b px-6 py-4">
          <h3 className="text-xl font-bold text-gray-800">{product.title}</h3>
          <button
            onClick={() => setDisplay(false)}
            className="text-gray-500 hover:text-gray-700 transition text-2xl font-bold"
          >
            ×
          </button>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6 p-6">
          <div className="flex-shrink-0">
            <img
              src={product.image}
              alt={product.title}
              className="w-40 h-40 object-contain"
            />
          </div>

          <div className="flex-1">
            <p className="text-gray-600 text-justify leading-relaxed">
              {product.description}
            </p>
            <p className="mt-4 text-lg font-bold text-gray-900">
              ${product.price}
            </p>

            <div className="mt-6 flex gap-3">
              <button
                onClick={() => setDisplay(false)}
                className="px-5 py-2.5 text-sm rounded-lg font-medium bg-gray-800 text-white hover:bg-gray-900 transition"
              >
                Back
              </button>
              <button
                onClick={addToCart}
                className="px-5 py-2.5 text-sm rounded-lg font-medium bg-green-600 text-white hover:bg-green-700 transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
