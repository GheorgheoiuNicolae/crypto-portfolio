export const parseCoinData = (raw: any) => {
  let bySymbol: any = {};
  for(let i = 0; i < raw.length; i++ ) {
    bySymbol[raw[i].symbol] = raw[i];
  }

  console.log('bySymbol', bySymbol);
  return bySymbol;
};

export const reduceCoinData = (raw: any) => {
  let reduced: any = [];
  for(let i = 0; i < raw.length; i++ ) {
    // bySymbol[raw[i].symbol] = raw[i];
    reduced.push({
      name: raw[i].name,
      price_usd: raw[i].price_usd,
      symbol: raw[i].symbol,
      rank: raw[i].rank
    });
  }

  console.log('reduced', reduced);
  return reduced;
};
