import { v4 as uuid } from 'uuid';

const initialState = {
	expenses: [
		{
			_id: uuid(),
			expenseDesc: 'Grocesory',
			expenseAmount: 2000,
		},
		{
			_id: uuid(),
			expenseDesc: 'Phone',
			expenseAmount: 1000,
		},
	],
};

export const oldExpensesReducers = (state = initialState, action) => {
	switch (action.type) {
		case 'LIST_EXPENSES':
			return { ...state, expenses: state.expenses };

		default:
			return state;
	}
};
