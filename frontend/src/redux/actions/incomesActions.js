import { INCOME_TYPES } from '../types';
import * as api from '../api'

export const listIncomes = () => async (dispatch) => {
	try
	{
		const { data } = await api.listIncomes()
		console.log(data);

		dispatch({
			type: INCOME_TYPES.INCOMES_LISTS,
			payload: data.data
		});
	} catch (err) {
		console.log(err.message);
	}
};

export const createIncome = (newIncome) => async dispatch =>
{
	try
	{
		const {data} = await api.createIncome(newIncome)
		dispatch({
			type: INCOME_TYPES.INCOMES_CREATE,
			payload: data.data
		})

		console.log(data);

	} catch (err) {
		console.log(err.message);

	}
}

export const deleteIncome = (id) => async (dispatch) => {
	try
	{
		const {data} = await api.deleteIncome(id)
    dispatch({
      type: INCOME_TYPES.INCOMES_DELETE,
      payload: id
    })
	} catch (err) {
		console.log(err.message);
	}
};
