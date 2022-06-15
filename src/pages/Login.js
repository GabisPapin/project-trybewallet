import React from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { action } from '../actions/index';
import './Login.css';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      isDisabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.validateLogin = this.validateLogin.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => this.validateLogin());
  }

  validateLogin() {
    const { email, password } = this.state;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const minNumber = 6;
    if (emailRegex.test(email) && password.length >= minNumber) {
      this.setState({
        isDisabled: false,
      });
    } else {
      this.setState({
        isDisabled: true,
      });
    }
  }

  handleClick(event) {
    event.preventDefault();
    const { addUser, history } = this.props;
    const { email } = this.state;
    addUser(email);
    history.push('/carteira');
  }

  render() {
    const { email, password, isDisabled } = this.state;
    return (
      <div className="login">
        <form>
          <div className="login-title">
            <h3 className="login-h3">TrybeWallet</h3>
          </div>
          <input
            data-testid="email-input"
            className="input-login"
            id="email"
            type="email"
            placeholder="email"
            value={ email }
            name="email"
            onChange={ this.handleChange }
          />
          <input
            data-testid="password-input"
            className="input-login"
            id="password"
            type="password"
            placeholder="senha"
            value={ password }
            name="password"
            onChange={ this.handleChange }
          />
          <button
            className="button-login"
            type="submit"
            disabled={ isDisabled }
            onClick={ this.handleClick }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addUser: (email) => dispatch(action(email)),
});

Login.propTypes = {
  addUser: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
