import { FaTrash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteIncome } from '../../../redux/actions/incomesActions';

const Incomes = ({ incomes }) => {
	const dispatch = useDispatch();

	const handleDelete = (id) => {
		dispatch(deleteIncome(id));
	};
	return (
		<div>
			<h4>Incomes</h4>
			<ul>
				{incomes.length === 0 ? (
					<h2>No income yet</h2>
				) : (
					incomes.map((income) => (
						<li>
							<div>
								{income.incomeDesc}
								<span>{income.incomeAmount}</span>
							</div>
							<FaTrash onClick={() => handleDelete(income._id)} />
						</li>
					))
				)}
			</ul>
		</div>
	);
};

export default Incomes;
