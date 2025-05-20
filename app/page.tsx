import { Header } from "@/components/header-components/Header";
import HeroSection from "@/components/sections/hero-section";
import CryptocurrencyListSection from "@/components/sections/crypro-section/cryptocurrency-list-section";
import TableSwitcher from "@/components/sections/crypro-section/table-switcher";
import UpdateCounter from "@/components/sections/update-counter";

import { Suspense } from "react";

// Skeleton Loading
import SkeletonLoading from "@/components/skeleton-loadings/crypto-list-skeleton-loading";
import Accordion from "@/components/accordion";

export default async function Page(props: { searchParams: { type: string } }) {
  // Get the type from the search params
  const searchParams = await props.searchParams;
  const sortType = searchParams.type;

  return (
    <main className="relative overflow-x-hidden">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <HeroSection />
        <div className="flex justify-between items-center flex flex-col py-2 relative z-20">
          <h1 className="text-4xl font-black">لیست ارزها</h1>
          <p className="text-sm text-gray-500 pb-2">
            لیست موجودی ها و ارزهای معروف
          </p>
          <UpdateCounter />
        </div>
        {/* Table switcher */}
        <TableSwitcher sortType={sortType} />
        <Suspense key={sortType} fallback={<SkeletonLoading />}>
          <CryptocurrencyListSection sortType={sortType} />
        </Suspense>
        <Accordion />
      </div>
    </main>
  );
}
