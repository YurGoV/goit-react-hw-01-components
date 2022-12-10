import css from 'components/Transactions/TransactionHistory.module.css';
import PropTypes, { arrayOf } from 'prop-types';
import { TransactionItem } from '../TransactionItem/TransactionItem';

export const TransactionHistory = ({transactions}) => {
  return <table className={css.transactionHistory}>
    <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
    </thead>
    <tbody>
    {transactions.map(({id, type, amount, currency}) => (
      <TransactionItem
        key={id}
        type={type}
        amount={amount}
        currency={currency}
      />
    ))

    }
    </tbody>
  </table>
}


TransactionHistory.propTypes = {
 transactions: arrayOf(
   PropTypes.exact({
     id: PropTypes.string.isRequired,
     type: PropTypes.string,
     amount: PropTypes.string,
     currency: PropTypes.string,
   })
 )
}
