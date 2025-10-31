import { v4 as uuid } from 'uuid';

const initialState = {
	expenses: [
		{
			expenseDesc: 'Grocesies',
			expenseAmount: 10000,
			_id: uuid(),
		},
		{
			expenseDesc: 'Bought goods',
			expenseAmount: 1000,
			_id: uuid(),
		},
	],
};

export const expenseReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'LIST_EXPENSES':
      return {
        ...state,
        expenses: state.expenses
      };
    default:
      return state;
  }
}