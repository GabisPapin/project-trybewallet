import React from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        <header>
          <label htmlFor="email">
            Email:
            <p id="email" data-testid="email-field">{email}</p>
          </label>
          <div>
            Despesa total:
            <p name="despesa-total" data-testid="total-field">0</p>
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
}.isRequired;

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps, null)(Header);
