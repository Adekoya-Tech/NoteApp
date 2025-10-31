import { v4 as uuid } from 'uuid';

const initialState = {
	incomes: [
		{
			_id: uuid(),
			incomeDesc: 'Salary',
			incomeAmount: 5000,
		},
		{
			_id: uuid(),
			incomeDesc: 'Project',
			incomeAmount: 2000,
		},
		{
			_id: uuid(),
			incomeDesc: 'Gift',
			incomeAmount: 3000,
		},
	],
};

export const oldIncomeReducers = (state = initialState, action) => {
	switch (action.type) {
		case 'LIST_INCOMES':
			return { ...state, oldIncomes: state.incomes };

		default:
			return state;
	}
};
