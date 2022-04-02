import React from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ExpensesForm extends React.Component {
  render() {
    const { currencies } = this.props;
    return (
      <div>
        <label htmlFor="valor">
          Valor:
          <input
            data-testid="value-input"
            name="valor"
            type="number"
          />
        </label>
        <label htmlFor="moeda">
          Moeda:
          <select
            data-testid="currency-input"
            id="moeda"
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
        <label htmlFor="pagamento">
          Pagamento:
          <select
            data-testid="method-input"
            name="pagamento"
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="categoria">
          Categoria:
          <select
            data-testid="tag-input"
            name="categoria"
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <label htmlFor="descricao">
          Descrição:
          <input
            data-testid="description-input"
            name="descricao"
            type="text"
          />
        </label>
      </div>
    );
  }
}

ExpensesForm.propTypes = {
  currencies: PropTypes.array,
}.isRequired;

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps, null)(ExpensesForm);
