import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  TrendingUpIcon,
  BarChartIcon,
  CoinsIcon,
  WalletIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ZapIcon,
  ShieldIcon,
} from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-background/90 to-background pt-12 md:pt-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Background elements */}
        <div className="absolute top-20 right-[10%] w-48 h-48 md:w-72 md:h-72 rounded-full bg-blue-500/30 blur-3xl"></div>
        <div className="absolute bottom-40 left-[5%] w-48 h-48 md:w-72 md:h-72 rounded-full bg-blue-500/30 blur-3xl"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden opacity-60 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
          {/* Text Content */}
          <div className="space-y-4 md:space-y-6">
            <Badge
              variant="outline"
              className="px-3 md:px-4 py-1 border-primary/40 bg-primary/5 text-primary text-xs md:text-sm"
            >
              ارز دیجیتال • بلاکچین • سرمایه‌گذاری
            </Badge>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="block text-4xl md:text-5xl text-foreground font-black">
                پلتفرم ارز دیجیتال رمزارز
              </span>
              <span className="block text-primary font-extrabold mt-2"></span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground max-w-md">
              معامله، سرمایه‌گذاری و مدیریت ارزهای دیجیتال با پیشرفته‌ترین
              ابزارها و بالاترین امنیت در پلتفرم رمزارز
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button size="lg" className="gap-2 w-full w-full sm:w-[200px]">
                شروع معامله <ArrowRightIcon className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="w-full w-full sm:w-[200px]">
                آموزش رمزارز
              </Button>
            </div>

            <div className="pt-4 md:pt-6 flex flex-col xs:flex-row items-start xs:items-center gap-3 xs:gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="h-5 w-5 text-primary" />
                <span>کارمزد پایین</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="h-5 w-5 text-primary" />
                <span>پشتیبانی ۲۴/۷</span>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative flex justify-center mt-10 md:mt-0">
            <div className="relative w-full max-w-[280px] md:max-w-lg aspect-square">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 md:w-64 md:h-64 rounded-full bg-primary/10 animate-pulse"></div>
              </div>

              {/* Feature cards - repositioned for better balance */}
              <Card className="absolute top-0 left-0 md:left-10 p-3 md:p-4 flex items-center gap-2 md:gap-3 shadow-lg w-40 md:w-48 border-primary/10 bg-card/95 backdrop-blur-sm">
                <div className="rounded-full p-1.5 md:p-2 bg-primary/10">
                  <CoinsIcon className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm md:text-base font-medium">تنوع ارزها</h3>
                  <p className="text-[10px] md:text-xs text-muted-foreground">
                    بیش از ۱۰۰ ارز دیجیتال
                  </p>
                </div>
              </Card>

              <Card className="absolute bottom-0 md:bottom-10 right-0 md:right-30 p-3 md:p-4 flex items-center gap-2 md:gap-3 shadow-lg w-40 md:w-48 border-primary/10 bg-card/95 backdrop-blur-sm">
                <div className="rounded-full p-1.5 md:p-2 bg-primary/10">
                  <TrendingUpIcon className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm md:text-base font-medium">تحلیل بازار</h3>
                  <p className="text-[10px] md:text-xs text-muted-foreground">
                    ابزارهای پیشرفته تحلیلی
                  </p>
                </div>
              </Card>

              <Card className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-5 p-3 md:p-4 flex items-center gap-2 md:gap-3 shadow-lg w-40 md:w-48 border-primary/10 bg-card/95 backdrop-blur-sm">
                <div className="rounded-full p-1.5 md:p-2 bg-primary/10">
                  <WalletIcon className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm md:text-base font-medium">کیف پول امن</h3>
                  <p className="text-[10px] md:text-xs text-muted-foreground">
                    ذخیره‌سازی مطمئن
                  </p>
                </div>
              </Card>

              <Card className="absolute bottom-1/2 translate-y-1/2 left-0 md:-left-5 p-3 md:p-4 flex items-center gap-2 md:gap-3 shadow-lg w-40 md:w-48 border-primary/10 bg-card/95 backdrop-blur-sm">
                <div className="rounded-full p-1.5 md:p-2 bg-primary/10">
                  <ZapIcon className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm md:text-base font-medium">معاملات آنی</h3>
                  <p className="text-[10px] md:text-xs text-muted-foreground">
                    سرعت بالا در تراکنش‌ها
                  </p>
                </div>
              </Card>

              {/* Center Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="rounded-full bg-background p-3 md:p-5 shadow-xl border border-primary/20">
                  <BarChartIcon className="h-8 w-8 md:h-12 md:w-12 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
