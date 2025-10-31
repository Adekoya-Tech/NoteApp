import React from 'react';
import OldIncomes from './incomes/OldIncomes';
import * as Styles from './OldbudgetsStyles';
import OldExpenses from './oldExpenses/OldExpenses';
import { useDispatch, useSelector } from 'react-redux';

const Budgets = () => {
	const dispatch = useDispatch();
	const { incomes } = useSelector((state) => state.oldIncomes);

	const { expenses } = useSelector((state) => state.oldExpenses);

	const incomeTransaction = incomes.map((income) => income.incomeAmount);

	const expenseTransaction = expenses.map((expense) => expense.expenseAmount);

	const totalIncome = incomeTransaction
		.reduce((acc, result) => (acc += result), 0)
		.toFixed(2);

		const totalExpenses = expenseTransaction
			.reduce((acc, result) => (acc += result), 0)
			.toFixed(2);


	// const totalBalance = (totalIncome - totalExpenses).toFixed(2);

	return (
		<Styles.OldBudgetsContainer>
			<h1>My Budgets </h1>
			<Styles.AmountContainer></Styles.AmountContainer>
			<Styles.OldBudgetWrapper>
				<Styles.IncomesContainer>
					<OldIncomes incomes={incomes} totalIncome={totalIncome} />
				</Styles.IncomesContainer>
				<Styles.ExpensesContainer>
					<OldExpenses expenses={expenses} totalExpenses={totalExpenses} />
				</Styles.ExpensesContainer>
			</Styles.OldBudgetWrapper>
		</Styles.OldBudgetsContainer>
	);
};

export default Budgets;
