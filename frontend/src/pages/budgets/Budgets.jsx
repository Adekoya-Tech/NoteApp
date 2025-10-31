import React, { useEffect } from 'react';
import Incomes from './incomes/Incomes';
import { useSelector, useDispatch } from 'react-redux';
import * as Styles from './BudgetsStyles';
import Transactions from './Transactions';
import Expenses from './expenses/Expenses';
import BudgetForm from './budgetForm/BudgetForm';
import { listIncomes } from '../../redux/actions/incomesActions';

const Budgets = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(listIncomes());
	}, [dispatch]);

	const { incomes } = useSelector((state) => state.incomes);
	const { expenses } = useSelector((state) => state.expenses);

	return (
		<Styles.BudgetsContainer>
			<h1>My Budgets</h1>
			<Transactions />
			<BudgetForm />
			<Styles.ListContainer>
				<Styles.ListItemContainer>
					<Incomes incomes={incomes} />
				</Styles.ListItemContainer>

				<Styles.ListItemContainer expenses='true'>
					<Expenses expenses={expenses} />
				</Styles.ListItemContainer>
			</Styles.ListContainer>
		</Styles.BudgetsContainer>
	);
};

export default Budgets;
