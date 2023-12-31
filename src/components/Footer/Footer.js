import React from "react";
import "./footer.css";
import { useLocation } from "react-router";

export default function Footer() {
  const { pathname } = useLocation();
  if (pathname === "/cart") {
    return null;
  }
  return (
    <div className="footer-container">
      <footer className="bg-gray-800 shadow dark:bg-gray-900 ">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="https://stevanprb.vercel.app/" className="mr-4 hover:underline md:mr-6 ">
                  About
                </a>
              </li>
              <li>
                <a href="mailto:stevangeoprb@gmail.com" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023 <a href="https://flowbite.com/" className="hover:underline"></a>. PT Fake St*re
          </span>
        </div>
      </footer>
    </div>
  );
}
