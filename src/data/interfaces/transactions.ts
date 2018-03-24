interface Transaction {
  currencyBought: string;
  currencySold: string;
  amount: number;
  price: number;
  date: number; // user selects this date
  createdAt: number; // timestamp at time of creation
  paymentMode: 'Total paid' | 'Paid per coin'; // Total paid | Paid per coin
  storagePlace: string;
  type: 'Buy / Sell' | 'Transfer' | 'Cash in' | 'Cash out'; // Add, transfer, withdraw
  comment: string;
  portfolioId: string;
}

export default Transaction;