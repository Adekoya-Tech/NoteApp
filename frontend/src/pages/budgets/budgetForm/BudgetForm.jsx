import { useState } from 'react';
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';
import * as Styles from './BudgetFormStyles';
import { v4 as uuid } from 'uuid';
import { createIncome } from '../../../redux/actions/incomesActions';
import { useDispatch } from 'react-redux';

const BudgetForm = () => {
	const [incomeDesc, setIncomeDesc] = useState('');
	const [incomeAmount, setIncomeAmount] = useState(0);
	const [expenseDesc, setExpenseDesc] = useState('');
	const [expenseAmount, setExpenseAmount] = useState(0);
	const [openIncome, setOpenIncome] = useState(false);
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (openIncome) {
			const newIncome = {
				incomeDesc,
				incomeAmount: parseInt(incomeAmount),
				_id: uuid(),
			};

			console.log(newIncome);
			dispatch(createIncome(newIncome));
		} else {
			const newExpenses = {
				expenseDesc,
				expenseAmount: Number(expenseAmount),
				_id: uuid(),
			};
			console.log(newExpenses);
		}
	};

	const toggleOpenIncome = () => {
		setOpenIncome(!openIncome);
	};

	return (
		<Styles.BudgetFormContainer>
			<Styles.BudgetFormOption>
				<FaPlusCircle onClick={toggleOpenIncome} />
				<FaMinusCircle onClick={toggleOpenIncome} />
			</Styles.BudgetFormOption>
			<Styles.BudgetForm onSubmit={handleSubmit}>
				{openIncome ? (
					<Styles.BudgetFormInputBox>
						<input
							type='text'
							placeholder='Enter your income'
							value={incomeDesc}
							name='incomeDesc'
							onChange={(e) => setIncomeDesc(e.target.value)}
						/>
						<input
							type='number'
							placeholder='Enter your amount'
							value={incomeAmount}
							name='incomeAmount'
							onChange={(e) => setIncomeAmount(e.target.value)}
						/>
						<button>Create Income</button>
					</Styles.BudgetFormInputBox>
				) : (
					<Styles.BudgetFormInputBox expenses='true'>
						<input
							type='text'
							placeholder='Enter your expenses'
							value={expenseDesc}
							name='expenseDesc'
							onChange={(e) => setExpenseDesc(e.target.value)}
						/>
						<input
							type='number'
							placeholder='Enter your amount'
							value={expenseAmount}
							name='expenseAmount'
							onChange={(e) => setExpenseAmount(e.target.value)}
						/>
						<button>Create Expenses</button>
					</Styles.BudgetFormInputBox>
				)}
			</Styles.BudgetForm>
		</Styles.BudgetFormContainer>
	);
};

export default BudgetForm;
