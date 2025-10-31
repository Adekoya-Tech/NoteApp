import styled from 'styled-components';

export const OldBudgetsContainer = styled.div`
	padding-top: 100px;
	h1 {
		text-align: center;
		margin-bottom: 50px;
	}
`;

export const AmountContainer = styled.div`
	max-width: 900px;
	width: 100%;
	margin: auto;
`;

export const OldBudgetWrapper = styled.div`
	max-width: 1200px;
	width: 100%;
	margin: auto;
	display: flex;
	justify-content: space-around;
	gap: 50px;
	flex-wrap: wrap;
`;

export const IncomesContainer = styled.div`
	max-width: 500px;
	width: 100%;
	/* border: 2px solid green; */
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
	padding: 20px;

	h4 {
		color: green;
		text-align: center;
		padding-bottom: 20px;
	}

	h2 {
		padding-bottom: 30px;
		text-align: center;
		color: green;
	}

	ul {
		display: flex;
		flex-direction: column;
		gap: 20px;

		li {
			height: 50px;
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			background-color: green;
			color: #fff;
			text-transform: capitalize;
			font-size: 18px;
			padding: 0 20px;

			div {
				display: flex;
				gap: 20px;
			}
		}
	}
`;
export const ExpensesContainer = styled.div`
	max-width: 500px;
	width: 100%;
	/* border: 2px solid green; */
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
	padding: 20px;

	h4 {
		color: red;
		text-align: center;
		padding-bottom: 20px;
	}

  h2 {
    padding-bottom: 30px;
    text-align: center;
    color: red;
  }

	ul {
		display: flex;
		flex-direction: column;
		gap: 20px;

		li {
			height: 50px;
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			background-color: red;
			color: #fff;
			text-transform: capitalize;
			font-size: 18px;
			padding: 0 20px;

			div {
				display: flex;
				gap: 20px;
			}
		}
	}
`;


