import Link from "next/link";

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              Logo
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-8">
            <Link href="/" className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">
              Home
            </Link>
            <Link href="/about" className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">
              About
            </Link>
            <Link href="/services" className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">
              Services
            </Link>
            <Link href="/contact" className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">
              Contact
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
            <div className="hidden absolute top-16 left-0 right-0 bg-white shadow-md peer-checked:block z-50">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link href="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">
                  Home
                </Link>
                <Link href="/about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">
                  About
                </Link>
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