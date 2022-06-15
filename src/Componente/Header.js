import React from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Header.css';

class Header extends React.Component {
  render() {
    const { email, expenses } = this.props;
    const conversion = expenses.length === 0 ? 0 : expenses.map(
      (object) => object.exchangeRates[object.currency].ask * object.value,
    ).reduce((prev, acc) => Number(prev) + Number(acc), 0).toFixed(2);
    return (
      <div className="header-container">
        <header>
          <label className="label-email" htmlFor="email">
            Email:
            <p className="email" id="email" data-testid="email-field">
              {email}
            </p>
          </label>
          <div className="container-total-expenses">
            Despesa total:
            <p
              className="total-field"
              data-testid="total-field"
              name="despesa-total"
            >
              {conversion}
            </p>
          </div>
          <div className="header-currency-field-container">
            <p data-testid="header-currency-field">BRL</p>
          </div>
        </header>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string,
  expenses: PropTypes.object,
}.isRequired;

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Header);
