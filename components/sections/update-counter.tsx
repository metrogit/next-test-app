"use client";

import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";

const UpdateCounter = () => {
  const [count, setCount] = useState(300);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount <= 1) {
          return 300;
        }
        return prevCount - 1;
      });
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const minutes = Math.floor(count / 60);
  const seconds = count % 60;
  const displayTime = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

  return (
    <div>
      <Badge className="text-xs py-1 px-4">
        <div className="w-2 h-2 bg-green-500 rounded-full ml-1">
          <div className="w-2 h-2 origin-center scale-120 bg-green-500 rounded-full animate-ping" />
        </div>
        {displayTime} تا آپدیت بعدی
      </Badge>
    </div>
  );
};

export default UpdateCounter;
