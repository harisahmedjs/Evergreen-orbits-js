import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/3 text-center md:text-left">
                <h2 className="text-2xl font-semibold">EvergreenObits</h2>
                <p className="py-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                </p>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a href="#" className="text-gray-400 hover:text-gray-500 text-sm font-semibold block py-2 pl-3 pr-4 rounded">
                      Learn More
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="text-gray-400 hover:text-gray-500 text-sm font-semibold block py-2 pl-3 pr-4 rounded">
                      Help Center
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="text-gray-400 hover:text-gray-500 text-sm font-semibold block py-2 pl-3 pr-4 rounded">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/3 text-center md:text-left">
                <h3 className="text-xl font-semibold text-white">Useful Links</h3>
                <ul className="list-unstyled">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-gray-500 text-sm font-semibold block py-2 pl-3 pr-4 rounded">
                      How It Works
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-gray-500 text-sm font-semibold block py-2 pl-3 pr-4 rounded">
                      About V
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-gray-500 text-sm font-semibold block py-2 pl-3 pr-4 rounded">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-gray-500 text-sm font-semibold block py-2 pl-3 pr-4 rounded">
                      Create Obituary
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/3 text-center md:text-left">
                <h3 className="text-xl font-semibold text-white">Contact Us</h3>
                <ul className="list-unstyled">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-gray-500 text-sm font-semibold block py-2 pl-3 pr-4 rounded">
                      support@evergreenobits.com
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-gray-500 text-sm font-semibold block py-2 pl-3 pr-4 rounded">
                      123 Main St. Anytown, USA
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-gray-500 text-sm font-semibold block py-2 pl-3 pr-4 rounded">
                      (123) 456-7890
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <hr className="border-gray-700 my-8" />
            <div className="flex flex-wrap items-center md:justify-between justify-center">
              <div className="w-full md:w-auto text-center md:text-left mb-4 md:mb-0">
                <p className="text-sm text-gray-400">
                  &copy; {new Date().getFullYear()} EvergreenObits. All Rights Reserved.
                </p>
              </div>
              <div className="w-full md:w-auto text-center md:text-right">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a href="#" className="text-gray-400 hover:text-gray-500 text-sm font-semibold block py-2 pl-3 pr-4 rounded">
                      Facebook
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="text-gray-400 hover:text-gray-500 text-sm font-semibold block py-2 pl-3 pr-4 rounded">
                      Twitter
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="text-gray-400 hover:text-gray-500 text-sm font-semibold block py-2 pl-3 pr-4 rounded">
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      );
    };

export default Footer