import React from "react";
import { Route, Routes as Switch } from "react-router";
import Products from "../Products/Products";
import Dashboard from "../Dashboard/Dashboard";
import Cart from "../Cart/Cart";

const Routes = ({ data, cartItems, handleAddProduct, handleRemoveProduct, removeFromCart, handleAddToCart }) => {
  return (
    <div>
      <Switch>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/product" element={<Products data={data} handleAddToCart={handleAddToCart} />}></Route>
        <Route path="/cart" element={<Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} removeFromCart={removeFromCart} />}></Route>
      </Switch>
    </div>
  );
};

export default Routes;
