import { v4 as uuid } from 'uuid';
import { INCOME_TYPES } from '../types';

const initialState = {
	incomes: [
		{
			incomeDesc: 'Salary',
			incomeAmount: 30000,
			_id: uuid(),
		},
		{
			incomeDesc: 'Gift',
			incomeAmount: 5000,
			_id: uuid(),
		},
		{
			incomeDesc: 'Freelance jobs',
			incomeAmount: 5000,
			_id: uuid(),
		},
	],
};

export const incomeReducers = (state = initialState, action) => {
	switch (action.type) {
		case INCOME_TYPES.INCOMES_LISTS:
			return {
				...state,
				incomes: action.payload
			};

		case INCOME_TYPES.INCOMES_CREATE:
			return {
				...state,
				incomes: [action.payload, ...state.incomes]
			}

		case INCOME_TYPES.INCOMES_DELETE:
			return {
				...state,
				incomes: state.incomes.filter(
					(income) => income._id !== action.payload,
				),
			};
		default:
			return state;
	}
};
