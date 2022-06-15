import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionDelete, actionEdit } from '../actions';
import './TableExpenses.css';

class Table extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
      isValid: false,
    };
  }

  handleClick = ({ target }) => {
    const { expenses, dispatch } = this.props;
    const del = expenses.filter((item) => item.id !== Number(target.id));
    dispatch(actionDelete(del));
  }

  handleEdit = (id) => {
    const { dispatch } = this.props;
    dispatch(actionEdit(id));
  }

  render() {
    const { expenses } = this.props;
    const { value, currency, method, tag, description, isValid } = this.state;
    return (
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            { isValid
              ? (
                <tr>
                  <td>{ description }</td>
                  <td>{ tag }</td>
                  <td>{ method }</td>
                  <td>{ value }</td>
                  <td>{ currency }</td>
                </tr>)
              : (expenses.map((object) => (
                <tr key={ object.id }>
                  <td>{ object.description }</td>
                  <td>{ object.tag }</td>
                  <td>{ object.method }</td>
                  <td>{ Number(object.value).toFixed(2) }</td>
                  <td>{ object.exchangeRates[object.currency].name }</td>
                  <td>
                    { Number(object.exchangeRates[object.currency].ask).toFixed(2) }
                  </td>
                  <td>
                    {Number(object.value * object.exchangeRates[object.currency]
                      .ask).toFixed(2)}
                  </td>
                  <td>Real</td>
                  <td>
                    <button
                      data-testid="edit-btn"
                      type="button"
                      id={ object.id }
                      onClick={ () => this.handleEdit(object.id) }
                    >
                      Editar
                    </button>
                    <button
                      data-testid="delete-btn"
                      type="reset"
                      id={ object.id }
                      onClick={ this.handleClick }
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              )))}
          </tbody>
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.array,
  isValid: PropTypes.bool,
}.isRequired;

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);
