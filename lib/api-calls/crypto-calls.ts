import { cryptoRouts } from "../api-routs/crypto.routs";
import { nextFetcher } from "../next-fether";

export const getCryptoList = async (sortType: string) => {
  try {
    const data = await nextFetcher({
      url: sortType
        ? cryptoRouts.list(false, 1, "createdAt", sortType)
        : cryptoRouts.list(),
      method: "GET",
      revalidate: sortType ? 0 : undefined,
    });
    return data;
  } catch (error) {
    throw new Error("خطا در دریافت اطلاعات");
  }
};
