import React, { useContext } from 'react';
import { GlobalContext } from './GlobalState';

function Balance() {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  const balanceStyle = {
    color: total >= 0 ? '#2ecc71' : '#c0392b'
  };

  return (
    <>
      <h4>Your Balance</h4>
      <h2 style={balanceStyle}>₹{total}</h2>
    </>
  );
}

export default Balance;
