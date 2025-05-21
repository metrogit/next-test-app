"use client";

import { apiFetcher } from "@/lib/api-fetcher";
import { apiRouts } from "@/lib/api-routs";
import { useQuery } from "@tanstack/react-query";

export function UserProfile() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["user"],
    queryFn: () => apiFetcher(apiRouts.userRouts.userLoginStatus()),
  });

  console.log(error);
  console.log(isLoading);
  console.log(data);

  return (
    <div>
      <h1>User Profile</h1>
    </div>
  );
}
