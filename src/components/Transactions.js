import React from 'react';

function Transactions({ transactions }) {
  return (
    <div className="transactions">
      <h2 className="text-xl font-bold mb-2">Transactions</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border">Name</th>
            <th className="py-2 px-4 border">Transaction Type</th>
            <th className="py-2 px-4 border">Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border">{transaction.name}</td>
              <td className="py-2 px-4 border">
                {transaction.transaction_type === "withdraw" ? "Withdraw" : "Deposit"}
              </td>
              <td className="py-2 px-4 border">£{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Transactions;
