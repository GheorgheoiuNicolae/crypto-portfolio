import * as React from 'react';
import * as moment from 'moment';
import { StateProps, DispatchProps, OwnProps } from './_transactions';
import RaisedButton from 'material-ui/RaisedButton';
import Add from 'material-ui/svg-icons/content/add';
import ArrowDownward from 'material-ui/svg-icons/navigation/arrow-downward';
import AddTransaction from './addTransaction';
import { Box, Flex } from 'grid-styled';
// import { Box, Flex } from 'grid-styled';
// icons
// import DashboardIcon from 'material-ui/svg-icons/action/dashboard';

export type Props = StateProps & OwnProps & DispatchProps;
type Own = {
  transactions: any[],
};

export default class Transactions extends React.PureComponent<Props, Own> {
  constructor() {
    super();
    this.state = {
      transactions: [{
        type: 'ADD',
        coinSold: 'BTC',
        coinBought: 'ETH',
        amountSold: 1.34,
        price: 8000,
        date: new Date(),
      }]
    };
  }
  render() {
    const { transactions, showModal } = this.props;
    return (
      <Flex className="Transactions" column={true}>
        <Box className="page-header">
          <Flex justify="space-between">
            <Box>
              <h1>Transactions</h1>
            </Box>
            <Box>
              <RaisedButton
                style={{color: '#fff'}}
                primary={true}
                label="Add Transaction"
                labelPosition="after"
                onTouchTap={() => showModal('addTransaction')}
                icon={<Add />}
              />
            </Box>
          </Flex>
        </Box>

        <div className="transactions table">
          <div className="table-row header">
            <div className="table-cell" >
              <b>Date</b>
            </div>
            <div className="table-cell" >
              <b>Type</b>
            </div>
            <div className="table-cell center" >
              <b>Currency pair</b>
            </div>
            <div className="table-cell center">
              <b>Amount</b>
            </div>
            <div className="table-cell" >
              <b>Exchange rate</b>
            </div>
            <div className="table-cell" >
              <b>Exchange</b>
            </div>
          </div>

          {transactions.map((t, i) => {
            return (
              <div key={i} className={`table-row ${i % 2 ? 'even' : 'odd'}`}>
                <div className="table-cell date" >
                  {moment(t.createdAt).format('DD.MM.YYYY hh:mm')}
                </div>
                <div className="table-cell type" >
                  {t.type}
                </div>

                <div className="table-cell currency-pair" >
                  <span>
                    {t.currencySold === 'USD'
                      ? ' $ '
                      : (<img src={`https://chasing-coins.com/api/v1/std/logo/${t.currencySold}`} alt=""/>)
                    }
                    {t.currencySold}
                  </span>
                  <ArrowDownward style={{width: '13px', height: '13px'}}/>
                  <span>
                    <img src={`https://chasing-coins.com/api/v1/std/logo/${t.currencyBought}`} alt=""/>
                    {t.currencyBought}
                  </span>
                </div>

                <div className="table-cell amount">
                  {t.pricePerUnit === 'true' ? (<div className="ppu">
                    <span>
                      {t.amount * t.price} {t.currencySold}
                    </span>
                    <ArrowDownward style={{width: '13px', height: '13px'}}/>
                    <span>
                      {t.amount}{t.currencyBought}
                    </span>
                  </div>)
                  : (<div className="ppt">
                    <span>
                      {t.price} {t.currencySold}
                    </span>
                    <ArrowDownward style={{width: '13px', height: '13px'}}/>
                    <span>
                      {t.amount}{t.currencyBought}
                    </span>
                  </div>)}
                </div>

                <div className="table-cell exchange-rate">
                  {t.paymentMode === 'Total paid'
                    ? (
                      <div className="ppu">
                        <span>{1 / t.amount * t.price} {t.currencySold}</span>
                        <ArrowDownward style={{width: '13px', height: '13px'}}/>
                        <span>1 {t.currencyBought}</span>
                      </div>
                    )
                    : (
                      <div className="ppt">
                        <span>{t.price}{t.currencySold}</span>
                        <ArrowDownward style={{width: '13px', height: '13px'}}/>
                        <span>1 {t.currencyBought}</span>
                      </div>
                    )
                  }
                </div>
                <div className="table-cell exchange" >
                  {t.storagePlace}
                </div>
              </div>
            );
          })}
        </div>
        <AddTransaction />
      </Flex>
    );
  }
}
