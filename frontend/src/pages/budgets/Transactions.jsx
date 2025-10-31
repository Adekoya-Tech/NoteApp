import { useSelector } from 'react-redux';
import * as Styles from './TransactionsStyles';

const Transactions = () => {
	const { incomes } = useSelector((state) => state.incomes);
	const { expenses } = useSelector((state) => state.expenses);

	const incomeTransaction = incomes.map((income) => income.incomeAmount);

	const expenseTransaction = expenses.map((expense) => expense.expenseAmount);

	const totalIncome = incomeTransaction
		.reduce((acct, result) => (acct += result), 0)
		.toFixed(2);

	const totalExpenses = expenseTransaction
		.reduce((acct, result) => (acct += result), 0)
		.toFixed(2);

	const totalBudget = (totalIncome - totalExpenses).toFixed(2);

	return (
		<Styles.TransactionsContainer>
			<Styles.TransactionsInfo>
				<Styles.TransactionsTitle>
					Total: <span>{totalBudget}</span>
				</Styles.TransactionsTitle>
				<Styles.TransactionsSubTitle>
					Incomes Total: <span>{totalIncome}</span>
				</Styles.TransactionsSubTitle>
				<Styles.TransactionsSubTitle expenses='true'>
					Expenses Total: <span>{totalExpenses}</span>
				</Styles.TransactionsSubTitle>
			</Styles.TransactionsInfo>
		</Styles.TransactionsContainer>
	);
};

export default Transactions;
