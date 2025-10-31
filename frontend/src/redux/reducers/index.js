import { combineReducers } from 'redux';
import { noteReducers } from './noteReducers';
import { oldIncomeReducers } from './oldIncomesReducer';
import { oldExpensesReducers } from './oldExpensesReducers';
import { incomeReducers } from './incomesReducer';
import { expenseReducers } from './expensesReducers';
import { users } from './userReducer';

export const reducers = combineReducers({
	users,
	notes: noteReducers,
	incomes: incomeReducers,
	expenses: expenseReducers,
	oldIncomes: oldIncomeReducers,
	oldExpenses: oldExpensesReducers,

});
