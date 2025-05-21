import { cryptoRouts } from "../api-routs/crypto.routs";
import { apiFetcher } from "../api-fetcher";

export const getCryptoList = async (sortType: string) => {
  try {
    const data = await apiFetcher(
      sortType
        ? cryptoRouts.list(false, 1, "createdAt", sortType)
        : cryptoRouts.list(),
      {
        method: "GET",
      }
    );
    return data;
  } catch (error) {
    throw new Error("خطا در دریافت اطلاعات");
  }
};

