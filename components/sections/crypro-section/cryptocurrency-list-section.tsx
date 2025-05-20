import { CryptoCoin } from "@/lib/types/cryptocoins.d";
import CryptoStatusCard from "@/components/sections/crypro-section/crypto-status-card";
import { getCryptoList } from "@/lib/api-calls/crypto-calls";

export default async function CryptocurrencyListSection({
  sortType,
}: {
  sortType: string;
}) {
  
  // Server side data fetching and passing sortType to the table switcher
  const cryptoList = await getCryptoList(sortType);

  return (
    <section className="relative my-4">
      {/* Background element  */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-red-100 rounded-full z-10 blur-[100px]" />

      {/* Crypto list table */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
        {cryptoList?.data?.map((crypto: CryptoCoin) => (
          <div key={crypto._id} className="bg-white rounded-lg p-2">
            <CryptoStatusCard cryptoCoin={crypto} />
          </div>
        ))}
      </div>
    </section>
  );
}
