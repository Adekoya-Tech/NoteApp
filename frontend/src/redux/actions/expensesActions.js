export const listExpenses = () => async (dispatch) => {
	try {
		dispatch({
			type: 'LIST_EXPENSES',
		});
	} catch (err) {
		console.log(err.message);
	}
};
