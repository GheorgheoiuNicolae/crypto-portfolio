import * as React from 'react';
import * as moment from 'moment';
import { StateProps, DispatchProps, OwnProps } from './_balances';
import AddBalance from './addBalance';
import RaisedButton from 'material-ui/RaisedButton';
import Add from 'material-ui/svg-icons/content/add';
import {  Flex } from 'grid-styled';
// icons
// import DashboardIcon from 'material-ui/svg-icons/action/dashboard';

export type Props = StateProps & OwnProps & DispatchProps;

export default class Balances extends React.PureComponent<Props, {}> {
  render() {
    const { showModal, balances } = this.props;
    return (
      <div className="Balances">
        <h1>Balance</h1>

        <RaisedButton
          style={{color: '#fff'}}
          primary={true}
          label="Add Balance"
          labelPosition="after"
          onTouchTap={() => showModal('addBalance')}
          icon={<Add />}
        />

        {/* Totals: All added balances + All transactions of a single coin */}
        <Flex className="total-balances">
          {balances && balances.map((balance: any) => {
            return (
              <Flex className="balance" key={balance.id}>
                <img src={`https://chasing-coins.com/api/v1/std/logo/${balance.currency}`} alt=""/>
                <h4>{balance.currency} - {balance.amount} - {balance.storedIn}</h4>
                <span>{moment(balance.createdAt).format('DD.MM.YYYY hh:mm')}</span>
              </Flex>
            );
          })}
        </Flex>
        
        {/* Existing balances added by the user */}
        <Flex className="added-balances">
          {balances && balances.map((balance: any) => {
            return (
              <Flex className="balance" key={balance.id}>
                <img src={`https://chasing-coins.com/api/v1/std/logo/${balance.currency}`} alt=""/>
                <h4>{balance.currency} - {balance.amount} - {balance.storedIn}</h4>
                <span>{moment(balance.createdAt).format('DD.MM.YYYY hh:mm')}</span>
              </Flex>
            );
          })}
        </Flex>
        <AddBalance />
      </div>
    );
  }
}
