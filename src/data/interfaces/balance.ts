interface Balance {
  amount: number;
  symbol: string;
  createdAt: number; // timestamp
  storedIn: string; // Exchange Name || wallet,
  portfolioId: string;
}

export default Balance;