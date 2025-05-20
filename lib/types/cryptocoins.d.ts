export interface CryptoCoinNetwork {
  network: string;
  name: string;
  addressRegex: string;
  coin: string;
  withdrawEnable: boolean;
  depositEnable: boolean;
  withdrawMin: string;
  withdrawMax: string;
  withdrawFee: string;
  sameAddress: boolean | number;
  memoRegex: string | null;
  tradeEnable: boolean;
}

export interface CryptoCoinQuotation {
  maxPrice: string;
  minPrice: string;
  dailyChangePercent: string;
}

export interface CryptoCoin {
  _id: string;
  name: string;
  fa_name: string;
  symbol: string;
  slug: string;
  is_sell_to_customer_active: number;
  is_fast_sell_to_customer_active: number;
  is_buy_from_customer_active: number;
  logo: string;
  dollar_price: number;
  sell_to_iranicard_currency_price: number;
  buy_from_iranicard_currency_price: number;
  fast_sell_to_iranicard_currency_price: number;
  buy_from_iranicard_network_list: CryptoCoinNetwork[];
  sell_to_iranicard_network_list: CryptoCoinNetwork[];
  is_price_maker_active: number;
  quotation: CryptoCoinQuotation;
  dailyChangePercent: number;
  order: number;
  stock_status: string;
  stock_label: string | null;
  stock_description: string | null;
}
