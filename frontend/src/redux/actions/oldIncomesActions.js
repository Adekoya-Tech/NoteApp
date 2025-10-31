export const listIncomes = () => async dispatch => {
  try {
    dispatch({
      type: 'LIST_INCOMES',
		});
  } catch (err) {
    console.log(err);

  }
}