import React, { useState } from 'react';
import { FiUser, FiHeart, FiShoppingCart, FiMenu, FiX } from 'react-icons/fi';
import { MdOutlineExpandMore } from 'react-icons/md';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); // Mobile menu toggle state

  return (
    <nav className="w-full border-b border-gray-200 shadow-sm bg-white relative z-50">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="text-blue-600 text-2xl font-bold">S</div>
          <span className="text-xl font-semibold text-gray-900">ShopNow</span>
        </div>

        {/* Desktop nav links */}
        <div className="hidden md:flex space-x-8 font-medium text-sm text-gray-900">
          <button className="hover:text-blue-600">Home</button>
          <button className="hover:text-blue-600">Shop</button>
          <button className="flex items-center hover:text-blue-600">
            Products <MdOutlineExpandMore className="ml-1" />
          </button>
          <button className="hover:text-blue-600">Accessories</button>
          <button className="hover:text-blue-600">Contact</button>
        </div>

        {/* Right-side icons and mobile toggle */}
        <div className="flex items-center space-x-4">
          {/* Mobile menu toggle only on small screens */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-2xl text-gray-700 focus:outline-none"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>

          {/* Always visible icons */}
          <div className="flex items-center space-x-4 text-gray-700">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <FiUser className="text-lg" />
            </button>
            <div className="relative p-2 rounded-full hover:bg-gray-100">
              <FiHeart className="text-lg" />
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full px-1.5">3</span>
            </div>
            <div className="relative p-2 rounded-full hover:bg-gray-100">
              <FiShoppingCart className="text-lg" />
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full px-1.5">1</span>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen overlay menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col p-6 pt-4 animate-slideDown overflow-auto">
          {/* Close icon */}
          <button
            onClick={() => setMenuOpen(false)}
            className="self-end text-3xl text-gray-700 focus:outline-none mb-6"
            aria-label="Close menu"
          >
            <FiX />
          </button>

          {/* Nav links */}
          <button
            className="text-left text-gray-800 text-xl font-semibold hover:text-blue-600 mb-4"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </button>
          <button
            className="text-left text-gray-800 text-xl font-semibold hover:text-blue-600 mb-4"
            onClick={() => setMenuOpen(false)}
          >
            Shop
          </button>
          <button
            className="flex items-center text-gray-800 text-xl font-semibold hover:text-blue-600 mb-4"
            onClick={() => setMenuOpen(false)}
          >
            Products <MdOutlineExpandMore className="ml-2" />
          </button>
          <button
            className="text-left text-gray-800 text-xl font-semibold hover:text-blue-600 mb-4"
            onClick={() => setMenuOpen(false)}
          >
            Accessories
          </button>
          <button
            className="text-left text-gray-800 text-xl font-semibold hover:text-blue-600"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </button>
        </div>
      )}

      <style>{`
        @keyframes slideDown {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease forwards;
        }
      `}</style>
    </nav>
  );
}
