import React from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionExpense } from '../actions';

const Alimentacao = 'Alimentação';

class ExpensesForm extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: Alimentacao,
      description: '',
    };
  }

  onInputChange = ({ target }) => {
    const { id, value } = target;
    this.setState({
      [id]: value,
    });
  };

  handleClick = async () => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const json = await response.json();
    const { value, currency, method, tag, description } = this.state;
    const { expense, expenses } = this.props;
    const obj = {
      id: expenses.length,
      value,
      currency,
      method,
      tag,
      description,
      exchangeRates: json,
    };
    expense(obj);
    this.setState({
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: Alimentacao,
      description: '',
    });
  }

  render() {
    const { currencies } = this.props;
    const { value, currency, method, tag, description } = this.state;
    return (
      <div>
        <label htmlFor="value">
          Valor:
          <input
            data-testid="value-input"
            id="value"
            type="number"
            value={ value }
            onChange={ this.onInputChange }
          />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select
            data-testid="currency-input"
            id="currency"
            value={ currency }
            onChange={ this.onInputChange }
          >
            { currencies.map((currencie) => (
              <option
                key={ currencie }
                value={ currencie }
              >
                { currencie }
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="method">
          Pagamento:
          <select
            data-testid="method-input"
            id="method"
            value={ method }
            onChange={ this.onInputChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Categoria:
          <select
            data-testid="tag-input"
            id="tag"
            value={ tag }
            onChange={ this.onInputChange }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            data-testid="description-input"
            id="description"
            type="text"
            value={ description }
            onChange={ this.onInputChange }
          />
        </label>
        <button type="submit" onClick={ this.handleClick }>Adicionar despesa</button>
      </div>
    );
  }
}

ExpensesForm.propTypes = {
  currencies: PropTypes.array,
  expenses: PropTypes.array,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  expense: (value) => dispatch(actionExpense(value)),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesForm);
