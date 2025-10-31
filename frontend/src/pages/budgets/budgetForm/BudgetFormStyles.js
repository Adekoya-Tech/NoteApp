import styled, { css } from 'styled-components';

export const BudgetFormContainer = styled.div`
	width: 100%;
	padding: 50px;
	display: flex;
	gap: 50px;
`;

export const BudgetFormOption = styled.div`
	width: 100px;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 20px;

	svg {
		font-size: 30px;
    cursor: pointer;
	}

	svg:first-child {
		color: green;
	}

	svg:last-child {
		color: red;
	}
`;
export const BudgetForm = styled.form`
  max-width: 600px;
  width: 100%;


`;
export const BudgetFormInputBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;

  input {
    width: 200px;
    height: 40px;
    border: 1px solid #ddd;
    display: block;
    padding: 0 10px;
  }

  button {
    width: 120px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: green;
    color: #fff;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    text-transform: capitalize;
  }

  ${props => props.expenses && css`
    button {
      background-color: red;
    }
  `}
`;
