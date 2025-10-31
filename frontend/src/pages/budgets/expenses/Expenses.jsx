import { FaTrash } from "react-icons/fa";

const Expenses = ({ expenses }) => {
  return (
    <div>
      <h4>Expenses</h4>
      <ul>
        {expenses.length < 0 ? (
          <h2>No expenses yet</h2>
        ) : (
          expenses.map((expense) => (
            <li>
              <div>
                {expense.expenseDesc}
                <span>{expense.expenseAmount}</span>
              </div>
              <FaTrash/>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Expenses;
