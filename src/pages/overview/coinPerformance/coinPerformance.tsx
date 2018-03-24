import * as React from 'react';
import { StateProps, DispatchProps, OwnProps } from './_coinPerformance';

const btcIcon = require('../../../assets/coin-icons/btc.png');

export type Props = StateProps & OwnProps & DispatchProps;
interface OwnState {}

export default class CoinPerformance extends React.PureComponent<Props, OwnState> {
  constructor() {
    super();
  }

  render() {
    const { totals } = this.props;
    return (
      <article className="widget coin-performance">
        {totals.map((coin: any, i: number) => {
          return (
            <div key={i} className="list-item">
              <span className="rank">{i+1}</span>
              <img src={btcIcon} alt={coin.symbol} />
              <span className="details">
                {coin.symbol} {coin.amount}
              </span>
              <span
                className={`percent ${coin.amount * i / 1000 < 20 ? 'red' : 'green'}`}
              >
                {(coin.amount * i / 1000).toFixed(2)}%
              </span>
            </div>
          );
        })}
      </article>
    );
  }
}
