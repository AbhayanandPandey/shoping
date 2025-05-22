import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaCcPaypal,
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaCcDiscover,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#ffffff] pt-12 pb-6 text-gray-700">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <div className="text-3xl font-bold text-blue-600">S</div>
            <span className="text-xl font-semibold">ShopNow</span>
          </div>
          <p className="text-sm mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget lorem.
          </p>
          <div className="flex space-x-4 text-blue-500">
            <FaFacebookF className="hover:text-blue-700 cursor-pointer" />
            <FaTwitter className="hover:text-blue-700 cursor-pointer" />
            <FaYoutube className="hover:text-red-600 cursor-pointer" />
            <FaLinkedinIn className="hover:text-blue-700 cursor-pointer" />
          </div>
        </div>

        {/* Useful Links */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-3">Useful Links</h3>
            <ul className="space-y-2 text-sm">
              <li>Legal & Privacy</li>
              <li>Contact</li>
              <li>Gift Card</li>
              <li>Customer Service</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3 invisible md:visible">&nbsp;</h3>
            <ul className="space-y-2 text-sm">
              <li>Women</li>
              <li>Accessories</li>
              <li>Men</li>
              <li>Gift</li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold mb-3">Subscribe Newsletter</h3>
          <p className="text-sm mb-4">
            Enter your email to receive our valuable newsletters.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 p-2 rounded-l-md border border-gray-300"
            />
            <button className="bg-blue-600 text-white px-4 rounded-r-md hover:bg-blue-700">
              ✉️
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200 pt-6 text-sm px-6 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left links */}
        <div className="flex flex-wrap justify-center gap-4 text-gray-500">
          <span>Payment</span>
          <span>Shipping & Returns</span>
          <span>Gift Cards</span>
          <span>Privacy Policy</span>
          <span>Stockists</span>
        </div>

        {/* Payment icons */}
        <div className="flex space-x-4 text-gray-600 text-xl">
          <FaCcPaypal />
          <FaCcVisa />
          <FaCcMastercard />
          <FaCcAmex />
          <FaCcDiscover />
        </div>
      </div>
    </footer>
  );
}
