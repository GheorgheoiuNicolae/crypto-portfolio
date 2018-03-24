const filterTransactionsByTicker = ((transactions: any) => {
  const byTicker: any = {};

  transactions.forEach((transaction: any) => {
    if(byTicker[transaction.currencySold]) {
      byTicker[transaction.currencySold].push(transaction);
    } else {
      byTicker[transaction.currencySold] = [transaction];
    }

    if(byTicker[transaction.currencyBought]) {
      byTicker[transaction.currencyBought].push(transaction);
    } else {
      byTicker[transaction.currencyBought] = [transaction];
    }
  });

  return byTicker;
});

export {
  filterTransactionsByTicker
};
