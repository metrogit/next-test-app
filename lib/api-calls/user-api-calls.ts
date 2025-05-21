import { apiFetcher } from "../api-fetcher";
import { apiRouts } from "../api-routs";

export const getUserLoginStatus = async () => {
  try {
    const data = await apiFetcher(apiRouts.userRouts.userLoginStatus());
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("خطا در دریافت اطلاعات");
  }
};
