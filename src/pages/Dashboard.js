import React, { useState, useEffect } from 'react';
import AccountInfo from '../components/AccountInfo';
import Transactions from '../components/Transactions';

const mockData = {
  account_info: {
    type: "saving",
    total_bal: 52000,
    acc_no: "34534534534",
    ifsc: "ICIC9999",
    sort_code: "60-84-56",
    gross_interest: "5.04%",
    aer_interest: "5.16%"
  },
  customer_transaction: {
    transactions: [
      { name: "Amazon", transaction_type: "withdraw", amount: 5000 },
      { name: "Salary", transaction_type: "deposit", amount: 7000 },
      { name: "Rent", transaction_type: "withdraw", amount: 1500 }
    ]
  }
};

function Dashboard() {
  const [accountInfo, setAccountInfo] = useState({});
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Simulate fetching data
    setAccountInfo(mockData.account_info);
    setTransactions(mockData.customer_transaction.transactions);
  }, []);

  return (
    <div className="App h-screen flex flex-col">
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Account Page</h1>
          
        </div>
      </header>
      <div className="flex flex-1">
        
        <main className="flex-1 p-4 bg-gray-100">
          <div className="bg-gray-800 text-white shadow-md rounded-lg p-4 mb-4">
            <AccountInfo info={accountInfo} />
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <Transactions transactions={transactions} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
