import React from 'react';
import { FiPhone, FiUser, FiHeart, FiShoppingCart } from 'react-icons/fi';
import { MdOutlineExpandMore } from 'react-icons/md';

export default function Navbar() {
  return (
    <div className="w-full border border-gray-200 rounded-md">
      <div className="flex justify-between items-center px-6 py-4 bg-white">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="text-blue-600 text-2xl font-bold">S</div>
          <span className="text-xl font-semibold text-gray-900">ShopNow</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 font-medium text-sm text-gray-900">
          <a href="#" className="hover:text-blue-600">Home</a>
          <a href="#" className="hover:text-blue-600">Shop</a>
          <div className="flex items-center hover:text-blue-600 cursor-pointer">
            Products <MdOutlineExpandMore className="ml-1" />
          </div>
          <a href="#" className="hover:text-blue-600">Accessories</a>
          <a href="#" className="hover:text-blue-600">Contact</a>
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center space-x-6 text-gray-700">

          <div className="flex items-center space-x-4">
            <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
              <FiUser className="text-lg" />
            </div>
            <div className="relative p-2 rounded-full hover:bg-gray-100 cursor-pointer">
              <FiHeart className="text-lg" />
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full px-1.5">3</span>
            </div>
            <div className="relative p-2 rounded-full hover:bg-gray-100 cursor-pointer">
              <FiShoppingCart className="text-lg" />
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full px-1.5">1</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}