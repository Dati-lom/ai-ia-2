import React from 'react';
import { Link } from 'react-scroll';
import logo from '../Static/logo.png';

const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 fixed w-full z-10">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src={logo}
            className="h-12"
            alt="AI - IA logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            AI - IA
          </span>
        </a>
        {/* {/* <div className="hidden w-full md:block md:w-auto">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="block py-2 px-3 text-blue-700 md:p-0 dark:text-white cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="test"
                smooth={true}
                duration={500}
                className="block py-2 px-3 text-gray-900 md:p-0 dark:text-white cursor-pointer"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="services"
                smooth={true}
                duration={500}
                className="block py-2 px-3 text-gray-900 md:p-0 dark:text-white cursor-pointer"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="pricing"
                smooth={true}
                duration={500}
                className="block py-2 px-3 text-gray-900 md:p-0 dark:text-white cursor-pointer"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="block py-2 px-3 text-gray-900 md:p-0 dark:text-white cursor-pointer"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
