const hostApi = process.env.NEXT_PUBLIC_API_URL_COINS;


export const cryptoRouts = {
  list: (
    paginate?: boolean,
    page?: number,
    sort_key?: string,
    sort_type?: string,
    query?: string
  ) =>
    `https://main-api.ir-xe.com/api/public/modules/crypto/v1/client/listProduct?paginate=${paginate || true}&page=${page || 1}&sort_key=${sort_key || ''}&sort_type=${sort_type || ''}&query=${query || ''}`
};
