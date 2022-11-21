import logo from './logo.svg';
import './App.css';
import AccountContext from "./context/index"
import { useState } from 'react';
import Account from './components/Account';


const __accounts = [
  {
    account_id: 1,
    account_code: 20,
    account_name: "Fixed Resource",
    account_type: "debit",
    account_category: "Resource",
    use_status: true,
    note: "active account"
  },
  {
    account_id: 2,
    account_code: 21,
    account_name: "Use Resource 1",
    account_type: "debit",
    account_category: "Resource",
    use_status: true,
    note: "active account"
  },
  {
    account_id: 3,
    account_code: 22,
    account_name: "Resource 1",
    account_type: "debit",
    account_category: "Resource",
    use_status: true,
    note: "active account"
  },
  {
    account_id: 4,
    account_code: 23,
    account_name: "Resource 11",
    account_type: "debit",
    account_category: "Resource",
    use_status: true,
    note: "active account"
  },
  {
    account_id: 5,
    account_code: 24,
    account_name: "Resource 12",
    account_parent_code: 1,
    account_type: "debit",
    account_category: "Resource",
    use_status: true,
    note: "active account"
  },
  {
    account_id: 7,
    account_code: 25,
    account_name: "Resource 13",
    account_parent_code: 2,
    account_type: "debit",
    account_category: "Resource",
    use_status: true,
    note: "active account"
  },
  {
    account_id: 8,
    account_code: 26,
    account_name: "Resource 14",
    account_parent_code: 3,
    account_type: "debit",
    account_category: "Resource",
    use_status: true,
    note: "active account"
  },
  {
    account_id: 9,
    account_code: 27,
    account_name: "Resource 15",
    account_parent_code: 4,
    account_type: "debit",
    account_category: "Resource",
    use_status: true,
    note: "active account"
  },
  {
    account_id: 10,
    account_code: 27,
    account_name: "Resource 15",
    account_parent_code: 1,
    account_type: "debit",
    account_category: "Resource",
    use_status: true,
    note: "active account"
  },
]



function App() {
  const [accounts, setAccounts] = useState(__accounts)


  return (
    <AccountContext.Provider value={{ accounts, setAccounts }} >
      <Account />

    </AccountContext.Provider>
  );
}

export default App;
