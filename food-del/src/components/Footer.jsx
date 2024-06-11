import React from "react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Logo and Description */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Flavour-Fusion</h2>
            <p className="mt-2 text-gray-400">
              Delivering delicious meals right to your doorstep.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  Menu
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
            <ul>
              <li className="mb-2 text-gray-400">
                <i className="fas fa-phone-alt mr-2"></i> +1 234 567 890
              </li>
              <li className="mb-2 text-gray-400">
                <i className="fas fa-envelope mr-2"></i> support@foodie.com
              </li>
              <li className="mb-2 text-gray-400">
                <i className="fas fa-map-marker-alt mr-2"></i> 123 Foodie St,
                Foodie City, FC 12345
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-6 flex justify-between items-center">
          <p className="text-gray-400">© 2024 Foodie. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        <p className="text-center text-lg mt-2">
          Made by Hardik <span className="text-red-500">&hearts;</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
