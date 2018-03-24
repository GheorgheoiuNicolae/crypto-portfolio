import * as React from 'react';
import * as moment from 'moment';
import Transaction from '../../../data/interfaces/transactions';
import {
  TextField,
  DatePicker,
  // TimePicker
} from 'redux-form-material-ui';
import SelectField from 'material-ui/SelectField';
import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';
import { Dialog, FlatButton, RaisedButton } from 'material-ui';
import { Field } from 'redux-form';
import styled from 'styled-components';
import { StateProps, DispatchProps, OwnProps } from './_addTransaction';
import { Box, Flex } from 'grid-styled';
import Close from 'material-ui/svg-icons/navigation/close';

export type Props = StateProps & OwnProps & DispatchProps;

interface OtherProps {
  anchorEl: any;
  paymentMode: string;
  transactionType: string;
  storagePlace: string;
  currenciesBuy: any[];
  currenciesSell: any[];
  selectedBuyCurrency: string;
  selectedSellCurrency: string;
}

export default class AddTransactionForm extends React.PureComponent<Props, OtherProps> {
  componentWillMount() {
    this.setState({
      paymentMode: 'Total paid',
      currenciesBuy: [],
      currenciesSell: [],
    });
  }
  componentWillReceiveProps(next: any) {
    if(next.currencies.length !== this.props.currencies.length) {
      this.setState({
        currenciesBuy: next.currencies,
        currenciesSell: next.currencies,
      });
    }
  }

  handleSubmit = (values: any) => {
    const {
      createTransaction,
      auth,
      resetForm,
      hideModal,
      portfolio,
    } = this.props;
    const {
      paymentMode,
      transactionType,
      storagePlace,
      selectedBuyCurrency,
      selectedSellCurrency
    } = this.state;

    values.createdAt = new Date(values.createdAt).getTime();
    values.paymentMode = paymentMode;
    values.storagePlace = storagePlace;
    values.currencyBought = selectedBuyCurrency;
    values.currencySold = selectedSellCurrency;
    values.type = transactionType;
    values.amount = Number(values.amount);
    values.price = Number(values.price);

    const newTransaction: Transaction = {...values};
    console.log('newTransaction: ', newTransaction, this.state);

    createTransaction(auth.user.uid, portfolio[0].id, values);

    this.setState({
      currenciesBuy: this.props.currencies,
      currenciesSell: this.props.currencies
    });

    hideModal('addTransaction');
    resetForm('addTransaction');
  }

  handlePriceTypeChange = (e: any, i: any, value: any) => {
    this.setState({paymentMode: value});
  }

  handleStoragePlaceChange = (e: any, i: any, value: any) => {
    this.setState({storagePlace: value});
  }

  handleTransactionTypeChange= (e: any, i: any, value: any) => {
    this.setState({transactionType: value});
  }

  closeModal = (modalName: string) => {
    const { hideModal } = this.props;
    hideModal(modalName);
  }

  handleUpdateInput = (type: string, val: any) => {
    let filtered = this.filterSearchedCurrencies(this.props.currencies, val);
    if(type === 'buy') {
      this.setState({currenciesBuy: filtered});
    } else {
      this.setState({currenciesSell: filtered});
    }
  }

  selectedCurrency = (type: string, val: any) => {
    if(type === 'buy') {
      this.setState({selectedBuyCurrency: val.text});
    } else {
      this.setState({selectedSellCurrency: val.text});
    }
  }

  filterSearchedCurrencies(list: any[], searchText: string) {
    const st = searchText.toLowerCase();

    return list.filter((c: any) => {
      return c.symbol.toLowerCase().indexOf(st) !== -1 || c.name.toLowerCase().indexOf(st) !== -1;
    });
  }

  getCurrenciesList(side: string) {
    const {
      currenciesBuy,
      currenciesSell
    } = this.state;

    let list: any[] = [];
    if(side === 'buy') {
      list = currenciesBuy;
    } else {
      list = currenciesSell;
    }

    const currencyListElements: any = [];

    for(let i = 0; i < list.length; i++) {
      currencyListElements.push({
        text: `${list[i].symbol}`,
        value: (
          <MenuItem
            style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}
            className="currency-item"
            innerDivStyle={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}
          >
            <img
              src={`https://chasing-coins.com/api/v1/std/logo/${list[i].symbol}`}
              style={{maxWidth: 20, margin: 5}}
            />
            <span className="symbol">{list[i].symbol}</span>
            <span  className="name">{list[i].name}</span>
          </MenuItem>
        )
      });
    }

    return currencyListElements;
  }

  render () {
    const {
      handleSubmit,
      showAddTransactionModal,
      storagePlaces,
    } = this.props;

    return (
      <Dialog
        modal={true}
        open={showAddTransactionModal}
        onRequestClose={() => this.closeModal('addTransaction')}
        autoScrollBodyContent={true}
        bodyStyle={{padding: '0'}}
        className="addTransactionModal"
      >
        <form onSubmit={handleSubmit(this.handleSubmit.bind(this))}>
          <section className="modal-header">
            <h5>Add Transaction</h5>
            <div className="icon">
              <Close className="close-icon" onClick={() => this.closeModal('addTransaction')} />
            </div>
          </section>
          <section className="modal-content">
            <Flex wrap={true}>
              <Box width={[1/2, 1/2]} pl={20} pr={20}>
                <InputWrap>
                  <AutoComplete
                    floatingLabelText={'Asset bought'}
                    floatingLabelFixed={true}
                    hintText="Search"
                    searchText={''}
                    onUpdateInput={(val: any) => this.handleUpdateInput('buy', val)}
                    onNewRequest={(val: any) => this.selectedCurrency('buy', val)}
                    filter={AutoComplete.noFilter}
                    dataSource={this.getCurrenciesList('buy')}
                    openOnFocus={true}
                    dataSourceConfig={{ text: 'text', value: 'value',}}
                    maxSearchResults={50}
                    listStyle={{maxHeight: '300px', overflow: 'auto'}}
                  />
                </InputWrap>
              </Box>

              <Box width={[1/2, 1/2]} pl={20} pr={20}>
                <InputWrap>
                  <Field
                    component={TextField}
                    floatingLabelFixed={true}
                    floatingLabelText={'Amount'}
                    type="number"
                    fullWidth={true}
                    name={'amount'}
                    className="input-wrapper input"
                  />
                </InputWrap>
              </Box>
            </Flex>
            <Flex>
              <Box width={1} pl={20} pr={20}>
                <InputWrap>
                  <AutoComplete
                    floatingLabelText={'Asset sold'}
                    floatingLabelFixed={true}
                    hintText="Search"
                    searchText={''}
                    onUpdateInput={(val: any) => this.handleUpdateInput('sell', val)}
                    onNewRequest={(val: any) => this.selectedCurrency('sell', val)}
                    filter={AutoComplete.noFilter}
                    dataSource={this.getCurrenciesList('sell')}
                    openOnFocus={true}
                    dataSourceConfig={{ text: 'text', value: 'value',}}
                    maxSearchResults={50}
                    listStyle={{maxHeight: '300px', overflow: 'auto'}}
                  />
                </InputWrap>
              </Box>
              <Box width={1} pl={20} pr={20}>
                <InputWrap>
                  <Field
                    component={TextField}
                    floatingLabelFixed={true}
                    floatingLabelText={'Price'}
                    type="number"
                    fullWidth={true}
                    name={'price'}
                    className="input-wrapper input"
                  />
                </InputWrap>
              </Box>

              <Box width={1} pl={20} pr={20}>
                <SelectField
                  floatingLabelText={this.state.paymentMode}
                  value={this.state.paymentMode}
                  onChange={(e, index, value) => this.handlePriceTypeChange(e, index, value)}
                >
                  <MenuItem value={'Total paid'} primaryText="Total paid" />
                  <MenuItem value={'Paid per coin'} primaryText="Paid per coin" />
                </SelectField>
              </Box>
            </Flex>
            <Flex>
              <Box width={1} pl={20} pr={20}>
                <InputWrap>
                  <SelectField
                    floatingLabelText="Transaction type"
                    floatingLabelFixed={true}
                    value={this.state.transactionType}
                    onChange={(e, index, value) => this.handleTransactionTypeChange(e, index, value)}
                  >
                    <MenuItem value={'Buy/Sell'} primaryText="Buy / Sell" />
                    <MenuItem value={'Cash in'} primaryText="Cash in" />
                    <MenuItem value={'Cash out'} primaryText="Cash out" />
                    <MenuItem value={'Transfer'} primaryText="Transfer" />
                  </SelectField>
                </InputWrap>
              </Box>
              <Box width={1} pl={20} pr={20}>
                <InputWrap>
                  <Field
                    component={DatePicker}
                    floatingLabelFixed={true}
                    floatingLabelText={'Date'}
                    fullWidth={true}
                    name={`date`}
                    autoOk={true}
                    className="datepicker-wrapper input"
                    formatDate={(date: any) => moment(date).format('ll')}
                  />
                </InputWrap>
              </Box>
              <Box width={1} pl={20} pr={20}>
                <InputWrap>
                  <SelectField
                    floatingLabelText="Storage place"
                    floatingLabelFixed={true}
                    value={this.state.storagePlace}
                    onChange={(e, index, value) => this.handleStoragePlaceChange(e, index, value)}
                  >
                    {storagePlaces.exchanges.map((exchange: any, index: any) => {
                      return (<MenuItem key={index} value={exchange.name} primaryText={exchange.name} />);
                    })}
                  </SelectField>
                </InputWrap>
              </Box>
            </Flex>
            <Flex>
              <Box width={1} pl={20} pr={20}>
                <InputWrap>
                  <Field
                    component={TextField}
                    floatingLabelFixed={true}
                    floatingLabelText={'Comment'}
                    fullWidth={true}
                    name={'comment'}
                    className="input-wrapper input"
                  />
                </InputWrap>
              </Box>
            </Flex>
          </section>
          <ModalFooter>
            <FlatButton
              label="Cancel"
              primary={false}
              onClick={() => this.closeModal('addTransaction')}
              style={{margin: '10px 10px 0 0'}}
            />
            <RaisedButton
              label="Add"
              primary={true}
              className="successButton"
              onClick={handleSubmit(this.handleSubmit.bind(this))}
              style={{margin: '10px 10px 0 0'}}
            />
          </ModalFooter>
        </form>
      </Dialog>
    );
  }
}

const InputWrap = styled.div`
  margin-bottom: 10px;
  width: 100%;
`;
const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  color: #6b7c93;
  text-align: center;
  border-top: 1px solid #f7f7f7;
  margin-bottom: 10px;
`;