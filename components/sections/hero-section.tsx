import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { 
  LockIcon, ShieldIcon, KeyIcon, 
  CodeIcon, ArrowRightIcon, CheckCircleIcon 
} from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-background/90 to-background py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/30 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-secondary/30 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <Badge variant="outline" className="px-4 py-1 border-primary/40 bg-primary/5 text-primary">
              امنیت • حفاظت • رمزنگاری
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-4xl font-bold font-bold tracking-tight">
              <span className="block text-foreground">راهکار امنیتی</span>
              <span className="block text-primary font-extrabold mt-2">رمز نگار</span>
            </h1>
            
            <p className="text-sm text-muted-foreground max-w-md">
              راهکارهای پیشرفته رمزنگاری برای حفاظت از داده‌های حساس و تأمین امنیت سایبری برای سازمان شما
            </p>
            
            <div className="flex flex-wrap gap-3 pt-2">
              <Button size="lg" className="gap-2">
                شروع کنید <ArrowRightIcon className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                اطلاعات بیشتر
              </Button>
            </div>
            
            <div className="pt-6 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="h-5 w-5 text-primary" />
                <span>استاندارد امنیتی</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="h-5 w-5 text-primary" />
                <span>پشتیبانی ۲۴/۷</span>
              </div>
            </div>
          </div>
          
          {/* Visual Element */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-lg aspect-square">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full bg-primary/10 animate-pulse"></div>
              </div>
              
              {/* Feature cards */}
              <Card className="absolute top-10 left-0 p-4 flex items-center gap-3 shadow-lg w-48 border-primary/10 bg-card/95 backdrop-blur-sm">
                <div className="rounded-full p-2 bg-primary/10">
                  <LockIcon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">رمزنگاری قوی</h3>
                  <p className="text-xs text-muted-foreground">امنیت کامل داده‌ها</p>
                </div>
              </Card>
              
              <Card className="absolute bottom-10 right-0 p-4 flex items-center gap-3 shadow-lg w-48 border-primary/10 bg-card/95 backdrop-blur-sm">
                <div className="rounded-full p-2 bg-primary/10">
                  <ShieldIcon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">حفاظت پیشرفته</h3>
                  <p className="text-xs text-muted-foreground">دفاع در برابر تهدیدات</p>
                </div>
              </Card>
              
              <Card className="absolute top-1/2 right-12 transform -translate-y-1/2 p-4 flex items-center gap-3 shadow-lg w-48 border-primary/10 bg-card/95 backdrop-blur-sm">
                <div className="rounded-full p-2 bg-primary/10">
                  <KeyIcon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">مدیریت کلید</h3>
                  <p className="text-xs text-muted-foreground">کنترل دسترسی‌ها</p>
                </div>
              </Card>
              
              {/* Center Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="rounded-full bg-background p-5 shadow-xl border border-primary/20">
                  <CodeIcon className="h-12 w-12 text-primary" />
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