import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Header from '../Componente/Header';
import { fecthAPI } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fecthAPI());
  }

  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

Wallet.propTypes = {
  currencies: PropTypes.array,
}.isRequired;

// const mapDispatchToProps = (dispatch) => ({
//   currencies: dispatch(fecthAPI()),
// });

export default connect(null)(Wallet);
