import React from "react";
import { useLocation } from "react-router";
import {
  EnvelopeIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";

export default function Footer() {
  const { pathname } = useLocation();
  if (pathname === "/cart") {
    return null
  }
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-400 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-lg font-bold text-white">Fake St*re</h2>
            <p className="text-sm text-gray-400">
              Let's Shopping!!
            </p>
          </div>

          <ul className="flex space-x-6 text-sm font-medium">
            <li>
              <a
                href="https://stevanprb.vercel.app/"
                className="flex items-center gap-1 hover:text-white transition"
              >
                <InformationCircleIcon className="h-4 w-4" /> About
              </a>
            </li>
            <li>
              <a
                href="mailto:stevangeoprb@gmail.com"
                className="flex items-center gap-1 hover:text-white transition"
              >
                <EnvelopeIcon className="h-4 w-4" /> Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-700" />
        <div className="text-center text-sm text-gray-500">
          © 2023 Fake St*re. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
