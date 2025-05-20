import Link from "next/link";

const TableSwitcher = ({ sortType }: { sortType: string }) => {
  return (
    <div className="flex items-center gap-4 relative z-20">
      <Link
        href="/"
        className={`font-medium ${
          !sortType || (sortType !== "CreatedAt" && sortType !== "qvwr")
            ? "text-blue-700 border-b-2 border-blue-700 pb-1"
            : "text-black"
        }`}
        scroll={false}
      >
        همه‌ارزها
      </Link>
      <Link
        href="/?type=CreatedAt"
        className={`font-medium ${
          sortType === "CreatedAt" ? "text-blue-700 border-b-2 border-blue-700 pb-1" : "text-black"
        }`}
        scroll={false}
      >
        پرسود‌ترین
      </Link>
      <Link
        href="/?type=qvwr"
        className={`font-medium ${
          sortType === "qvwr" ? "text-blue-700 border-b-2 border-blue-700 pb-1" : "text-black"
        }`}
        scroll={false}
      >
        ضررده‌ترین
      </Link>
    </div>
  );
};

export default TableSwitcher;
