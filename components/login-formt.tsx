"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FloatingLabelInput } from "@/components/ui/floating-label-input";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Eye, EyeOff } from "lucide-react";

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.currentTarget);
    const mobile = formData.get("mobile") as string;
    const password = formData.get("password") as string;

    try {
      const result = await signIn("credentials", {
        mobile,
        password,
        redirect: false,
      });

      if (result?.error) {
        if (result.error.includes("نام کاربری یا کلمه عبور") || 
            result.error.includes("WRONG_CREDENTIALS")) {
          toast.error("نام کاربری یا کلمه عبور (پسورد) شما صحیح نمی باشد.");
        } else {
          toast.error(result.error);
        }
      } else if (result?.ok) {
        toast.success("ورود موفقیت‌آمیز");
        router.push("/");
      }
    } catch (error) {
      toast.error("خطایی رخ داد. لطفا مجددا تلاش کنید");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">ورود به سامانه</CardTitle>
          <CardDescription>
            برای ورود لطفا شماره همراه خود را وارد کنید{" "}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <FloatingLabelInput
                  className="h-12 text-right"
                  id="mobile"
                  name="mobile"
                  type="text"
                  label="شماره همراه"
                  required
                />
                <div className="relative">
                  <FloatingLabelInput
                    className="h-12 text-right"
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    label="رمز عبور"
                    required
                  />
                  <button
                    type="button"
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
              <Button type="submit" className="w-full h-10 cursor-pointer" disabled={isLoading}>
                {isLoading ? "در حال ورود..." : "ورود"}
              </Button>
            </div>
            <div className="mt-4 text-center text-xs">
              اگر اکانت ندارین با یکی هماهنگ کنید منم اطلاع ندارم
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
