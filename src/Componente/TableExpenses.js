import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Table extends React.Component {
  render() {
    const { expenses } = this.props;
    return (
      <div>
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
            { expenses.map((object) => (
              <tr key={ object }>
                <td>{ object.description }</td>
                <td>{ object.tag }</td>
                <td>{ object.method }</td>
                <td>{ Number(object.value).toFixed(2) }</td>
                <td>{ object.exchangeRates[object.currency].name }</td>
                <td>{ Number(object.exchangeRates[object.currency].ask).toFixed(2) }</td>
                <td>
                  {Number(object.value * object.exchangeRates[object.currency]
                    .ask).toFixed(2) }

                </td>
                <td>Real</td>
                <td>
                  <button type="reset">Excluir</button>
                  <button type="button">Editar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.array,
}.isRequired;

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Table);
