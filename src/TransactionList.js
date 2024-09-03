import React, { useContext } from 'react'
import { GlobalContext } from './GlobalState'
import Transaction from './Transaction';

export const TransactionList=()=> {
  const {transactions}=useContext(GlobalContext);
  // console.log(transactions);
  
  return (
    <>
      <div>
        <h3 className='mt-5'>History</h3>
        <ul id="list" className="list">
          {transactions && transactions.map((transaction)=>(
           <Transaction key={transaction.id} transaction={transaction}/>
          ))}

        </ul>
      </div>

    </>
  )
}

export default TransactionList
