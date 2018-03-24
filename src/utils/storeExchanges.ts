import { firebaseDb } from '../firebase';

export const storeExchangesInFB = () => {
  // tslint:disable-next-line
  let exchangeList =  "Upbit || OKEx || Bithumb || Bitfinex || Huobi || GDAX || Kraken || Bittrex || HitBTC || Bitstamp || Coinone || bitFlyer || Poloniex || Bit-Z || Gemini || CoinEgg || Bits Blockchain || Korbit || Bitbank || EXX || Coinnest || ZB.COM || WEX || Bibox || Gate.io || Exmo || BTCC || Kucoin || Liqui || CoinsBank || AEX || CEX.IO || Livecoin || YoBit || Lbank || Coinbene || itBit || Bitcoin Indonesia || LakeBTC || Cryptopia || BTC Markets || BitBay || Bitinka || xBTCe || Tidex || Allcoin || Zaif || GetBTC || Koinex || BX Thailand || BtcTrade.im || Paribu || QuadrigaCX || Exrates || BigONE || C2CX || Luno || Negocie Coins || BTCTurk || Bitso || Neraex || TOPBTC || BitShares Asset Exchange || CoolCoin || Coinsquare || Coinrail || Vebitcoin || BTC-Alpha || CoinExchange || Coinroom || Coinfloor || RightBTC || DSX || Mr. Exchange || Quoine || Koineks || Bancor Network || Foxbit || Mercado Bitcoin || Gatehub || Independent Reserve || LiteBit.eu || AidosMarket || IDEX || Tidebit || Bitonic || Qryptos || BL3P || ChaoEX || OkCoin Intl. || QBTC || BitMarket || CoinEx || RippleFox || Altcoin Trader || Fatbtc || The Rock Trading || Lykke Exchange || Bitstamp (Ripple Gateway) || C-CEX || Coinut || Koinim || Stocks.Exchange || Ripple China || BitFlip || Simex || CryptoBridge || COSS || CoinMate || Waves Decentralized Exchange || OEX || BitcoinToYou || OpenLedger DEX || BitcoinTrade || Bitex.la || Abucoins || Trade By Trade || Bitsane || SurBTC || Fargobase || CoinFalcon || Trade Satoshi || TDAX || Stellar Decentralized Exchange || Bleutrade || SouthXchange || Kuna || Mercatox || Coinrate || Bittylicious || Gatecoin || Iquant || Bit2C || Coinlink || EtherDelta || Braziliex || Paymium || CryptoMarket || Token Store || Tripe Dice Exchange || Coinsecure || Bitmaszyna || OasisDEX || BitGrail || BTC Trade UA || Bitlish || ezBtc || Nocks || Radar Relay || Stronghold || Cryptox || InfinityCoin Exchange || BarterDEX || Cryptomate || Bisq || ETHEXIndia || OKCoin.cn || Coinhouse || Heat Wallet || Rfinex || ISX || BitKonan || BCEX || Rippex || Tux Exchange || alcurEX || Dgtmarket || FreiExchange || TradeOgre || Counterparty DEX || LocalTrade || Coingi || GuldenTrader || LEOxChange || ExcambrioRex || TCC Exchange || Ore.Bz || VirtacoinWorld || CoinCorner || NIX-E || Burst Asset Exchange || DC-Ex || Omni DEX || CryptoDerivatives";
  let arr: any = exchangeList.split(' || ');

  const exchangesArr: any = [];
  arr.forEach((exchange: any, i: any) => {
    exchangesArr.push({name: exchange, rank: 10 + i});
  });

  const binance = {
    name: 'Binance',
    rank: 1,
  };
  arr.push(binance);

  firebaseDb
    .ref()
    .child(`storagePlaces/global`)
    .push(exchangesArr);

  // exchangesRef.set(exchangesArr, function(error: any) {
  //   if(error) {
  //     console.log('could not save exchanges in db');
  //   } else {
  //     console.log('Exchange list successfully stored in db');
  //   }
  // });
};