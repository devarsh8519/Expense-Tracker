// import React, { useContext, useState } from 'react'
// import { GlobalContext } from './GlobalState';

// // let id=0;
// function AddTransaction() {
//     const [text,setText]=useState('');
//     const [amount,setamount]=useState();
//   const {addTransaction}=useContext(GlobalContext);

//   const onSubmit=(e)=>{
//     e.preventDefault();

//     const newTransaction={
//        id: Math.floor(Math.random() * 100000000),
//         text,
//         amount: +amount
//     }
//     addTransaction(newTransaction);
//     setText('');
//     setamount('');
//   }

//   return (
//   <>
//           <h3>Add new transaction</h3>
//           <form onSubmit={onSubmit}>
//               <div className="form-control">
//                   <label htmlFor="text">Text</label>
//                   <input type="text" id="text" placeholder="Enter text..." value={text} onChange={(e)=>{setText(e.target.value);}}/>
//               </div>
//               <div className="form-control">
//                   <label className='text-dark'>Amount</label>
//                       <p className='text-body-tertiary'>(- 1000 (Expense),  + 1000 (Income))</p>
//                   <input type="number"  placeholder="Enter amount..." value={amount} onChange={(e)=>{setamount(e.target.value);}}/>
//               </div>
//               <button className="btna">Add transaction</button>
//           </form>
// </>

//   )
// }

// export default AddTransaction
import React, { useContext, useState } from 'react';
import { GlobalContext } from './GlobalState';

function AddTransaction() {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
    setText('');
    setAmount('');
  };

  const handleDebit = (e) => {
    e.preventDefault();
    const updatedAmount = -Math.abs(amount);
    setAmount(updatedAmount);
    submitForm(updatedAmount);
  };

  const handleCredit = (e) => {
    e.preventDefault();
    const updatedAmount = Math.abs(amount);
    setAmount(updatedAmount);
    submitForm(updatedAmount);
  };

  const submitForm = (updatedAmount) => {
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: updatedAmount,
    };

    addTransaction(newTransaction);
    setText('');
    setAmount('');
  };

  return (
    <>
      <h3 className='mt-5'>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="text"
            placeholder="Enter text..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="mt-2">
          <label className='text-dark'>Amount</label>
          <input
            type="number"
            placeholder="Enter amount..."
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="button-group mt-4">
          <button type="button" onClick={handleCredit} className="a">Credit</button>
          <button type="button" onClick={handleDebit} className="b">Debit</button>
        </div>
      </form>
    </>
  );
}

export default AddTransaction;
