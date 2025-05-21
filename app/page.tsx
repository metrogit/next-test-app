import HeroSection from "@/components/sections/hero-section";
import CryptocurrencyListSection from "@/components/sections/crypro-section/cryptocurrency-list-section";
import TableSwitcher from "@/components/sections/crypro-section/table-switcher";
import UpdateCounter from "@/components/sections/update-counter";

import { Suspense } from "react";

// Skeleton Loading
import SkeletonLoading from "@/components/skeleton-loadings/crypto-list-skeleton-loading";
import Accordion from "@/components/faq/accordion";

export default async function Page(props: { searchParams: { type: string } }) {
  // Get the type from the search params
  const searchParams = await props.searchParams;
  const sortType = searchParams.type;

  return (
    <main className="relative overflow-x-hidden">
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

      <div className="flex flex-col w-full max-w-4xl mx-auto py-8 rounded-xl gap-5 my-10">
        <h2 className="text-2xl font-bold mb-2">سوالات متداول</h2>
        <Accordion
          faqData={{
            question: "بیت کوین چیست؟",
            answer: "بیت کوین یک ارز دیجیتال غیرمتمرکز است که در سال 2009 توسط فردی با نام مستعار ساتوشی ناکاموتو ایجاد شد. بیت کوین اولین و معروف‌ترین ارز دیجیتال است که از فناوری بلاکچین استفاده می‌کند.",
          }}
        />
        <Accordion
          faqData={{
            question: "چگونه می‌توانم ارز دیجیتال خریداری کنم؟",
            answer: "برای خرید ارز دیجیتال، ابتدا باید در یک صرافی ارز دیجیتال ثبت‌نام کنید، هویت خود را تأیید کنید، حساب خود را شارژ کنید و سپس سفارش خرید ارز مورد نظر خود را ثبت کنید.",
          }}
        />
        <Accordion
          faqData={{
            question: "کیف پول ارز دیجیتال چیست؟",
            answer: "کیف پول ارز دیجیتال یک ابزار نرم‌افزاری یا سخت‌افزاری است که برای ذخیره، ارسال و دریافت ارزهای دیجیتال استفاده می‌شود. کیف پول‌ها دارای کلیدهای خصوصی هستند که مالکیت شما بر ارزهای دیجیتال را تأیید می‌کنند.",
          }}
        />
      </div>
    </main>
  );
}
