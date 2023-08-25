import React from "react";
import { Disclosure } from "@headlessui/react";
import { NavLink, Outlet } from "react-router-dom";
import "./header.css";

const navigation = [
  { name: "Dashboard", href: "/", current: false },
  { name: "All Products", href: "product", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header({ cartItems }) {
  const totalItems = cartItems.reduce((price, item) => price + item.quantity, 0);
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <NavLink
                        to={item.href}
                        key={item.name}
                        className={classNames(item.current ? "bg-gray-900 text-white" : "no-underline text-gray-300 hover:bg-gray-700 hover:text-white", "rounded-md px-3 py-2 text-sm font-medium")}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <NavLink to="/cart">
                  <img src={"https://www.shareicon.net/data/512x512/2016/02/07/281223_cart_512x512.png"} width={40} alt="" />
                </NavLink>
              </div>
              <div>{totalItems === 0 ? "" : <div className="mb-8 text-red-400 text-lg font-bold">{totalItems}</div>}</div>
            </div>
          </div>
          <main>
            <Outlet />
          </main>
        </>
      )}
    </Disclosure>
  );
}
