import * as React from 'react';
import {
  TextField,
} from 'redux-form-material-ui';
import { Dialog, FlatButton, RaisedButton } from 'material-ui';
import { Field } from 'redux-form';
import styled from 'styled-components';
import { StateProps, DispatchProps, OwnProps } from './_addBalance';
import { Box, Flex } from 'grid-styled';
import Close from 'material-ui/svg-icons/navigation/close';

export type Props = StateProps & OwnProps & DispatchProps;
interface OtherProps {
  anchorEl: any;
}

export default class AddBalanceForm extends React.PureComponent<Props, OtherProps> {
  handleSubmit = (values: any) => {
    const {
      createBalance,
      auth,
      resetForm,
      hideModal,
      portfolio,
    } = this.props;

    values.createdAt = new Date(values.createdAt).getTime();

    createBalance(auth.user.uid, portfolio[0].id, values);
    hideModal('addBalance');
    resetForm('addBalance');
  }

  closeModal = (modalName: string) => {
    const { hideModal } = this.props;
    hideModal(modalName);
  }

  render () {
    const {
      handleSubmit,
      showAddBalanceModal,
    } = this.props;
    return (
      <Dialog
        modal={true}
        open={showAddBalanceModal}
        onRequestClose={() => this.closeModal('addBalance')}
        autoScrollBodyContent={true}
        bodyStyle={{padding: '0'}}
      >
        <form onSubmit={handleSubmit(this.handleSubmit.bind(this))}>
          <ModalHeader className="modal-header">
            <h5 className="h5">Add existing balance</h5>
            <Close className="close-icon" onClick={() => this.closeModal('addBalance')} />
          </ModalHeader>
          <Flex className="modal-content">
            <Box width={1} p={20}>
              <InputWrap>
                <Field
                  component={TextField}
                  floatingLabelFixed={true}
                  floatingLabelText={'Currency'}
                  fullWidth={true}
                  name={'currency'}
                  className="input-wrapper input"
                  autoFocus={true}
                />
              </InputWrap>
            </Box>
            <Box width={1} p={20}>
              <InputWrap>
                <Field
                  component={TextField}
                  floatingLabelFixed={true}
                  floatingLabelText={'Amount'}
                  fullWidth={true}
                  name={'amount'}
                  className="input-wrapper input"
                  autoFocus={true}
                />
              </InputWrap>
            </Box>
            <Box width={1} p={20}>
              <InputWrap>
                <Field
                  component={TextField}
                  floatingLabelFixed={true}
                  floatingLabelText={'Stored in'}
                  fullWidth={true}
                  name={'storedIn'}
                  className="input-wrapper input"
                  autoFocus={true}
                />
              </InputWrap>
            </Box>
          </Flex>
          <ModalFooter>
            <FlatButton
              label="Cancel"
              primary={false}
              onClick={() => this.closeModal('addBalance')}
              style={{margin: '10px 10px 0 0'}}
            />
            <RaisedButton
              label="Add"
              secondary={true}
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
const ModalHeader = styled.div`
  display: flex;
  justify-content: center;
  color: #6b7c93;
  text-align: center;
  border-bottom: 1px solid #f7f7f7;
`;
const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  color: #6b7c93;
  text-align: center;
  border-top: 1px solid #f7f7f7;
  margin-bottom: 10px;
`;