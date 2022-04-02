import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Header from '../Componente/Header';
import { fecthAPI } from '../actions';
import ExpensesForm from '../Componente/ExpensesForm';
import Table from '../Componente/TableExpenses';

class Wallet extends React.Component {
  componentDidMount() {
    const { currencies } = this.props;
    currencies();
  }

  render() {
    return (
      <div>
        <Header />
        <ExpensesForm />
        <Table />
      </div>
    );
  }
}

Wallet.propTypes = {
  currencies: PropTypes.array,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  currencies: () => dispatch(fecthAPI()),
});

export default connect(null, mapDispatchToProps)(Wallet);
