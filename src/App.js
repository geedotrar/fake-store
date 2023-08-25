import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./components/Routes/Routes";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer/Footer";

function App() {
  const [data, setData] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleAddToCart = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    toast.success("successfully added to cart", {
      position: toast.POSITION.TOP_CENTER,
    });
    if (ProductExist) {
      setCartItems(cartItems.map((item) => (item.id === product.id ? { ...ProductExist, quantity: ProductExist.quantity + 1 } : item)));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist) {
      setCartItems(cartItems.map((item) => (item.id === product.id ? { ...ProductExist, quantity: ProductExist.quantity + 1 } : item)));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist.quantity === 1) {
      setCartItems(cartItems.map((item) => (item.id === product.id ? { ...ProductExist, quantity: (ProductExist.quantity = 1) } : item)));
    } else {
      setCartItems(cartItems.map((item) => (item.id === product.id ? { ...ProductExist, quantity: ProductExist.quantity - 1 } : item)));
    }
  };

  const removeFromCart = (id) => {
    toast.success("successfully removed from cart");
    setCartItems(
      cartItems.filter((ct) => {
        return ct.id !== id;
      })
    );
  };

  return (
    <div>
      <Router>
        <Header cartItems={cartItems} />
        <Routes handleAddToCart={handleAddToCart} data={data} cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} removeFromCart={removeFromCart} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
