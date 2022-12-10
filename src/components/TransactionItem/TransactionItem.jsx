import PropTypes from 'prop-types';

export const TransactionItem = ({type, amount, currency}) => {
  return <tr>
    <td>{type}</td>
    <td>{amount}</td>
    <td>{currency}</td>
  </tr>
}

TransactionItem.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
}
