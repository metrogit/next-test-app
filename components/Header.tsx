import Link from "next/link";

export function Header() {
  return (
    <header className="bg-white shadow-sm z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              رمزنگار
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-8">
            <Link href="/" className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">
              خانه
            </Link>
            
            {/* Mega Menu - Crypto section */}
            <div className="relative group">
              <button className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium flex items-center">
                رمز ارزها
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              
              {/* Mega Menu Dropdown */}
              <div className="absolute left-0 mt-2 w-screen max-w-md bg-white/80 backdrop-blur-md shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300 z-50 transform origin-top-right">
                <div className="p-5 grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-800">ارزهای محبوب</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link href="/crypto/bitcoin" className="text-gray-600 hover:text-blue-600 block text-sm">
                          بیت کوین (BTC)
                        </Link>
                      </li>
                      <li>
                      <Link href="/crypto/bitcoin" className="text-gray-600 hover:text-blue-600 block text-sm">
                          بیت کوین (BTC)
                        </Link>
                      </li>
                      <li>
                      <Link href="/crypto/bitcoin" className="text-gray-600 hover:text-blue-600 block text-sm">
                          بیت کوین (BTC)
                        </Link>
                      </li>
                      <li>
                      <Link href="/crypto/bitcoin" className="text-gray-600 hover:text-blue-600 block text-sm">
                          بیت کوین (BTC)
                        </Link> 
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-800">دسته‌بندی‌ها</h3>
                    <ul className="space-y-2">
                      <li>
                      <Link href="/crypto/bitcoin" className="text-gray-600 hover:text-blue-600 block text-sm">
                          بیت کوین (BTC)
                        </Link>
                      </li>
                      <li>
                      <Link href="/crypto/bitcoin" className="text-gray-600 hover:text-blue-600 block text-sm">
                          بیت کوین (BTC)
                        </Link>
                      </li>
                      <li>
                      <Link href="/crypto/bitcoin" className="text-gray-600 hover:text-blue-600 block text-sm">
                          بیت کوین (BTC)
                        </Link>
                      </li>
                      <li>
                      <Link href="/crypto/bitcoin" className="text-gray-600 hover:text-blue-600 block text-sm">
                          بیت کوین (BTC)
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <Link href="/services" className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">
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
                <Link href="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">
                  Home
                </Link>
                
                {/* Mobile Crypto dropdown with accordion-like behavior */}
                <div className="block px-3 py-2">
                  <input type="checkbox" id="mobile-crypto-menu" className="hidden peer" />
                  <label htmlFor="mobile-crypto-menu" className="flex justify-between items-center text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md cursor-pointer">
                    About
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </label>
                  
                  <div className="hidden mt-2 pl-4 peer-checked:block">
                    <ul className="space-y-2">
                      <li>
                        <Link href="/crypto/bitcoin" className="block text-sm text-gray-600 hover:text-blue-600">
                          Bitcoin (BTC)
                        </Link>
                      </li>
                      <li>
                        <Link href="/crypto/ethereum" className="block text-sm text-gray-600 hover:text-blue-600">
                          Ethereum (ETH)
                        </Link>
                      </li>
                      <li>
                        <Link href="/crypto/all" className="block text-sm font-medium text-gray-600 hover:text-blue-600">
                          View All Cryptocurrencies
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <Link href="/services" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">
                  Services
                </Link>
                <Link href="/contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">
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