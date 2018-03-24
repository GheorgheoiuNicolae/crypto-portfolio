import * as React from 'react';
import { StateProps, DispatchProps, OwnProps } from './_portfolioStatus';

export type Props = StateProps & OwnProps & DispatchProps;
interface OwnState {
  totalEstimatedHoldings: number;
  currency: string;
  btcPrice: number;
}

export default class PortfolioStatus extends React.PureComponent<Props, OwnState> {
  constructor() {
    super();
    this.state = {
      totalEstimatedHoldings: 124000,
      currency: 'USD',
      btcPrice: 9800
    };
  }

  flipCurrency() {
    const { totalEstimatedHoldings, currency, btcPrice } = this.state;

    if(currency === 'USD') {
      this.setState({
        totalEstimatedHoldings: totalEstimatedHoldings / btcPrice,
        currency: 'BTC'
      });
    } else {
      this.setState({
        totalEstimatedHoldings: totalEstimatedHoldings * btcPrice,
        currency: 'USD'
      });
    }
  }

  render() {
    const { totalEstimatedHoldings, currency } = this.state;
    return (
      <article className="widget">
        <h1
          className="big"
          onClick={() => this.flipCurrency()}
          style={{marginTop: 0, marginBottom: 20, cursor: 'pointer'}}
        >
          <span>Total: </span>
          {currency === 'BTC' ? totalEstimatedHoldings.toFixed(8) : totalEstimatedHoldings.toFixed(2)}
          <span style={{fontSize: 18, color: '#a6abc9', marginLeft: 10}}>
            {currency}
          </span>
        </h1>
        <section className="portfolio-changes">
          <div className="block green">
            <span className="timescale">
              1 Day
            </span>
            <span className="percentage">
              12.93%
            </span>
            <span className="change">
              148.9 USD
            </span>
          </div>

          <div className="block red">
            <span className="timescale">
              1 Week
            </span>
            <span className="percentage">
              1.46%
            </span>
            <span className="change">
              22.4 USD
            </span>
          </div>

          <div className="block red">
            <span className="timescale">
              1 Month
            </span>
            <span className="percentage">
              -41%
            </span>
            <span className="change">
              -2187.9 USD
            </span>
          </div>
        </section>
      </article>
    );
  }
}
