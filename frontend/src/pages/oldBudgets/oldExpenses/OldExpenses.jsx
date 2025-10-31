import React from 'react';
import { FaTrash } from 'react-icons/fa';

const OldExpenses = ({ expenses, totalExpenses }) => {
  return (
    <div>
      <h4>OldExpenses</h4>
      <h2>Total Expenses: {totalExpenses}</h2>
      <ul>
        {expenses.map((expense) => (
          <li key={expense._id}>
            <div>
              <span>{expense.expenseDesc}</span>
              <span>N{expense.expenseAmount}</span>
            </div>
            <FaTrash />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OldExpenses;
