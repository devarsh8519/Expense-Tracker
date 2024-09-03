// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import './Custom.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Balance from './Balance';
import IncomeExpense from './IncomeExpense';
import TransactionList from './TransactionList';
import AddTransaction from './AddTransaction';
import { GlobalProvider } from './GlobalState';


function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className='container'>
        <Balance/>
        <IncomeExpense/>
        <AddTransaction/>
        <TransactionList/>
      </div>
    </GlobalProvider>
  );
}

export default App;
