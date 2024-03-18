import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="container mx-auto px-4 lg:px-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-200">
              Contact Us
            </h3>
            <p className="text-gray-400">info@example.com</p>
            <p className="text-gray-400">123 Street, City, Country</p>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-200">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a
                href="/"
                className="text-gray-400 hover:text-white transition duration-300"
                aria-label='Facebook'
              >
                <FaFacebook className="text-xl" />
              </a>
              <a
                href="/"
                className="text-gray-400 hover:text-white transition duration-300"
                aria-label='Twitter'
              >
                <FaTwitter className="text-xl" />
              </a>
              <a
                href="/"
                className="text-gray-400 hover:text-white transition duration-300"
                aria-label='Linkedin'
              >
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>

          <div className="lg:text-right">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Your Company
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
