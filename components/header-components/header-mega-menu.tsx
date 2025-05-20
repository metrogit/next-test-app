import Link from "next/link";

const HeaderMegaMenu = () => {
  return (
    <div className="absolute border left-0 mt-2 w-screen max-w-md bg-white/20 backdrop-blur-md shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300 z-50 transform origin-top-right">
      <div className="p-5 grid grid-cols-2 gap-4">
        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-800">
            ارزهای محبوب
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/crypto/bitcoin"
                className="text-gray-600 hover:text-blue-600 block text-sm"
              >
                بیت کوین (BTC)
              </Link>
            </li>
            <li>
              <Link
                href="/crypto/bitcoin"
                className="text-gray-600 hover:text-blue-600 block text-sm"
              >
                بیت کوین (BTC)
              </Link>
            </li>
            <li>
              <Link
                href="/crypto/bitcoin"
                className="text-gray-600 hover:text-blue-600 block text-sm"
              >
                بیت کوین (BTC)
              </Link>
            </li>
            <li>
              <Link
                href="/crypto/bitcoin"
                className="text-gray-600 hover:text-blue-600 block text-sm"
              >
                بیت کوین (BTC)
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-800">
            دسته‌بندی‌ها
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/crypto/bitcoin"
                className="text-gray-600 hover:text-blue-600 block text-sm"
              >
                بیت کوین (BTC)
              </Link>
            </li>
            <li>
              <Link
                href="/crypto/bitcoin"
                className="text-gray-600 hover:text-blue-600 block text-sm"
              >
                بیت کوین (BTC)
              </Link>
            </li>
            <li>
              <Link
                href="/crypto/bitcoin"
                className="text-gray-600 hover:text-blue-600 block text-sm"
              >
                بیت کوین (BTC)
              </Link>
            </li>
            <li>
              <Link
                href="/crypto/bitcoin"
                className="text-gray-600 hover:text-blue-600 block text-sm"
              >
                بیت کوین (BTC)
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderMegaMenu;
