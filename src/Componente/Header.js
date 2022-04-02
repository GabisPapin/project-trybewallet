import React from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { email, expenses } = this.props;
    const conversion = expenses.length === 0 ? 0 : expenses.map(
      (object) => object.exchangeRates[object.currency].ask * object.value,
    ).reduce((prev, acc) => Number(prev) + Number(acc), 0).toFixed(2);
    return (
      <div>
        <header>
          <label htmlFor="email">
            Email:
            <p id="email" data-testid="email-field">{email}</p>
          </label>
          <div>
            Despesa total:
            <p
              data-testid="total-field"
              name="despesa-total"
            >
              {conversion}
            </p>
          </div>
          <div>
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
