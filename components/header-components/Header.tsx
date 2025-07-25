import { ChevronDownIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import HeaderMegaMenu from "./header-mega-menu";

export function Header() {
  return (
    <header className="bg-background border-b z-30 sticky top-0 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              <Image
                src="/logo.svg"
                alt="ایران اکسچنج"
                width={130}
                height={130}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-8">
            <Link
              href="/"
              className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
            >
              خانه
            </Link>

            <div className="relative group">
              <div className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium flex items-center gap-2 cursor-pointer">
                رمز ارزها
                <ChevronDownIcon className="w-4 h-4" />
              </div>

              {/* Mega menu ------------------------------- */}
              <HeaderMegaMenu />
            </div>

            <Link
              href="/services"
              className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
            >
              خدمات
            </Link>
          </div>

          {/* Mobile menu button and hamburger menu (CSS-only solution) */}
          <div className="sm:hidden flex items-center">
            {/* Hamburger menu using CSS only */}
            <input type="checkbox" id="hamburger" className="hidden peer" />
            <label
              htmlFor="hamburger"
              className="p-2 rounded-md text-gray-500 hover:bg-gray-100 focus:outline-none cursor-pointer"
            >
              <span className="block w-6 h-0.5 bg-gray-600 mb-1.5"></span>
              <span className="block w-6 h-0.5 bg-gray-600 mb-1.5"></span>
              <span className="block w-6 h-0.5 bg-gray-600"></span>
            </label>

            {/* Mobile menu */}
            <div className="hidden absolute top-16 left-0 right-0 bg-white/80 backdrop-blur-md shadow-md peer-checked:block z-50">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link
                  href="/"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                >
                  Home
                </Link>

                {/* Mobile Crypto dropdown with accordion-like behavior */}
                <div className="block px-3 py-2">
                  <input
                    type="checkbox"
                    id="mobile-crypto-menu"
                    className="hidden peer"
                  />
                  <label
                    htmlFor="mobile-crypto-menu"
                    className="flex justify-between items-center text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md cursor-pointer"
                  >
                    About
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </label>

                  <div className="hidden mt-2 pl-4 peer-checked:block">
                    <ul className="space-y-2">
                      <li>
                        <Link
                          href="/crypto/bitcoin"
                          className="block text-sm text-gray-600 hover:text-blue-600"
                        >
                          Bitcoin (BTC)
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/crypto/ethereum"
                          className="block text-sm text-gray-600 hover:text-blue-600"
                        >
                          Ethereum (ETH)
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/crypto/all"
                          className="block text-sm font-medium text-gray-600 hover:text-blue-600"
                        >
                          View All Cryptocurrencies
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <Link
                  href="/services"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                >
                  Services
                </Link>
                <Link
                  href="/contact"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
