import React from "react";
import { Disclosure } from "@headlessui/react";
import { NavLink, Outlet } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/outline"; // pakai Heroicons

const navigation = [
  { name: "Dashboard", href: "/" },
  { name: "All Products", href: "/product" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header({ cartItems }) {
  const totalItems = cartItems.reduce((total, item) => total + item.quantity,0);
  return (
    <Disclosure as="nav" className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-md">
      {() => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center space-x-6">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={({ isActive }) =>
                      classNames(
                        isActive
                          ? "bg-gray-700 text-white"
                          : "text-gray-300 hover:text-white hover:bg-gray-700",
                        "px-4 py-2 rounded-md text-sm font-medium transition duration-200 no-underline"
                      )
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
              <div className="relative">
                <NavLink
                  to="/cart"
                  className="flex items-center text-gray-300 hover:text-white transition duration-200"
                >
                  <ShoppingCartIcon className="h-8 w-8" />
                  {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-lg animate-pulse">
                      {totalItems}
                    </span>
                  )}
                </NavLink>
              </div>
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
