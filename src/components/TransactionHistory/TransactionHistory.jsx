import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

function randomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export default function TransactionHistory({ transactions }) {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th style={{ backgroundColor: randomHexColor() }}>Type</th>
          <th style={{ backgroundColor: randomHexColor() }}>Amount</th>
          <th style={{ backgroundColor: randomHexColor() }}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.tb}>
        {transactions.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.object).isRequired,
};
