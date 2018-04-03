import * as React from 'react';
// import * as moment from 'moment';
import { StateProps, DispatchProps, OwnProps } from './_balances';
import AddBalance from './addBalance';
import RaisedButton from 'material-ui/RaisedButton';
import Add from 'material-ui/svg-icons/content/add';
import { Box, Flex } from 'grid-styled';
// icons
// import DashboardIcon from 'material-ui/svg-icons/action/dashboard';

export type Props = StateProps & OwnProps & DispatchProps;

export default class Balances extends React.PureComponent<Props, {balances: any[]}> {
  componentWillMount() {
    this.setState({
      balances: [],
    });
  }

  componentWillReceiveProps(next: any) {
    console.log('componentWillReceiveProps');
    if( 
      next.balancesLoaded && next.transactionsLoaded) {
      // console.log('next: ', next);
      if(next.transactions.length !== this.props.transactions.length &&
        next.balances.lenght !== this.props.balances.length) {
          console.log('recalculate totals');
        }
      const { balances, transactions } = next;
      this.calculateTotals(balances, transactions);
    }
  }

  calculateTotals(balances: any[], transactions: any[]) {
    let userHoldings: any = {};
    balances.forEach((balance) => {
      if(!userHoldings[balance.currency]) {
        userHoldings[balance.currency] = {
          total: Number(balance.amount),
          balances: [
            balance
          ],
          transactions: []
        };
      } else {
        userHoldings[balance.currency] = {
          total: userHoldings[balance.currency].total + balance.amount,
          balances: [
            ...userHoldings[balance.currency].balances,
            balance
          ],
          transactions: []
        };
      }
    });

    transactions.forEach((t: any, i) => {
      console.log('transactions: ', transactions.length, i, transactions);
      // if the currencyBought is not already in userHoldings
      if(!userHoldings[t.currencyBought]) {
        userHoldings[t.currencyBought] = {
          total: 0,
          balances: [],
          transactions: [t]
        };
      } else {
        userHoldings[t.currencyBought].transactions.push(t);
      }
      // if the currencySold is not already in userHoldings
      if(!userHoldings[t.currencySold]) {
        userHoldings[t.currencySold] = {
          total: 0,
          balances: [],
          transactions: [t]
        };
      } else {
        userHoldings[t.currencySold].transactions.push(t);
      }

      if(t.paymentMode === 'Total paid') {
        userHoldings[t.currencyBought].total = userHoldings[t.currencyBought].total + t.amount;
        userHoldings[t.currencySold].total = userHoldings[t.currencySold].total - t.price;
      }
      if(t.paymentMode === 'Paid per coin') {
        userHoldings[t.currencyBought].total = userHoldings[t.currencyBought].total + t.amount;
        userHoldings[t.currencySold].total = userHoldings[t.currencySold].total - t.price * t.amount;
      }
    });

    this.setState({ balances: userHoldings });

    console.log('userHoldings: ', userHoldings);

  }

  render() {
    const { showModal } = this.props;
    const { balances } = this.state;
    return (
      <div className="Balances">
        <Box className="page-header">
          <Flex justify="space-between">
            <Box>
              <h1>Balances</h1>
            </Box>
            <Box>
              <RaisedButton
                style={{color: '#fff'}}
                primary={true}
                label="Add Balance"
                labelPosition="after"
                onTouchTap={() => showModal('addBalance')}
                icon={<Add />}
              />
            </Box>
          </Flex>
        </Box>

        {Object.keys(balances).map((key: any) => {
          console.log('key: ', key, balances[key]);
            return (
              <Box className="balance" key={key}>
                {/* <img src={`https://chasing-coins.com/api/v1/std/logo/${balance.currency}`} alt=""/> */}
                {/* <h4>{balance.currency} - {balance.amount} - {balance.storedIn}</h4> */}
                <span>{balances[key].total}</span>
              </Box>
            );
          }) }

        {/* Totals: All added balances + All transactions of a single coin */}
        {/* <Flex wrap={true} className="total-balances">
          {balances && balances.map((balance: any) => {
            return (
              <Box className="balance" key={balance.id}>
                <img src={`https://chasing-coins.com/api/v1/std/logo/${balance.currency}`} alt=""/>
                <h4>{balance.currency} - {balance.amount} - {balance.storedIn}</h4>
                <span>{moment(balance.createdAt).format('DD.MM.YYYY hh:mm')}</span>
              </Box>
            );
          })}
        </Flex> */}
        
        {/* Existing balances added by the user */}
        {/* <Flex className="added-balances">
          {balances && balances.map((balance: any) => {
            return (
              <Flex className="balance" key={balance.id}>
                <img src={`https://chasing-coins.com/api/v1/std/logo/${balance.currency}`} alt=""/>
                <h4>{balance.currency} - {balance.amount} - {balance.storedIn}</h4>
                <span>{moment(balance.createdAt).format('DD.MM.YYYY hh:mm')}</span>
              </Flex>
            );
          })}
        </Flex> */}
        <AddBalance />
      </div>
    );
  }
}
