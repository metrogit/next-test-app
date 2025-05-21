"use client";
import { useEffect, useState, useRef } from "react";
import { UserCircle, LogOut, User, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Link from "next/link";
import { toast } from "sonner";

export default function UserStatus() {
  const [userName, setUserName] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const router = useRouter();

  useEffect(() => {
    // Get user name from cookies
    const fullName = Cookies.get("user_fullname");
    const firstName = Cookies.get("user_firstname");
    setUserName(fullName || firstName || "کاربر");
  }, []);

  useEffect(() => {
    // Handle click outside to close dropdown
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      )
        setIsOpen(false);
    }

    // Events for the dropdown
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const handleLogout = async () => {
    setIsLoading(true);
    // Logout request
    try {
      const response = await fetch("/api/logout", {
        method: "POST",
      });
      if (response.ok) {
        router.push("/");
        router.refresh();
      }
    } catch (error) {
      toast.error("خروج از حساب کاربری با خطا مواجه شد");
      console.error("Logout failed:", error);
    } finally {
      setIsLoading(false);
      setIsOpen(false);
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className="flex items-center gap-2 border rounded p-2 rounded-md px-3 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <UserCircle className="h-5 w-5" />
        <span className="text-sm font-medium">{userName}</span>
      </div>

      {isOpen && (
        <div className="absolute top-full flex flex-col gap-2 right-0 bg-white shadow-sm rounded-md p-2 w-full mt-1 border">
          <Link
            href="/profile"
            className="text-sm font-medium flex gap-1 items-center cursor-pointer p-2 rounded-md  cursor-pointer hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            <User className="size-4" />
            <span>پروفایل</span>
          </Link>

          <button
            onClick={handleLogout}
            className="text-sm font-medium flex gap-1 items-center text-red-500 cursor-pointer p-2 rounded-md hover:bg-gray-100"
          >
            <LogOut className="size-4" />
            <span>خروج</span>
            {isLoading && <Loader2 className="size-4 animate-spin" />}
          </button>
        </div>
      )}
    </div>
  );
}
