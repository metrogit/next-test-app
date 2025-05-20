import { CryptoCoin } from "@/lib/types/cryptocoins";
import { ArrowDownIcon, ArrowUpIcon, CircleDollarSignIcon } from "lucide-react";

const CryptoStatusCard = ({ cryptoCoin }: { cryptoCoin: CryptoCoin }) => {
  const isPositiveChange = cryptoCoin.dailyChangePercent >= 0;

  return (
    <div className="border p-2 py-4 rounded-lg px-4 hover:bg-gray-50 cursor-pointer relative z-20">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <img
            src={cryptoCoin.logo}
            alt={cryptoCoin.name}
            className="size-10 rounded-full"
          />
          <div className="flex flex-col gap-1">
            <h1 className="font-medium">{cryptoCoin.name}</h1>
            <div className="flex items-center gap-1">
              <p className="text-sm text-gray-500 text-xs">{cryptoCoin.symbol}</p>
              <p className="text-sm text-gray-500 text-xs">({cryptoCoin.fa_name})</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end gap-1">
          <div className="flex gap-1 items-center">
            <CircleDollarSignIcon className="size-4 text-gray-500" />
            <p className="text-sm text-gray-500 text-xs">قیمت به دلار</p>
          </div>
          <p className="text-sm font-bold text-xs">{cryptoCoin.dollar_price}</p>
          <div className={`flex items-center gap-1 ${isPositiveChange ? 'text-green-500' : 'text-red-500'}`}>
            {isPositiveChange ? <ArrowUpIcon className="size-3" /> : <ArrowDownIcon className="size-3" />}
            <p className="text-xs font-medium">{Math.abs(cryptoCoin.dailyChangePercent).toFixed(2)}%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoStatusCard;
